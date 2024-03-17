/** @type {import('tailwindcss').Config} */
import Form from "@tailwindcss/forms";
import Typography from "@tailwindcss/typography";
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 添加一个自定义组件类
      components: {
        // 为h1标题应用Tailwind CSS类
        h1: {
          apply: 'text-4xl font-bold text-gray-900',
        },
        // 为其他标题继续添加样式
        h2: {
          apply: 'text-3xl font-semibold text-gray-800',
        },
        h3: {
          apply: 'text-2xl font-bold text-gray-700',
        },
        // 更多标题样式...
      },
    },
  },
  plugins: [Form, Typography],
};