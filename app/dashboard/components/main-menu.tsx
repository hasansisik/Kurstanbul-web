import MenuTitle from "./menu-title";

export default function MainMenu() {
    return (
      <div className="bg-muted overflow-auto p-4 border-r border-gray-300">
        <div className="border-b dark:border-b-black border-b-zinc-300">
          <MenuTitle />
        </div>
      </div>
    );
}