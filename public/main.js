async function init() {
    
    let rustApp = null
    try {
        rustApp = await import('../pkg')
    } catch (e) {
        console.error(e)
        return;
    }

    const input = document.getElementById("upload");
    const fileReader = new FileReader();
   
    input.addEventListener('change', (e) => {
        fileReader.readAsDataURL(input.files[0]);
        fileReader.onloadend = () => {
            const base64 = fileReader.result.replace(
                /^data:image\/(png|jpeg|jpg);base64,/,
                ""
            );

            rustApp.grayscale(base64)
            
        }

    })
}

init()