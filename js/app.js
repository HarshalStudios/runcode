/* 
  RunCode IDE - Local Compiler Simulator
  Controls language selection, templates, code updates, and terminal outputs.
*/

const languageTemplates = {
  python: {
    extension: 'main.py',
    color: '#3776AB',
    code: `# Student Grade Analytics\ngrades = [88, 92, 79, 95, 84]\naverage = sum(grades) / len(grades)\n\nprint("--- Grade Report ---")\nprint(f"Class Average: {average:.2f}")\nprint("Status: All students passed! 🚀")`,
    output: `--- Grade Report ---\nClass Average: 87.60\nStatus: All students passed! 🚀`
  },
  java: {
    extension: 'Main.java',
    color: '#007396',
    code: `// Java Algorithm Example\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Compiling standard workspace...");\n        int result = fibonacci(6);\n        System.out.println("Fibonacci(6) result is: " + result);\n    }\n    \n    private static int fibonacci(int n) {\n        if (n <= 1) return n;\n        return fibonacci(n-1) + fibonacci(n-2);\n    }\n}`,
    output: `Compiling standard workspace...\nFibonacci(6) result is: 8`
  },
  cpp: {
    extension: 'main.cpp',
    color: '#00599C',
    code: `// C++ Container Operations\n#include <iostream>\n#include <vector>\n#include <numeric>\n\nint main() {\n    std::vector<int> scores = {98, 85, 91};\n    int total = std::accumulate(scores.begin(), scores.end(), 0);\n    \n    std::cout << "Successfully linked C++ libraries." << std::endl;\n    std::cout << "Sum total: " << total << std::endl;\n    return 0;\n}`,
    output: `Successfully linked C++ libraries.\nSum total: 274`
  },
  javascript: {
    extension: 'index.js',
    color: '#F7DF1E',
    code: `// Modern JS Array Operations\nconst users = [\n  { name: "Alex", active: true },\n  { name: "Sam", active: false },\n  { name: "Taylor", active: true }\n];\n\nconst activeUsers = users.filter(u => u.active);\nconsole.log("Active users count:", activeUsers.length);\nconsole.log("Current session live users:", activeUsers.map(u => u.name));`,
    output: `Active users count: 2\nCurrent session live users: [ 'Alex', 'Taylor' ]`
  }
};

let selectedLanguage = 'python';
let isCompiling = false;

document.addEventListener('DOMContentLoaded', () => {
  const codeArea = document.getElementById('static-code-editor');
  const terminalArea = document.getElementById('static-terminal-console');
  const runBtn = document.getElementById('static-run-btn');
  const resetBtn = document.getElementById('static-reset-btn');
  const fileLabel = document.getElementById('static-file-label');
  const tabButtons = document.querySelectorAll('.static-lang-tab');

  if (!codeArea) return; // Guard for pages without compiler mockup

  // Initialize templates
  const initTemplate = (lang) => {
    selectedLanguage = lang;
    codeArea.value = languageTemplates[lang].code;
    fileLabel.innerText = languageTemplates[lang].extension;
    terminalArea.innerHTML = `<span style="color:#9497A8;opacity:0.6;">Click "Run Code" to execute compiling pipeline...</span>`;
  };

  // Setup tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      initTemplate(btn.dataset.lang);
    });
  });

  // Simulator Engine Run
  runBtn.addEventListener('click', () => {
    if (isCompiling) return;
    isCompiling = true;
    runBtn.innerText = 'Compiling...';
    runBtn.style.opacity = '0.7';

    terminalArea.innerHTML = `$ compile ${languageTemplates[selectedLanguage].extension}\nCompiling source elements...\n`;
    
    setTimeout(() => {
      terminalArea.innerHTML += `Linking shared libraries...\n`;
    }, 400);

    setTimeout(() => {
      terminalArea.innerHTML += `Running standard process...\n\n`;
    }, 800);

    setTimeout(() => {
      terminalArea.innerHTML += `<span style="color:#10B981;">${languageTemplates[selectedLanguage].output}</span>\n\nProcess finished with exit code 0.`;
      isCompiling = false;
      runBtn.innerText = 'Run Code';
      runBtn.style.opacity = '1';
    }, 1200);
  });

  // Reset template
  resetBtn.addEventListener('click', () => {
    initTemplate(selectedLanguage);
  });

  // Init default Python
  initTemplate('python');
});
