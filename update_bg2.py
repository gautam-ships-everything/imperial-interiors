import os
pages = [r'app\catalogue\page.tsx', r'app\catalogue\[category]\page.tsx', r'app\contact\page.tsx']
for page in pages:
    if os.path.exists(page):
        with open(page, 'r', encoding='utf-8') as f:
            content = f.read()
        if 'bg-marble-bg' not in content:
            new_content = content.replace('className=\"max-w-7xl mx-auto', 'className=\"max-w-7xl mx-auto bg-marble-bg/95 shadow-2xl relative z-10 my-20 rounded-xl')
            if new_content != content:
                with open(page, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print('Updated ' + page)
