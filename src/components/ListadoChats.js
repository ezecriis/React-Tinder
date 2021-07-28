import "./ListadoChats.css";
import ChatPrevisualizacion from "./ChatPrevisualizacion";

function ListadoChats() {
    return (
        <div className="listadoChats">
            <ChatPrevisualizacion 
            nombre="Laurita"
            mensaje="Hola como estas?"
            timestamp="Hace 40seg"
            imgPerfil="https://scontent.fepa2-1.fna.fbcdn.net/v/t1.6435-9/105646931_354317412216811_5184100498275552901_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_ohc=gHT8S2-L00UAX_iiIsH&_nc_ht=scontent.fepa2-1.fna&oh=2514951a6af765cab56fdc116d15863f&oe=6124FF5F"
            />

            <ChatPrevisualizacion 
            nombre="Cami"
            mensaje="Hola que tal?"
            timestamp="Hace 56seg"
            imgPerfil="https://scontent.fepa2-1.fna.fbcdn.net/v/t1.6435-9/84266460_10219349540101736_3747362277179785216_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_ohc=6PtakuS4VA8AX-PO37e&tn=6fUlt41m5k9DDG3J&_nc_ht=scontent.fepa2-1.fna&oh=bfd8bf0f83a32dc85325e2f996f88582&oe=6128051D"
            />

            <ChatPrevisualizacion 
            nombre="Nati"
            mensaje="Hola?"
            timestamp="Hace 1hs"
            imgPerfil="https://scontent.fepa2-1.fna.fbcdn.net/v/t1.6435-9/152714603_10225471488079894_3539902766210405997_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=Y5dgm96O26wAX8yn7Ny&tn=6fUlt41m5k9DDG3J&_nc_ht=scontent.fepa2-1.fna&oh=57f01e7ce64ab29a8d65f3c04d3f4705&oe=612818C3"
            />

            <ChatPrevisualizacion 
            nombre="Stella"
            mensaje="Hola como va?"
            timestamp="Hace 1h"
            imgPerfil="https://scontent.fepa2-1.fna.fbcdn.net/v/t1.6435-9/159578006_806649106727330_1067162013147811851_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_ohc=cVC6JQMfBNgAX9EYRGV&_nc_ht=scontent.fepa2-1.fna&oh=082fc0a2db7f3c688e5e37f580f676ee&oe=6128EA30"
            />

            <ChatPrevisualizacion 
            nombre="Maxi"
            mensaje="Hello how are you?"
            timestamp="Hace 2h"
            imgPerfil="https://scontent.fepa2-1.fna.fbcdn.net/v/t1.6435-9/87289119_2811064135608118_4302904219469348864_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=xsPAHPiFS2cAX83CoTq&_nc_ht=scontent.fepa2-1.fna&oh=249b98cc59f1e19da667c3885431b470&oe=61287719"
            />

        </div>
    )
}

export default ListadoChats;
