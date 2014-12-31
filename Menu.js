var mybtn = Ext.getCmp("mybtn");
Ext.define('SenchaCon.view.Menu', {
    extend: 'Ext.Container',
    xtype: 'mainmenu',
    config: {
        cls: 'mainmenu',
        docked: 'left',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 0,
        width: 266,
        padding: '97 0 0 0',
        open: false,
        scrollable: 'vertical',
        defaultType: 'button',
        defaults: {
            textAlign: 'left'
        },
        layout: {
            type: "card"
        },
        items: [
        {
            id: "listmain",
            docked: "left",
            width: 300,
            disclosureProperty: true,
            xtype: "list",
            store: {
                fields: ["id", "index", "text", "view"],
                //sorters: "index",
                //autoLoad: true,
                data:
                    [
                        {
                            "index": 1,
                            "text": "Thông tin bệnh nhân",
                            "leaf": true,
                            "view": "ThongTinChinh",
                            "id": "ttbn"
                        },
                        {
                            "index": 2,
                            "text": "Tiền sử bệnh",
                            "leaf": true,
                            "view": "TienSuBenh",
                            "id": "tsb"
                        },
                        {
                            "index": 3,
                            "text": "Chăm sóc",
                            "leaf": true,
                            "view": "ChamSoc",
                            "id": "cs"
                        },
                        {
                            "index": 4,
                            "text": "Dịch vụ",
                            "leaf": true,
                            "view": "DichVu",
                            "id": "dv"
                        },
                        {
                            "index": 5,
                            "text": "Xét nghiệm",
                            "leaf": true,
                            "view": "XetNghiem",
                            "id": "xn"
                        },
                        {
                            "index": 6,
                            "text": "Chẩn đoán hình ảnh",
                            "leaf": true,
                            "view": "Cdha",
                            "id": "cdha"
                        },
                        {
                            "index": 7,
                            "text": "Toa thuốc",
                            "leaf": true,
                            "view": "ToaThuoc",
                            "id": "tt"
                        },
                        {
                            "index": 8,
                            "text": "Y lệnh",
                            "leaf": true,
                            "view": "YLenh",
                            "id": "yl"
                        },
                        {
                            "index": 9,
                            "text": "Viện phí",
                            "leaf": true,
                            "view": "VienPhi",
                            "id": "vp"
                        },
                        {
                            "index": 10,
                            "text": "Ghi chú",
                            "leaf": true,
                            "view": "GhiChu",
                            "id": "gc"
                        }
                    ]
            },
            itemTpl: "{text}",
            listeners: {
                itemtap: function (dataview, index, target, record, e) {
                    Ext.Msg.alert(record.get("view"), record.get("view"));
                }
            }
        }
        ]
    },

    setParent: function (parent) {
        this.callParent(arguments);
        this.maskCmp = parent.add({
            xtype: 'component',
            cls: 'mainmenu-mask',
            top: 0,
            zIndex: 5000,
            hidden: true,
            width: 9999,
            left: this.getWidth(),
            bottom: 0
        });

        this.maskCmp.element.on({
            scope: this,
            touchend: 'onMaskRelease'
        });
    },

    onMaskRelease: function () {
        this.setOpen(false);
    },

    //onDestroy: function () {
    //    this.maskCmp.destroy();
    //    delete this.maskCmp;

    //    this.callParent(arguments);
    //},

    toggle: function () {
        this.setOpen(!this.getOpen());
    },

    updateOpen: function (open) {
        var targetEl,
            parentCt = this.up();

        if (!parentCt) {
            return;
        }

        targetEl = parentCt.innerElement;

        if (open) {
            targetEl.translate(this.getWidth(), 0, 0);
            this.maskCmp.show();
        }
        else {
            targetEl.translate(0, 0, 0);
            this.maskCmp.hide();
        }
    }
});