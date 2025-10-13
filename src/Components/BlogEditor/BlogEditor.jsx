import { Editor } from "@tinymce/tinymce-react";

import "prismjs";
import "prismjs/themes/prism.css";

function BlogEditor({ editorRef, content = "" }) {
  return (
    <Editor
      apiKey="ua61d1krttgv7sgmy1vpslmdpv3cpizymwzboe4gmwv32aqo"
      onInit={(_evt, editor) => (editorRef.current = editor)}
      initialValue={content}
      init={{
        height: 500,
        menubar: false,
        resize: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
          "codesample",
        ],
        toolbar:
          "undo redo | blocks | codesample | code |" +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        codesample_global_prismjs: true,
        codesample_languages: [
          { text: "HTML/XML", value: "markup" },
          { text: "JavaScript", value: "javascript" },
          { text: "CSS", value: "css" },
        ],
      }}
    />
  );
}

export default BlogEditor;
