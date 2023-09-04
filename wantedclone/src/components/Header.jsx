export default function Header({ title }) {
  return (
    <div className="flex justify-between items-center py-5 mb-[30px]">
      <div className="flex justify-start items-center w-1/3">
        <span className="text-[17px] text-start lighter">취소</span>
      </div>
      <h2 className="text-lg text-center bolder w-1/3">{title}</h2>
      <div className="flex justify-end items-center w-1/3"></div>
    </div>
  );
}
