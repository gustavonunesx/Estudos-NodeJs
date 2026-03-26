const mainPrompt = [
    {
        name: "select",
        description: "escolha a ferramenta (1- QRCODE OU (2-PASSWORD",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        required: true,
    },
]