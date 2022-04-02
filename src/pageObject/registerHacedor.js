class registerHacedor {

    get tbxName() { return $("#RHName") }
    get tbxDocument() { return $("#RHDocument") }
    get tbxDireccion() { return $("#RHDireccion") }
    get tbxEmail() { return $("#RHEmail") }
    get tbxPassword() { return $("#RHPassword") }
    get tbxWorkarea() { return $("#RHWorkarea") }
    get tbxType() { return $("#RHType") }
    get btnRegistrarse() { return $("#submitButton") }
    get btnInscribirTrabajo() { return $("#link2") }
    get btnCancelar() { return $("#RHCancelButton") }
    get btnEliminar() { return $("#RHDeleteButton") }
    get btnContinuar() { return $("#RHContinueButton") }

    async registrarHacedor({ name, document, direccion, email, password, workarea, jobs}) {
        await this.tbxName.setValue(name)
        await this.tbxDocument.setValue(document)
        await this.tbxDireccion.setValue(direccion)
        await this.tbxEmail.setValue(email)
        await this.tbxPassword.setValue(password)
        await this.tbxWorkarea.setValue(workarea)

        await this.btnRegistrarse.click()

        await this.tbxType.setValue(jobs)

        await this.btnInscribirTrabajo.click()
        await this.btnContinuar.click()
    }
}

export default new registerHacedor()