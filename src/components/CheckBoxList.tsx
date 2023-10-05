const CheckBoxList = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-xs font-medium w-[70%]">Join 60,000+ product managers receiving monthly updates on:</p>

      <ul className="flex flex-col gap-2">
        <li className="flex gap-3 items-center">
          <input type="checkbox" />
          <p className="text-xs ">Product discovery and building what matters</p>
        </li>
        <li className="flex gap-3">
          <input type="checkbox" />
          <p className="text-xs ">Measuring to ensure updates are a success</p>
        </li>
        <li className="flex gap-3">
          <input type="checkbox" />
          <p className="text-xs ">And much more!</p>
        </li>
      </ul>
    </div>
  );
};

export default CheckBoxList;
