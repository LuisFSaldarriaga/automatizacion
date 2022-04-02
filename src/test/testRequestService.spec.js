import solicitarServicio from '../pageObject/requestServicio'
import * as dataRequestServicio from "../data/dataRequestServicio.json"
import * as urls from "../utils/URL.json"

describe('Tests para solicitar servicio', async () => {

    beforeEach('Cargando pagina principal' , async() => {
        await browser.url(urls.REQUESTSERVICE_URL)
    })

    it('Solicitar Servicio', async () => {
    
        await solicitarServicio.solicitarServicio(dataRequestServicio)
        await browser.pause(10000)
    })

})