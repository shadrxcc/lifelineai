export default function ConversationHeader() {
  return (
    <div id="convo-header" className="px-10 py-6">
      <div className="flex gap-x-3 items-center">
        <img src="/pfp.svg" alt="" />
        <div className="flex flex-col gap-y-1">
          <p className="text-lg leading-5">Jane Doe</p>
          <span className="flex items-center gap-x-1">
            <img src="/active.svg" alt="" />
            <p className="text-sm text-[#00A739]">Active</p>
          </span>
        </div>
      </div>
    </div>
  );
}
