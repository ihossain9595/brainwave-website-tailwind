import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">Helping people create beautiful content at</h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li key={index} className="flex flex-1 items-center justify-center h-[8.5rem]">
            <img src={logo} alt={logo} width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
