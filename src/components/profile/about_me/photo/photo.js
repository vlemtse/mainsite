import c from './photo.module.css'

const Photo = () => {
    return (
        <div className={c.box}>
            <img className= {`${c.photo} ${c.img}`}
                src='https://st3.depositphotos.com/15208558/i/600/depositphotos_180183478-stock-photo-portrait-silhouette-man-hood-black.jpg'
                alt=''/>
        </div>
    )
}

export default Photo