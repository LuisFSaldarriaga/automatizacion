let selectData

class login {

    get tbxEmail() { return $("#emailInput") }
    get tbxPassword() { return $("#passwordInput") }
    get btnIngresar() { return $("#submitButton") }
    get selectRol() { return $(`//select[@id="rolInput"]//option[@value="${selectData}"]`) }

    async ingresarLogin({ email, password, selectRol }) {
        selectData = selectRol
        await this.tbxEmail.setValue(email)
        await this.tbxPassword.setValue(password)

        await this.selectRol.click()
        await this.btnIngresar.click()

        if (selectRol === "cliente") {
            expect(browser).toHaveUrl('http://localhost:3000/solicitar_servicio')
        } else if (selectRol === "hacedor") {
            expect(browser).toHaveUrl('http://localhost:3000/consultar_servicio')
        }
    }
}

export default new login()