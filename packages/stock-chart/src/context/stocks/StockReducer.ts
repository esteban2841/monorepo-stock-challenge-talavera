/* eslint-disable @typescript-eslint/no-explicit-any */
import { StockContext } from './StockContext';

interface Actions {
    type: string,
    payload: any
}

export const StockReducer = (state: StockContext, action: Actions) : StockContext => {
    switch (action.type) {
        case 'toggleSideBarMenu':
            return{
                ...state,
                activeSideBarMenu: action.payload
            }
        
        case 'toggleStockListModal':
            return{
                ...state,
                activeStockListModal: action.payload
            }
        
        case 'setUserLogged':
            
            return {
                ...state,
                usuario: {...action.payload}
            }
        case 'setStockListGainers':
            
            return {
                ...state,
                stockGainersList: action.payload
            }
        case 'logout':
                
            

            return {
                ...state,
                usuario: {
                    usuario: '',
                    contraseña: '',
                    correo: '',
                    celular: '',
                    direccion: '',
                    ciudad: {id: 0, name: ''},
                    departamento: {id: 0, name: ''},
                }
            }
        case 'setCurrentSymbolPrice':

            return {
                ...state,
                currentSymbolPrice: action.payload
            }
            
            default:
            return state
    } 
}