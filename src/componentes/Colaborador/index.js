import { AiFillCloseCircle } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { FaHeart } from 'react-icons/fa';

import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {
    function favoritar (){
        aoFavoritar(colaborador.id)
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <AiFillCloseCircle 
            size={25} 
            className="deletar" 
            onClick={ () => aoDeletar(colaborador.id)} 
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                    ? <FaHeart {...propsfavorito} color='#ff0000'/> 
                    : <CiHeart {...propsfavorito}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador