import { Theme, Button, DropdownMenu } from '@radix-ui/themes';
import { CaretDownIcon } from '@radix-ui/react-icons';
import '@radix-ui/themes/styles.css';

const Dropdown2 = () => {
  return (
    <Theme>
      <div className="m-8">
        <h1 className="mb-2 text-xl font-bold">ドロップダウンメニュー(Radix Theme)</h1>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft">
              Menu
              <CaretDownIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              <a href="/">Home</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <a href="/service">Service</a>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <a href="/aboutus">About us</a>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <a href="/contact">Contact</a>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </Theme>
  );
};

export default Dropdown2;
