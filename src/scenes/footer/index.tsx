import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ipsa
            minima expedita tempora, quo pariatur laborum tempore molestias,
            repellat reiciendis molestiae iure consequuntur magni soluta magnam
            dolorem recusandae, itaque voluptas?
          </p>
          <p>Evogym All Right Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massas orci senectus</p>
          <p className="my-5">Et gravid id et etiems</p>
          <p>Ulamcorper viamis</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Massas orci senectus</p>
          <p className="my-5">Et gravid id et etiems</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
