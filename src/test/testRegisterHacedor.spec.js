import registrarHacedor from '../pageObject/registerHacedor'
import * as dataRegisterHacedor from "../data/dataRegisterHacedor.json"
import * as urls from "../utils/URL.json"

describe('Tests para registrar un usuario con rol hacedor', async () => {

    beforeEach('Cargando pagina principal' , async() => {
        await browser.url(urls.REGISTERHACEDOR_URL)
    })

    it('Registrar Hacedor', async () => {
    
        await registrarHacedor.registrarHacedor(dataRegisterHacedor)
        await browser.pause(10000)
    })

})