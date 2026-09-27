#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""把 graded-reader 页面导出的「已掌握词」合并进 eng-news-learner 的 profile.json。

用法：
    python3 merge_profile.py known-words-npr-south-africa-2026-09-27.json
    python3 merge_profile.py 导出.json --profile /path/to/profile.json

默认 profile 路径在下方 DEFAULT_PROFILE，可按实际位置修改。
"""
import argparse
import json
import shutil
import sys
from datetime import datetime
from pathlib import Path

DEFAULT_PROFILE = Path("/Users/zq/.zcode/workspace/default/eng-news-learner/profile.json")


def extract_words(data) -> list:
    if isinstance(data, list):
        return data
    if isinstance(data, dict):
        for key in ("words", "known_beyond"):
            if isinstance(data.get(key), list):
                return data[key]
    raise SystemExit("无法从导出文件里找到词列表（需要 words / known_beyond 字段，或纯数组）")


def main():
    ap = argparse.ArgumentParser(description="合并已掌握词到词汇画像")
    ap.add_argument("export", help="graded-reader 导出的 JSON 文件")
    ap.add_argument("--profile", type=Path, default=DEFAULT_PROFILE, help="profile.json 路径")
    args = ap.parse_args()

    if not args.profile.exists():
        sys.exit(f"找不到 {args.profile}")

    data = json.loads(Path(args.export).read_text(encoding="utf-8"))
    words = [str(w).strip().lower() for w in extract_words(data) if str(w).strip()]

    profile = json.loads(args.profile.read_text(encoding="utf-8"))
    known = profile.setdefault("known_beyond", [])
    before = len(known)
    added = [w for w in words if w not in known]
    known.extend(added)

    backup = args.profile.with_suffix(".json.bak")
    shutil.copy2(args.profile, backup)
    profile["tested_at"] = datetime.now().isoformat(timespec="seconds")
    args.profile.write_text(json.dumps(profile, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"导出文件含 {len(words)} 词，新增 {len(added)} 个（去重后）：")
    for w in added:
        print(f"  + {w}")
    if not added:
        print("（没有新词）")
    print(f"known_beyond: {before} → {len(known)}")
    print(f"profile.json 已更新（备份在 {backup.name}），grader 下次分级即生效")


if __name__ == "__main__":
    main()
