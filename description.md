🎯 **What:** Extracted `buildShortCitation`, `extractDoi`, and `extractUrl` from `transformers.ts` and `authoringCompiler.ts` into a new `citations.ts` utility file.
💡 **Why:** Eliminates duplicated code, ensuring any future updates to citation parsing are applied uniformly. This directly addresses the code health issue of "Duplicate logic for parsing citations".
✅ **Verification:** Ran `npm run lint` and `npm run content:validate`. All tests passed. Confirmed unused functions were properly removed from their original files.
✨ **Result:** Improved codebase maintainability by centralizing citation-related utilities.
