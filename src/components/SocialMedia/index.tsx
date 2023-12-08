import wa from '../../assets/svg/socmed/wa.svg';
import ig from '../../assets/svg/socmed/ig.svg';
export const SocialMedia = () => {
  return (
    <section className="py-4">
        <div className="container">
            <div className="text-center">
                <p className="fw-semibold fs-3">Finds Us :</p>
                <div className="d-flex justify-content-center gap-4">
                        <img className="rounded-circle" height={32} src={wa} alt='whatsapp'/>
                        <img className="rounded-circle" height={32} src={ig} alt='instagram'/>
                </div>
            </div>
        </div>
    </section>
  )
}
