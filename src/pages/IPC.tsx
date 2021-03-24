const { test } = window.rpc;

export const IPC = () => {
  const handleCreateWindow = () => {
    test('msgggggg!');
  }
  return <div>
    <button onClick={handleCreateWindow}>call</button>
  </div>
}
