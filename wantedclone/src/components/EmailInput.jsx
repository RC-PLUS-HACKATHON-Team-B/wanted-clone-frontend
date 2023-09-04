function EmailInput({ email }) {
  return (
    <div className="flex flex-col gap-[9px] mb-[25px]">
      <label htmlFor="email" className="text-sm text-[#888888]">
        이메일
      </label>
      <input
        id="email"
        type="email"
        value={email}
        disabled
        className="h-[50px] px-3 rounded-md border-[1px] border-[#E1E2E3] text-gray-300 lighter tracking-wide"
      />
    </div>
  );
}

export default EmailInput;
