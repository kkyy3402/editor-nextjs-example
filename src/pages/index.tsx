// ./pages/index.tsx
import { useState } from "react";
import dynamic from "next/dynamic";
import { OutputData } from "@editorjs/editorjs";

const Editor = dynamic(() => import("../components/Editor"), { ssr: false });

const Home: React.FC = () => {
  const [editorData, setEditorData] = useState<OutputData | undefined>(undefined);

  const handleEditorChange = (data: OutputData) => {
    setEditorData(data);
  };

  return (
      <div>
        <h1>Editor.js with Next.js 12 and TypeScript</h1>
        <Editor
            data={editorData}
            onChange={handleEditorChange}
            holder="editorjs-container"
            readonly={false}
        />
          <span>{JSON.stringify(editorData)}</span>
      </div>
  );
};

export default Home;
