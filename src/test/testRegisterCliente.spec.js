import registrarCliente from '../pageObject/registerCliente'
import * as dataRegisterCliente from "../data/dataRegisterCliente.json"
import * as urls from "../utils/URL.json"

describe('Tests para registrar un usuario con rol cliente', async () => {

    beforeEach('Cargando pagina principal' , async() => {
        await browser.url(urls.REGISTERCLIENTE_URL)
    })

    it('Registrar Cliente', async () => {
    
        await registrarCliente.registrarCliente(dataRegisterCliente)
        await browser.pause(10000)
    })

})