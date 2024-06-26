const HeaderTitle = ({ title, subtitle, textCenter }) => {
    return (
      <>
        {title && <h1 className={`font-semibold text-4xl text-gray-950 ${textCenter?'text-center':''}`}>{title}</h1>}
        {subtitle && <h2 className={`font-medium text-2xl text-gray-900 uppercase ${textCenter?'text-center':''}`}>{subtitle}</h2>}
      </>
    );
  };

  export default HeaderTitle;