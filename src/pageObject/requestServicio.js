let selectDataRol, selectDataType

class requestServicio {

    get tbxEmail() { return $("#emailInput") }
    get tbxPassword() { return $("#passwordInput") }
    get tbxDescryption() { return $("#RSDescryption") }
    get tbxValue() { return $("#RSValue") }
    get btnIngresar() { return $("#submitButton") }
    get btnSolicitar() { return $("#RSSolicitarButton") }
    get btnContinuar() { return $("#RSContinuarButton") }
    get selectRol() { return $(`//select[@id="rolInput"]//option[@value="${selectDataRol}"]`) }
    get selectType() { return $(`//select[@id="RSType"]//option[@value="${selectDataType}"]`) }

    async solicitarServicio({ email, password, selectRol, selectType, descryption, value }) {
        selectDataRol = selectRol
        selectDataType = selectType
        await this.tbxEmail.setValue(email)
        await this.tbxPassword.setValue(password)

        await this.selectRol.click()
        await this.btnIngresar.click()

        await this.selectType.click()
        await this.tbxDescryption.setValue(descryption)
        await this.tbxValue.setValue(value)

        await this.btnSolicitar.click()
        await this.btnContinuar.click()
    }
}

export default new requestServicio()