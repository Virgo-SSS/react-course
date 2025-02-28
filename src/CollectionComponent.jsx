export const CollectionComponent = () => {
    const data = [
        {
            id:0,
            name:"Budi",
            sex: "male"
        },
        {
            id:1,
            name:"Budi 2",
            sex: "male"
        }
    ]

    return (
        <>
            <ul>
                {data.map((person) => {
                    // key di perlukan agar react tau component mana yang berubah jika terjadi perubahan oleh sebab itu jika
                    // membuat component yang sama berkali2 seperti code berikut, disarankan untuk memberikan key unique kepada masing2 component
                    return (
                        <>
                            <ListComponent {...person} key={person.id} />
                            <ListComponentSecond {...person} key={person.id} />
                        </>
                    )
                })}
            </ul>
        </>
    )
}

// membuat komponen bisa dengan berikut:
function ListComponent(props) {
    return(
        <>
            <li>{props.name} - {props.sex}</li>
        </>
    )
}

// atau sebagai beriktu:
const ListComponentSecond = (props) => {
    return (
        <>
            <li>{props.name} - {props.sex} from component second</li>
        </>
    )
}