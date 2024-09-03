interface MenuTypes {
    url: string;
    title: string;
    description: string;
    price: number;
}

type MenusTypes = MenuTypes[];

export type { MenusTypes };

export default MenuTypes;