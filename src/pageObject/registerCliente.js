class registerCliente {

    get tbxName() { return $("#RCName") }
    get tbxDocument() { return $("#RCDocument") }
    get tbxDireccion() { return $("#RCDireccion") }
    get tbxEmail() { return $("#RCEmail") }
    get tbxPassword() { return $("#RCPassword") }
    get btnRegistrarse() { return $("#RCButtonRegister") }

    async registrarCliente({ name, document, direccion, email, password}) {
        await this.tbxName.setValue(name)
        await this.tbxDocument.setValue(document)
        await this.tbxDireccion.setValue(direccion)
        await this.tbxEmail.setValue(email)
        await this.tbxPassword.setValue(password)

        await this.btnRegistrarse.click()
    }
}

export default new registerCliente()