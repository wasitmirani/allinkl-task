

class Sidebar {

    private perfix = "/app";

    setSingleMenu = (title: string, icon: string, link: string, can?: string) => {
        return {
            "title": title,
            "type": 'single',
            "icon": icon,
            "link": this.perfix + link,
            "can": can,
        }
    }
    setMultiMenu = (title: string, icon: string, can?: string, sub_menu?: any) => {
        return {
            "title": title,
            "icon": icon,
            "can": can,
            "type": "multi",
            "sub_menu": sub_menu, // Initialize an empty array for sub-menu
        }
    }
    setSubMenu = (title: string, link: string, can?: string) => {
        return {
            "title": title,
            "link": this.perfix + link,
            "can": can,
        }
    }
    setHeadingMenu = (title: string) => {
        return {
            "title": title,
            "type": "heading",
        }
    }
    getMenuList = () => {
        return [

            this.setHeadingMenu('Analytics'),
            this.setMultiMenu('Dashboards', 'fa-solid fa-house', 'dashboard-view',
                [
                    this.setSubMenu('Dashboard', '/home', 'somePermission'),
                    this.setSubMenu('Overview', '/dashboard', 'somePermission'),
                    // Add more sub-menu items as needed
                ],
            ),
            this.setMultiMenu('Reports', 'fa-solid fa-chart-line', 'reports-views',
                [
                    this.setSubMenu('Sales Overview ', '/reports/sales-overview ', 'somePermission'),
                    this.setSubMenu('Shipments', '/reports/shipments', 'somePermission'),
                    // this.setSubMenu('Shipped items', '/reports/shipped-items', 'somePermission'),
                    // this.setSubMenu('Sale Order proftiabillity', '/reports/sales-orders-proftiabillity', 'somePermission'),
                    this.setSubMenu('Sales Order', '/reports/sales-order', 'somePermission'),
                    // this.setSubMenu('Sales Order Units', '/reports/sales-order-units', 'somePermission'),
                    this.setSubMenu('Customers', '/reports/customers', 'somePermission'),
                    this.setSubMenu('Inventory', '/reports/inventory', 'somePermission'),
                    this.setSubMenu('Lots', '/reports/lots', 'somePermission'),
                    this.setSubMenu('Units', '/reports/units', 'somePermission'),
                    this.setSubMenu('Purchase', '/reports/purchase', 'somePermission'),
                    this.setSubMenu('Stock', '/reports/stock', 'somePermission'),

                    // Add more sub-menu items as needed
                ],
            ),
            this.setHeadingMenu('Front'),
            this.setSingleMenu('Stores', 'fa-solid fa-store', '/front-stores'),
            this.setHeadingMenu('Ecommerce'),
            this.setMultiMenu('Catalog', 'fa-solid fa-layer-group', 'catalog-views',
                [
                    this.setSubMenu('Categories', '/catalog/categories', 'somePermission'),
                    this.setSubMenu('Brands', '/catalog/brands', 'somePermission'),
                    this.setSubMenu('Listing', '/listing', 'somePermission'),
                    this.setSubMenu('Products ', '/products', 'somePermission'),
                    this.setSubMenu('Variants', '/catalog/variants', 'somePermission'),
                    this.setSubMenu('Units', '/catalog/units', 'somePermission'),
                 
                    this.setSubMenu('Bundles', '/catalog/bundles', 'somePermission'),

                ],
            ),
            this.setMultiMenu('Purchases', 'fa-solid fa-basket-shopping', 'purchases-views',
                [
                    this.setSubMenu('Purchase Orders', '/purchase/orders', 'somePermission'),
                    this.setSubMenu('Suppliers ', '/purchase/suppliers ', 'somePermission'),
                ]
            ),
            this.setMultiMenu('Inventory Insight', 'fa-solid fa-cubes', 'inventory-insight',
                [
                    this.setSubMenu('Receive', '/inventory-insight/receive', 'somePermission'),
                    this.setSubMenu('Putaway', '/inventory-insight/putaway', 'somePermission'),
                    this.setSubMenu('Adjustment', '/inventory-insight/adjustment', 'somePermission'),
                    this.setSubMenu('Movement', '/inventory-insight/movement', 'somePermission'),
                    this.setSubMenu('Transfer', '/inventory-insight/transfer', 'somePermission'),
                    this.setSubMenu('Inventory Log', '/inventory-insight/inventory-log', 'somePermission'),
                ]
            ),
            this.setMultiMenu('Fulfillment', 'fa-solid fa-cart-flatbed', 'fulfillment',
                [
                    this.setSubMenu('Sales Order', '/fulfillment/sales-order', 'somePermission'),
                    this.setSubMenu('Partial Orders', '/fulfillment/partial-orders', 'somePermission'),
                    this.setSubMenu('PickList', '/fulfillment/picklist', 'somePermission'),
                    this.setSubMenu('Pack & Ship', '/fulfillment/pack-ship', 'somePermission'),
                    this.setSubMenu('Invoices', '/fulfillment/invoices', 'somePermission'),

                ]
            ),
            this.setHeadingMenu('Other'),
            // this.setSingleMenu('Catalog', 'fa-solid fa-layer-group', '/home'),
            this.setSingleMenu('Channels', 'fa-solid fa-diagram-project', '/channels'),
            this.setMultiMenu('Warehouse', 'fa-solid fa-warehouse', 'warehouse',
            [
                this.setSubMenu('Warehouses', '/warehouses', 'somePermission'),
                this.setSubMenu('Warehouse Channels', '/warehouse-channels', 'somePermission'),
    
            ]
          ),
          this.setHeadingMenu('Tools & Sessions'),
          this.setMultiMenu('Settings', 'fa-solid fa-gear', 'Settings',
          [
              this.setSubMenu('Account ', '/settings/account', 'somePermission'),
              this.setSubMenu('Integrations', '/settings/integrations', 'somePermission'),
              this.setSubMenu('Configurations', '/settings/configurations', 'somePermission'),
              this.setSubMenu('Users', '/settings/users', 'somePermission'),
              this.setSubMenu('roles', '/settings/roles', 'somePermission'),
             
  
          ]
        ),
        this.setSingleMenu('System Logs', 'fa-solid fa-clock-rotate-left', '/system-logs'),
        this.setSingleMenu('Log out', 'fa-solid fa-power-off', '/logout'),



            // this.setMultiMenu('Dashboard2', 'fa-solid fa-house', 'somePermission'),
            // {
            //     "sub_menu": [
            //         this.setSubMenu('Dashboard', '/overview/dashboard', 'somePermission'),
            //         // Add more sub-menu items as needed
            //     ],
            // },


        ];
    }

}

export default Sidebar;