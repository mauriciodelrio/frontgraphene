import moment from "moment";
const Footer = () => {
    // footer bottom page content
    return (
        <footer className="flex items-center justify-center w-full border-t border-gray-200 pt-4 pb-4 text-center text-gray-600">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edugraphene © {moment().format('YYYY')} - Todos los derechos reservados. <span className="text-orange-600">
            {' '}Powered by <a href="htps://delrio.dev" target={'_blank'}>DelRio.dev</a> </span> 
        </a>
      </footer>
    );
};

export default Footer;