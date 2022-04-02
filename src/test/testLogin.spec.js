import ingresarLogin from '../pageObject/login'
import * as dataLogin from "../data/dataLogin.json"
import * as urls from "../utils/URL.json"

describe('Tests para crear iniciar sesion', async () => {

    beforeEach('Cargando pagina principal' , async() => {
        await browser.url(urls.LOGIN_URL)
    })

    it('Iniciar Sesión', async () => {
    
        await ingresarLogin.ingresarLogin(dataLogin)
        await browser.pause(10000)
    })

})