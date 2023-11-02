import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const Dropdown1 = () => {
  return (
    <div className="m-8">
      <h1 className="mb-2 text-xl font-bold">ドロップダウンメニュー(Radix Primitives)</h1>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="rounded-lg border bg-gray-600 px-4 py-2 font-bold text-white outline-none hover:bg-gray-400">
            Menu
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="mt-2 min-w-[140px] rounded-lg border" align="start">
            <DropdownMenu.Item className="m-1 rounded-lg outline-none data-[highlighted]:bg-gray-100">
              <a href="/" className="inline-block w-full p-2">
                Home
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="m-[5px] h-[1px] bg-gray-200" />
            <DropdownMenu.Item className="m-1 rounded-lg outline-none data-[highlighted]:bg-gray-100">
              <a href="/service" className="inline-block w-full p-2">
                Service
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="m-[5px] h-[1px] bg-gray-200" />
            <DropdownMenu.Item className="m-1 rounded-lg outline-none data-[highlighted]:bg-gray-100">
              <a href="/aboutus" className="inline-block w-full p-2">
                About us
              </a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="m-[5px] h-[1px] bg-gray-200" />
            <DropdownMenu.Item className="m-1 rounded-lg outline-none data-[highlighted]:bg-gray-100">
              <a href="/contact" className="inline-block w-full p-2">
                Contact
              </a>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default Dropdown1;
