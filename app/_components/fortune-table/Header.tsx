const Header = () => {
  return (
    <header className="w-full h-14 pt-3 flex flex-col gap-1 bg-[url('/images/img-layer.png')] bg-no-repeat bg-cover">
      <p className="text-center font-bold text-fortune-table-title-text-color">
        김로켓님의 사주
      </p>
      <p className="text-center text-xl font-extrabold text-fortune-table-title-text-color">
        1980년 8월27일 08:10
      </p>
    </header>
  );
};

export default Header;
