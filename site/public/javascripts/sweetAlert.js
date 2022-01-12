window.addEventListener('load', () => {

    let forms = document.querySelectorAll('#eliminar-producto');
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', event => {
            event.preventDefault();
            Swal.fire({ 
                customClass: {
                    confirmButton: 'swalBtnColor',
                    cancelButton: 'swalBtnColor'
                },

                title: '¿Estas segur@ que quieres eliminar el producto?',
                text: "¡Esta acción es irreversible!",
                icon: 'warning',
                iconColor: '#2d2254',
                background: "#ffffff",
                showCancelButton: true,
                confirmButtonColor: '#2d2254',
                cancelButtonColor: '#f1d367',
                confirmButtonText: 'Si, eliminar',
                cancelButtonText: 'Cancelar',
                showClass: {
                    popup: 'animate_animated animate_fadeInDown'
                },

            }).then((result) => {

                if (result.isConfirmed) {
                    forms[i].submit();
                }

            })
        })
    }
})

