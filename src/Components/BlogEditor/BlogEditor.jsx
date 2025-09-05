import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

function BlogEditor() {
    const editorRef = useRef(null);

    return <Editor
        apiKey='p20swv5kon0vqiulafvdcwtizpumrwe4vkfzr3ej5a248ua5'
        onInit={(_evt, editor) => editorRef.current = editor}
        init={{
            height: 500,
            menubar: false,
            resize: false,
            plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
    />
}

export default BlogEditor;