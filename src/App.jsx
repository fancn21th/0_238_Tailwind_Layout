function App() {
  return (
    <div className="w-screen h-screen">
      {/* 历史消息 */}
      <div className="w-full h-full bg-slate-100">消息历史</div>
      {/* 用户输入 */}
      <div className="fixed bottom-0 w-full flex justify-center bg-blue-100">
        {/* 输入组件 */}
        <div className="w-[456px] relative">
          {/* @ -top-[100%] */}
          <div className="animate-pulse absolute bottom-[100%] w-full bg-blue-500">
            @
          </div>
          <div className="animate-pulse absolute bottom-[100%] w-full left-4 bg-green-500">
            #
          </div>
          <div className="animate-pulse absolute bottom-[100%] w-full left-8 bg-yellow-500">
            /
          </div>
          {/* 输入文本域组件 */}
          <textarea className="w-full">请输入消息...</textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
