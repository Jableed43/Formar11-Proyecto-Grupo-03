const preview = document.getElementById('preview');

const showPreview = () => {
    preview.src=window.URL.createObjectURL(this.files[0])
}    
