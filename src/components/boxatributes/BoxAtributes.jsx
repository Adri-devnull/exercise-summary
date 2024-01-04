import { v4 } from "uuid";
import { infoAtributes } from "../../constants/infoAtributes";
import Atributes from "../atributes/Atributes";
import style from "./BoxAtributes.module.css"

const BoxAtributes = () => {
    return <div className={style.container}>
        {infoAtributes.map(atribute => {
            return (
                <Atributes
                    key={v4()}
                    title={atribute.title}
                    points={atribute.points}
                    url={atribute.url}
                    color={atribute.color}
                    bgColor={atribute.bgColor}
                />
            )
        })}
    </div>
}

export default BoxAtributes;