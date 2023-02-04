const Footer = () => {
  return (
    <footer className="bg-[#d9d9d9]">
      <div className="flex justify-between items-center p-10">
        <div className="flex">
          <div>
            <h1 className="font-bold">COMPANY INFO</h1>
            <p>About COLLECTOR</p>
            <p>Affiliate Program </p>
            <p>Social Resposibility</p>
            <p>Careers</p>
            <p>Term & Conditions</p>
          </div>
          <div className="ml-14">
            <h1 className="font-bold">Customer Care</h1>
            <p>Help Center</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold pb-2">Social Media</h1>
          <i className="fa-brands fa-facebook pr-1" />
          <i className="fa-brands fa-instagram pr-1" />
          <i className="fa-brands fa-twitter pr-1" />
          <i className="fa-brands fa-youtube pr-1" />
          <i className="fa-brands fa-tiktok" />
          <h1 className="font-bold py-2">Official Contact</h1>
          <i className="fa-brands fa-line pr-1" />
          <i className="fa-brands fa-whatsapp pr-1" />
          <i className="fa-brands fa-weixin pr-1" />
          <i className="fa-brands fa-snapchat" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
