import c from './description.module.css'

const Description = () => {
    return (

        <div className={c.description}>
            <div className={c.name}>Иванов Иван Иваныч</div>
            <div className={c.activity}>Online</div>
            <div className={c.birthday}>01.01.2021</div>
            <div className={c.city}>Город</div>
            <div className={c.phone}>+7(999)555-55-55</div>
        </div>


    )
}

export default Description