/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

/* eslint-disable @typescript-eslint/no-empty-object-type -- Generated Microsoft Commerce types. */


      
    /**
     * The matched retail server api version.
     */
    export const ApiVersion: string = "7.3";
  
    export const EntityIdentifier = {
      
  'Category' : {
    'Key': 
  'RecordId'
  },
  'Cart' : {
    'Key': 
  'Id'
  },
  'Customer' : {
    'Key': 
  'AccountNumber'
  },
  'Employee' : {
    'Key': 
  'StaffId'
  },
  'Checklist' : {
    'Key': 
  'RecordId'
  },
  'SalesOrder' : {
    'Key': 
  'Id'
  },
  'Shift' : {
    'Key':  [ 
  'ShiftId',
  'TerminalId' ] 
  },
  'StockCountJournal' : {
    'Key': 
  'JournalId'
  },
  'OrgUnit' : {
    'Key': 
  'OrgUnitNumber'
  },
  'Product' : {
    'Key': 
  'RecordId'
  },
  'ProductCatalog' : {
    'Key': 
  'RecordId'
  },
  'CommerceList' : {
    'Key': 
  'Id'
  },
  'ProductList' : {
    'Key': 
  'Id'
  },
  'Recommendation' : {
    'Key': 
  'Id'
  },
  'TransferOrder' : {
    'Key': 
  'OrderId'
  },
  'PurchaseOrder' : {
    'Key': 
  'OrderId'
  },
  'PickingList' : {
    'Key': 
  'OrderId'
  },
  'Warehouse' : {
    'Key': 
  'InventLocation'
  },
  'ScanResult' : {
    'Key': 
  'ScannedText'
  },
  'SalesOrderContextualOperationsMap' : {
    'Key': 
  'Id'
  },
  'InventoryInboundOutboundDocument' : {
    'Key': 
  'WorkDocumentId'
  },
  'BusinessPartner' : {
    'Key': 
  'BusinessPartnerId'
  },
  'BusinessPartnerUser' : {
    'Key': 
  'B2BUserId'
  },
  'SuspendedCart' : {
    'Key': 
  'Id'
  } 
    };
      
    
    /**
     * AutoExitMethodType enum type.
     */
    export enum AutoExitMethodType {
      
        /**
         * The Logoff member.
         */
        Logoff = 0,
        
        /**
         * The Lock member.
         */
        Lock = 1,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * CardType enum type.
     */
    export enum CardType {
      
        /**
         * The InternationalCreditCard member.
         */
        InternationalCreditCard = 0,
        
        /**
         * The InternationalDebitCard member.
         */
        InternationalDebitCard = 1,
        
        /**
         * The LoyaltyCard member.
         */
        LoyaltyCard = 2,
        
        /**
         * The CorporateCard member.
         */
        CorporateCard = 3,
        
        /**
         * The CustomerCard member.
         */
        CustomerCard = 4,
        
        /**
         * The EmployeeCard member.
         */
        EmployeeCard = 5,
        
        /**
         * The SalespersonCard member.
         */
        SalespersonCard = 6,
        
        /**
         * The GiftCard member.
         */
        GiftCard = 7,
        
        /**
         * The Check member.
         */
        Check = 8,
        
        /**
         * The Wallet member.
         */
        Wallet = 9,
        
        /**
         * The FoodCard member.
         */
        FoodCard = 21,
        
        /**
         * The MealCard member.
         */
        MealCard = 22,
        
        /**
         * The FuelCard member.
         */
        FuelCard = 23,
        
        /**
         * The Unknown member.
         */
        Unknown = -1
    }
    
    /**
     * PublishingAction enum type.
     */
    export enum PublishingAction {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Publish member.
         */
        Publish = 1,
        
        /**
         * The Delete member.
         */
        Delete = 2,
        
        /**
         * The Expire member.
         */
        Expire = 3
    }
    
    /**
     * ListingPublishingActionStatus enum type.
     */
    export enum ListingPublishingActionStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Ready member.
         */
        Ready = 1,
        
        /**
         * The InProgress member.
         */
        InProgress = 2,
        
        /**
         * The Done member.
         */
        Done = 3,
        
        /**
         * The Failed member.
         */
        Failed = 4
    }
    
    /**
     * OnlineChannelPublishStatusType enum type.
     */
    export enum OnlineChannelPublishStatusType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Draft member.
         */
        Draft = 1,
        
        /**
         * The InProgress member.
         */
        InProgress = 2,
        
        /**
         * The Published member.
         */
        Published = 3,
        
        /**
         * The Failed member.
         */
        Failed = 4
    }
    
    /**
     * ReceiptTransactionType enum type.
     */
    export enum ReceiptTransactionType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Sale member.
         */
        Sale = 1,
        
        /**
         * The Return member.
         */
        Return = 2,
        
        /**
         * The Payment member.
         */
        Payment = 5,
        
        /**
         * The SalesOrder member.
         */
        SalesOrder = 6,
        
        /**
         * The Quote member.
         */
        Quote = 7,
        
        /**
         * The SuspendedTransaction member.
         */
        SuspendedTransaction = 9
    }
    
    /**
     * EmployeePriceOverrideType enum type.
     */
    export enum EmployeePriceOverrideType {
      
        /**
         * The HigherAndLower member.
         */
        HigherAndLower = 0,
        
        /**
         * The HigherOnly member.
         */
        HigherOnly = 1,
        
        /**
         * The LowerOnly member.
         */
        LowerOnly = 2,
        
        /**
         * The NotAllowed member.
         */
        NotAllowed = 3
    }
    
    /**
     * KeyInPriceRestriction enum type.
     */
    export enum KeyInPriceRestriction {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The NewPrice member.
         */
        NewPrice = 1,
        
        /**
         * The HigherOrEqualPrice member.
         */
        HigherOrEqualPrice = 2,
        
        /**
         * The LowerOrEqualPrice member.
         */
        LowerOrEqualPrice = 3,
        
        /**
         * The NotAllowed member.
         */
        NotAllowed = 4
    }
    
    /**
     * KeyInQuantityRestriction enum type.
     */
    export enum KeyInQuantityRestriction {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Required member.
         */
        Required = 1,
        
        /**
         * The NotAllowed member.
         */
        NotAllowed = 2
    }
    
    /**
     * ProductDimensionType enum type.
     */
    export enum ProductDimensionType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Color member.
         */
        Color = 1,
        
        /**
         * The Configuration member.
         */
        Configuration = 2,
        
        /**
         * The Size member.
         */
        Size = 3,
        
        /**
         * The Style member.
         */
        Style = 4
    }
    
    /**
     * ProductType enum type.
     */
    export enum ProductType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The KitMaster member.
         */
        KitMaster = 1,
        
        /**
         * The KitVariant member.
         */
        KitVariant = 2,
        
        /**
         * The Master member.
         */
        Master = 3,
        
        /**
         * The Standalone member.
         */
        Standalone = 4,
        
        /**
         * The Variant member.
         */
        Variant = 5
    }
    
    /**
     * NumberSequenceSeedType enum type.
     */
    export enum NumberSequenceSeedType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The ReceiptDefault member.
         */
        ReceiptDefault = 1,
        
        /**
         * The ReceiptSale member.
         */
        ReceiptSale = 2,
        
        /**
         * The ReceiptReturn member.
         */
        ReceiptReturn = 3,
        
        /**
         * The ReceiptSalesOrder member.
         */
        ReceiptSalesOrder = 4,
        
        /**
         * The ReceiptSalesInvoice member.
         */
        ReceiptSalesInvoice = 5,
        
        /**
         * The ReceiptPayment member.
         */
        ReceiptPayment = 6,
        
        /**
         * The BatchId member.
         */
        BatchId = 7,
        
        /**
         * The TransactionId member.
         */
        TransactionId = 8,
        
        /**
         * The ReceiptCustomerSalesOrder member.
         */
        ReceiptCustomerSalesOrder = 10,
        
        /**
         * The ReceiptCustomerQuote member.
         */
        ReceiptCustomerQuote = 11,
        
        /**
         * The ReceiptSuspendedTransaction member.
         */
        ReceiptSuspendedTransaction = 22
    }
    
    /**
     * ReasonCodeSourceType enum type.
     */
    export enum ReasonCodeSourceType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The AddSalesperson member.
         */
        AddSalesperson = 1,
        
        /**
         * The EndOfTransaction member.
         */
        EndOfTransaction = 2,
        
        /**
         * The ItemDiscount member.
         */
        ItemDiscount = 3,
        
        /**
         * The ItemNotOnFile member.
         */
        ItemNotOnFile = 4,
        
        /**
         * The LineItemTaxChange member.
         */
        LineItemTaxChange = 5,
        
        /**
         * The Markup member.
         */
        Markup = 6,
        
        /**
         * The NegativeAdjustment member.
         */
        NegativeAdjustment = 7,
        
        /**
         * The NfcEContingencyModeEnabled member.
         */
        NfcEContingencyModeEnabled = 8,
        
        /**
         * The NfcEVoided member.
         */
        NfcEVoided = 9,
        
        /**
         * The OpenDrawer member.
         */
        OpenDrawer = 10,
        
        /**
         * The OverridePrice member.
         */
        OverridePrice = 11,
        
        /**
         * The ReturnItem member.
         */
        ReturnItem = 12,
        
        /**
         * The ReturnTransaction member.
         */
        ReturnTransaction = 13,
        
        /**
         * The SerialNumber member.
         */
        SerialNumber = 14,
        
        /**
         * The StartOfTransaction member.
         */
        StartOfTransaction = 15,
        
        /**
         * The TenderDeclaration member.
         */
        TenderDeclaration = 16,
        
        /**
         * The TotalDiscount member.
         */
        TotalDiscount = 17,
        
        /**
         * The TransactionTaxChange member.
         */
        TransactionTaxChange = 18,
        
        /**
         * The VoidItem member.
         */
        VoidItem = 19,
        
        /**
         * The VoidPayment member.
         */
        VoidPayment = 20,
        
        /**
         * The VoidTransaction member.
         */
        VoidTransaction = 21,
        
        /**
         * The OrderFulfillment member.
         */
        OrderFulfillment = 22,
        
        /**
         * The ManualCharge member.
         */
        ManualCharge = 23
    }
    
    /**
     * TriggerFunctionType enum type.
     */
    export enum TriggerFunctionType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Item member.
         */
        Item = 1,
        
        /**
         * The InfoCode member.
         */
        InfoCode = 2
    }
    
    /**
     * QueryType enum type.
     */
    export enum QueryType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The NameAndDescription member.
         */
        NameAndDescription = 1,
        
        /**
         * The AotObject member.
         */
        AotObject = 2
    }
    
    /**
     * ChangeAction enum type.
     */
    export enum ChangeAction {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Insert member.
         */
        Insert = 1,
        
        /**
         * The Update member.
         */
        Update = 2,
        
        /**
         * The Delete member.
         */
        Delete = 3
    }
    
    /**
     * PeriodicDiscountOfferType enum type.
     */
    export enum PeriodicDiscountOfferType {
      
        /**
         * The MultipleBuy member.
         */
        MultipleBuy = 0,
        
        /**
         * The MixAndMatch member.
         */
        MixAndMatch = 1,
        
        /**
         * The Offer member.
         */
        Offer = 2,
        
        /**
         * The Promotion member.
         */
        Promotion = 3,
        
        /**
         * The Threshold member.
         */
        Threshold = 4,
        
        /**
         * The LeastExpensiveFavorRetailer member.
         */
        LeastExpensiveFavorRetailer = 5,
        
        /**
         * The OfferLineQuantityLimit member.
         */
        OfferLineQuantityLimit = 6,
        
        /**
         * The ShippingThreshold member.
         */
        ShippingThreshold = 7
    }
    
    /**
     * SearchFilterType enum type.
     */
    export enum SearchFilterType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Text member.
         */
        Text = 1
    }
    
    /**
     * InfoCodeActivity enum type.
     */
    export enum InfoCodeActivity {
      
        /**
         * The Transaction member.
         */
        Transaction = 0,
        
        /**
         * The OrderFulfillment member.
         */
        OrderFulfillment = 1
    }
    
    /**
     * SrsReportFileFormat enum type.
     */
    export enum SrsReportFileFormat {
      
        /**
         * The CSV member.
         */
        CSV = 0,
        
        /**
         * The Excel member.
         */
        Excel = 1,
        
        /**
         * The HTML4_0 member.
         */
        HTML4_0 = 2,
        
        /**
         * The Image member.
         */
        Image = 3,
        
        /**
         * The MHTML member.
         */
        MHTML = 4,
        
        /**
         * The PDF member.
         */
        PDF = 5,
        
        /**
         * The XML member.
         */
        XML = 6
    }
    
    /**
     * ShiftReconciliationLineStatus enum type.
     */
    export enum ShiftReconciliationLineStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Pending member.
         */
        Pending = 1,
        
        /**
         * The Reconciled member.
         */
        Reconciled = 2,
        
        /**
         * The Closed member.
         */
        Closed = 3
    }
    
    /**
     * ProductSearchServiceType enum type.
     */
    export enum ProductSearchServiceType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The ChannelDatabase member.
         */
        ChannelDatabase = 1,
        
        /**
         * The CommerceAzureSearchService member.
         */
        CommerceAzureSearchService = 2,
        
        /**
         * The CommerceBingSearchService member.
         */
        CommerceBingSearchService = 3
    }
    
    /**
     * SearchSuggestionType enum type.
     */
    export enum SearchSuggestionType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Keyword member.
         */
        Keyword = 1,
        
        /**
         * The Product member.
         */
        Product = 2,
        
        /**
         * The ScopedCategory member.
         */
        ScopedCategory = 4,
        
        /**
         * The Category member.
         */
        Category = 8,
        
        /**
         * The Customer member.
         */
        Customer = 16
    }
    
    /**
     * SalesStatus enum type.
     */
    export enum SalesStatus {
      
        /**
         * The Unknown member.
         */
        Unknown = 0,
        
        /**
         * The Created member.
         */
        Created = 1,
        
        /**
         * The Processing member.
         */
        Processing = 2,
        
        /**
         * The Delivered member.
         */
        Delivered = 3,
        
        /**
         * The Invoiced member.
         */
        Invoiced = 4,
        
        /**
         * The Confirmed member.
         */
        Confirmed = 5,
        
        /**
         * The Sent member.
         */
        Sent = 6,
        
        /**
         * The Canceled member.
         */
        Canceled = 7,
        
        /**
         * The Lost member.
         */
        Lost = 8
    }
    
    /**
     * EFTType enum type.
     */
    export enum EFTType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The External member.
         */
        External = 1,
        
        /**
         * The PaymentSDK member.
         */
        PaymentSDK = 2,
        
        /**
         * The DynamicsOnline member.
         */
        DynamicsOnline = 3
    }
    
    /**
     * FilterDeliveryModeOption enum type.
     */
    export enum FilterDeliveryModeOption {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The FilterOutNonCarrierDeliveryMode member.
         */
        FilterOutNonCarrierDeliveryMode = 1,
        
        /**
         * The DoNotFilterByChannel member.
         */
        DoNotFilterByChannel = 2,
        
        /**
         * The FilterOutNonPickupDeliveryMode member.
         */
        FilterOutNonPickupDeliveryMode = 4
    }
    
    /**
     * InventoryDocumentLineOperationResultMode enum type.
     */
    export enum InventoryDocumentLineOperationResultMode {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The NoLines member.
         */
        NoLines = 1,
        
        /**
         * The AllLines member.
         */
        AllLines = 2
    }
    
    /**
     * InventoryDocumentStatus enum type.
     */
    export enum InventoryDocumentStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Paused member.
         */
        Paused = 1,
        
        /**
         * The InProgress member.
         */
        InProgress = 2,
        
        /**
         * The Committed member.
         */
        Committed = 3,
        
        /**
         * The ProcessSucceeded member.
         */
        ProcessSucceeded = 4,
        
        /**
         * The ProcessFailed member.
         */
        ProcessFailed = 5
    }
    
    /**
     * InventoryDocumentUpdateLinesActionType enum type.
     */
    export enum InventoryDocumentUpdateLinesActionType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The ApplyQuantity member.
         */
        ApplyQuantity = 1,
        
        /**
         * The ApplyMaximumQuantity member.
         */
        ApplyMaximumQuantity = 2
    }
    
    /**
     * InventoryInboundOutboundDocumentOperationType enum type.
     */
    export enum InventoryInboundOutboundDocumentOperationType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The ReceivePurchaseOrder member.
         */
        ReceivePurchaseOrder = 1,
        
        /**
         * The ReceiveTransferOrder member.
         */
        ReceiveTransferOrder = 2,
        
        /**
         * The ShipTransferOrder member.
         */
        ShipTransferOrder = 3,
        
        /**
         * The CreateTransferOrder member.
         */
        CreateTransferOrder = 4,
        
        /**
         * The SaveInventoryAdjustment member.
         */
        SaveInventoryAdjustment = 5,
        
        /**
         * The PostInventoryAdjustment member.
         */
        PostInventoryAdjustment = 6,
        
        /**
         * The PostInventoryTransfer member.
         */
        PostInventoryTransfer = 7,
        
        /**
         * The SaveStockCounting member.
         */
        SaveStockCounting = 8,
        
        /**
         * The PostStockCounting member.
         */
        PostStockCounting = 9,
        
        /**
         * The CreateStockCounting member.
         */
        CreateStockCounting = 10,
        
        /**
         * The CreatePurchaseOrder member.
         */
        CreatePurchaseOrder = 11,
        
        /**
         * The SavePurchaseOrder member.
         */
        SavePurchaseOrder = 12
    }
    
    /**
     * InventoryInboundOutboundSourceDocumentStatus enum type.
     */
    export enum InventoryInboundOutboundSourceDocumentStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Requested member.
         */
        Requested = 1,
        
        /**
         * The Shipped member.
         */
        Shipped = 2,
        
        /**
         * The PartiallyShipped member.
         */
        PartiallyShipped = 3,
        
        /**
         * The Received member.
         */
        Received = 4,
        
        /**
         * The PartiallyReceived member.
         */
        PartiallyReceived = 5,
        
        /**
         * The Cancelled member.
         */
        Cancelled = 6,
        
        /**
         * The Posted member.
         */
        Posted = 8,
        
        /**
         * The Committed member.
         */
        Committed = 9,
        
        /**
         * The Created member.
         */
        Created = 10
    }
    
    /**
     * InventorySourceDocumentType enum type.
     */
    export enum InventorySourceDocumentType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The PurchaseOrder member.
         */
        PurchaseOrder = 1,
        
        /**
         * The TransferOrder member.
         */
        TransferOrder = 2,
        
        /**
         * The InventoryAdjustment member.
         */
        InventoryAdjustment = 3,
        
        /**
         * The InventoryTransfer member.
         */
        InventoryTransfer = 4,
        
        /**
         * The StockCounting member.
         */
        StockCounting = 5
    }
    
    /**
     * InventoryInboundOutboundDocumentState enum type.
     */
    export enum InventoryInboundOutboundDocumentState {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Active member.
         */
        Active = 1,
        
        /**
         * The Complete member.
         */
        Complete = 2,
        
        /**
         * The Draft member.
         */
        Draft = 3
    }
    
    /**
     * ReceiptNumberResetType enum type.
     */
    export enum ReceiptNumberResetType {
      
        /**
         * The SingleTime member.
         */
        SingleTime = 0,
        
        /**
         * The YearlyRecurrence member.
         */
        YearlyRecurrence = 1
    }
    
    /**
     * PeriodUnit enum type.
     */
    export enum PeriodUnit {
      
        /**
         * The Day member.
         */
        Day = 0,
        
        /**
         * The Week member.
         */
        Week = 1,
        
        /**
         * The Month member.
         */
        Month = 2,
        
        /**
         * The Year member.
         */
        Year = 3,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * WarrantyPriceRangeBaseType enum type.
     */
    export enum WarrantyPriceRangeBaseType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The BasePrice member.
         */
        BasePrice = 1,
        
        /**
         * The SellingPrice member.
         */
        SellingPrice = 2
    }
    
    /**
     * LogOnKeyboardType enum type.
     */
    export enum LogOnKeyboardType {
      
        /**
         * The OSKeyboard member.
         */
        OSKeyboard = 0,
        
        /**
         * The Numpad member.
         */
        Numpad = 1,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * LogOnLayoutType enum type.
     */
    export enum LogOnLayoutType {
      
        /**
         * The Centered member.
         */
        Centered = 0,
        
        /**
         * The Right member.
         */
        Right = 1,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * DeliveryModeTypeFilter enum type.
     */
    export enum DeliveryModeTypeFilter {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Shipping member.
         */
        Shipping = 1,
        
        /**
         * The Pickup member.
         */
        Pickup = 2
    }
    
    /**
     * InventoryDocumentValidationResultSeverity enum type.
     */
    export enum InventoryDocumentValidationResultSeverity {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Informational member.
         */
        Informational = 1,
        
        /**
         * The Warning member.
         */
        Warning = 2,
        
        /**
         * The Error member.
         */
        Error = 3
    }
    
    /**
     * InventoryDocumentOverreceivingErrors enum type.
     */
    export enum InventoryDocumentOverreceivingErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The QuantityExceededAllowed member.
         */
        QuantityExceededAllowed,
        
        /**
         * The QuantityExceededAllowedWithinOverreceivingTolerance member.
         */
        QuantityExceededAllowedWithinOverreceivingTolerance,
        
        /**
         * The QuantityExceededOverreceivingTolerance member.
         */
        QuantityExceededOverreceivingTolerance
    }
    
    /**
     * InventoryDocumentSerialNumberErrors enum type.
     */
    export enum InventoryDocumentSerialNumberErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The RequiredSerialNumberNotProvided member.
         */
        RequiredSerialNumberNotProvided,
        
        /**
         * The DuplicateSerialNumberIsNotAllowed member.
         */
        DuplicateSerialNumberIsNotAllowed,
        
        /**
         * The RequiredSerialNumberValidationNotProvided member.
         */
        RequiredSerialNumberValidationNotProvided,
        
        /**
         * The SerialNumberNotAvailable member.
         */
        SerialNumberNotAvailable
    }
    
    /**
     * EmployeeIdentityType enum type.
     */
    export enum EmployeeIdentityType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The CommerceIdentity member.
         */
        CommerceIdentity = 1,
        
        /**
         * The AadIdentity member.
         */
        AadIdentity = 2
    }
    
    /**
     * FulfillmentOperationType enum type.
     */
    export enum FulfillmentOperationType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Pick member.
         */
        Pick = 1,
        
        /**
         * The Pack member.
         */
        Pack = 2,
        
        /**
         * The Ship member.
         */
        Ship = 3,
        
        /**
         * The Pickup member.
         */
        Pickup = 4,
        
        /**
         * The Reject member.
         */
        Reject = 5
    }
    
    /**
     * PaymentStatus enum type.
     */
    export enum PaymentStatus {
      
        /**
         * The NotSubmitted member.
         */
        NotSubmitted = 0,
        
        /**
         * The Authorized member.
         */
        Authorized = 1,
        
        /**
         * The Declined member.
         */
        Declined = 2,
        
        /**
         * The Posted member.
         */
        Posted = 3,
        
        /**
         * The Paid member.
         */
        Paid = 4
    }
    
    /**
     * UserAlertSourceType enum type.
     */
    export enum UserAlertSourceType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Inventory_SerialNumberMissing member.
         */
        Inventory_SerialNumberMissing = 1,
        
        /**
         * The Inventory_SerialNumberInsufficientStock member.
         */
        Inventory_SerialNumberInsufficientStock = 2
    }
    
    /**
     * CustomerOrderMode enum type.
     */
    export enum CustomerOrderMode {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The CustomerOrderCreateOrEdit member.
         */
        CustomerOrderCreateOrEdit = 1,
        
        /**
         * The OrderRecalled member.
         */
        OrderRecalled = 2,
        
        /**
         * The Pickup member.
         */
        Pickup = 3,
        
        /**
         * The Return member.
         */
        Return = 4,
        
        /**
         * The Cancellation member.
         */
        Cancellation = 5,
        
        /**
         * The QuoteCreateOrEdit member.
         */
        QuoteCreateOrEdit = 6
    }
    
    /**
     * InventoryValidationErrors enum type.
     */
    export enum InventoryValidationErrors {
      
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryAvailableQuantitiesRecordsExceedLimit member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryAvailableQuantitiesRecordsExceedLimit,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_ShipAllNotAllowedForAdvancedWarehouse member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_ShipAllNotAllowedForAdvancedWarehouse,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_PurchaseOrderUnderDeliveryNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_PurchaseOrderUnderDeliveryNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_ClosePurchaseLineNotAllowedWhenReceiveNowQuantityIsZero member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_ClosePurchaseLineNotAllowedWhenReceiveNowQuantityIsZero,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_ClosePurchaseOrderLineNotAllowWhenReceiveQuantityUnderTolerance member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_ClosePurchaseOrderLineNotAllowWhenReceiveQuantityUnderTolerance,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_LineNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_LineNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_CloseTransferLineNotAllowedWhenShipNowQuantityIsZero member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_CloseTransferLineNotAllowedWhenShipNowQuantityIsZero,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_ShipAllForAdvancedWarehouseWithoutIssueLocation member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_ShipAllForAdvancedWarehouseWithoutIssueLocation,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_ProductBehaviorMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_ProductBehaviorMissing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_StockCountJournal_JournalNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_StockCountJournal_JournalNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_NoLineToCommit member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_NoLineToCommit,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_Journal_Name_Search_Criteria_Not_Valid member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_Journal_Name_Search_Criteria_Not_Valid,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_Movement_Journal_Location_Dimension_Missing_For_Product member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_Movement_Journal_Location_Dimension_Missing_For_Product,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateEmptyLinesNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateEmptyLinesNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_SearchCriteriaContainsWarehouseLocationId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_SearchCriteriaContainsWarehouseLocationId,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_DefaultIssueLocationNotFoundForWarehouse member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_DefaultIssueLocationNotFoundForWarehouse,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_DefaultReceiptLocationNotFoundForWarehouse member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_DefaultReceiptLocationNotFoundForWarehouse,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventorySourceDocumentMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventorySourceDocumentMissing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_CommitDocumentFailToDeserialize member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_CommitDocumentFailToDeserialize,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_LineCannotBeDeleted member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocument_LineCannotBeDeleted,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_ReceiverNotAllowedForInboundSearchCriteria member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_ReceiverNotAllowedForInboundSearchCriteria,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_SenderNotAllowedForOutboundSearchCriteria member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_SenderNotAllowedForOutboundSearchCriteria,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_FilterCannotContainTransferFromAndShipFromAtTheSameTime member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_FilterCannotContainTransferFromAndShipFromAtTheSameTime,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_CannotSearchPurchaseOrderByFilterTransferFrom member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_CannotSearchPurchaseOrderByFilterTransferFrom,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_CannotSearchTransferOrderByFilterShipFrom member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_CannotSearchTransferOrderByFilterShipFrom,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_NotValidStockCountJournal member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_NotValidStockCountJournal,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_SerialNumberLinesFailedToDownload member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_SerialNumberLinesFailedToDownload,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DeliveryModeTypeNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DeliveryModeTypeNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_CannotReturnMultipleVendors member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_CannotReturnMultipleVendors,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ActionNotSupportedWhenChangeManagementIsEnabled member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ActionNotSupportedWhenChangeManagementIsEnabled,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_NotValidTransferOrderJournalXmlStr member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_NotValidTransferOrderJournalXmlStr,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_NotSupportedDocumentStateInSearchCriteria member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_NotSupportedDocumentStateInSearchCriteria,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_NotSupportedSearchCriteriaWhenSearchInventoryDocumentLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_NotSupportedSearchCriteriaWhenSearchInventoryDocumentLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_SerialNumberLineQuantityExceedsLimit member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_SerialNumberLineQuantityExceedsLimit,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_WarehouseNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_WarehouseNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_BulkInventoryUpdateCountExceedsLimit member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_BulkInventoryUpdateCountExceedsLimit,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateProductWarehouseQuantityForNonDefaultWarehouseNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateProductWarehouseQuantityForNonDefaultWarehouseNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateProductWarehouseQuantityForMasterProductNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateProductWarehouseQuantityForMasterProductNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateProductWarehouseQuantityDuplicatedQueryItemNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateProductWarehouseQuantityDuplicatedQueryItemNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateProductWarehouseQuantityForLocationControlledProductNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateProductWarehouseQuantityForLocationControlledProductNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RealtimeAccuracyNotSuppoted member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RealtimeAccuracyNotSuppoted,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ProductWarehouseQuantitiesIsEmpty member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ProductWarehouseQuantitiesIsEmpty,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateProductWarehouseQuantityExceedValidRange member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_UpdateProductWarehouseQuantityExceedValidRange,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Inventory_SalesParametersNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Inventory_SalesParametersNotFound
    }
    
    /**
     * InventoryJournalPosAdjustmentType enum type.
     */
    export enum InventoryJournalPosAdjustmentType {
      
        /**
         * The In member.
         */
        In = 0,
        
        /**
         * The Out member.
         */
        Out = 1
    }
    
    /**
     * ProductDataValidationErrors enum type.
     */
    export enum ProductDataValidationErrors {
      
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_HavingMultipleCategoriesNotSupportedInRemoteSearch member.
         */
        Microsoft_Dynamics_Commerce_Runtime_HavingMultipleCategoriesNotSupportedInRemoteSearch,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_HavingMultipleSearchTypesIsNotSupportedInRemoteSearch member.
         */
        Microsoft_Dynamics_Commerce_Runtime_HavingMultipleSearchTypesIsNotSupportedInRemoteSearch,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ProductSerialNumberIsTooLong member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ProductSerialNumberIsTooLong,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NullItemIdNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NullItemIdNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MoreThanOneProductsForSearchVariantPriceRange member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MoreThanOneProductsForSearchVariantPriceRange,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ProductIsNotMasterForSearchVariantPriceRange member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ProductIsNotMasterForSearchVariantPriceRange,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidNumberOfProductBehaviorsFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidNumberOfProductBehaviorsFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ProductBehaviorNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ProductBehaviorNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_KitComponentNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_KitComponentNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidProductSearchCriteria member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidProductSearchCriteria,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CategoryAttributeTypeNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CategoryAttributeTypeNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidProductDataXml member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidProductDataXml,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ItemsNotFoundOnTransaction member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ItemsNotFoundOnTransaction,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DuplicatePriceLookupContextForSameProduct member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DuplicatePriceLookupContextForSameProduct,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SearchFailedForClientError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SearchFailedForClientError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SearchIndexIsNotReady member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SearchIndexIsNotReady,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SearchIndexIsNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SearchIndexIsNotFound
    }
    
    /**
     * MediaType enum type.
     */
    export enum MediaType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Image member.
         */
        Image = 1,
        
        /**
         * The Video member.
         */
        Video = 2,
        
        /**
         * The File member.
         */
        File = 3
    }
    
    /**
     * CheckoutLocation enum type.
     */
    export enum CheckoutLocation {
      
        /**
         * The Default member.
         */
        Default = 0,
        
        /**
         * The Local member.
         */
        Local = 1
    }
    
    /**
     * CountryRegionISOCode enum type.
     */
    export enum CountryRegionISOCode {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The AU member.
         */
        AU = 1,
        
        /**
         * The AT member.
         */
        AT = 2,
        
        /**
         * The BE member.
         */
        BE = 3,
        
        /**
         * The BR member.
         */
        BR = 4,
        
        /**
         * The CA member.
         */
        CA = 5,
        
        /**
         * The CN member.
         */
        CN = 6,
        
        /**
         * The CZ member.
         */
        CZ = 7,
        
        /**
         * The DK member.
         */
        DK = 8,
        
        /**
         * The EE member.
         */
        EE = 9,
        
        /**
         * The FI member.
         */
        FI = 10,
        
        /**
         * The FR member.
         */
        FR = 11,
        
        /**
         * The DE member.
         */
        DE = 12,
        
        /**
         * The HU member.
         */
        HU = 13,
        
        /**
         * The IS member.
         */
        IS = 14,
        
        /**
         * The IN member.
         */
        IN = 15,
        
        /**
         * The IE member.
         */
        IE = 16,
        
        /**
         * The IL member.
         */
        IL = 17,
        
        /**
         * The IT member.
         */
        IT = 18,
        
        /**
         * The JP member.
         */
        JP = 19,
        
        /**
         * The LV member.
         */
        LV = 20,
        
        /**
         * The LT member.
         */
        LT = 21,
        
        /**
         * The MY member.
         */
        MY = 22,
        
        /**
         * The MX member.
         */
        MX = 23,
        
        /**
         * The NL member.
         */
        NL = 24,
        
        /**
         * The NZ member.
         */
        NZ = 25,
        
        /**
         * The NO member.
         */
        NO = 26,
        
        /**
         * The PL member.
         */
        PL = 27,
        
        /**
         * The RU member.
         */
        RU = 28,
        
        /**
         * The SA member.
         */
        SA = 29,
        
        /**
         * The SG member.
         */
        SG = 30,
        
        /**
         * The ZA member.
         */
        ZA = 31,
        
        /**
         * The ES member.
         */
        ES = 32,
        
        /**
         * The SE member.
         */
        SE = 33,
        
        /**
         * The CH member.
         */
        CH = 34,
        
        /**
         * The TH member.
         */
        TH = 35,
        
        /**
         * The TR member.
         */
        TR = 36,
        
        /**
         * The GB member.
         */
        GB = 37,
        
        /**
         * The US member.
         */
        US = 38,
        
        /**
         * The PH member.
         */
        PH = 39,
        
        /**
         * The AE member.
         */
        AE = 40,
        
        /**
         * The QA member.
         */
        QA = 41,
        
        /**
         * The OM member.
         */
        OM = 42,
        
        /**
         * The HR member.
         */
        HR = 43
    }
    
    /**
     * AddressOperationType enum type.
     */
    export enum AddressOperationType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Create member.
         */
        Create = 1,
        
        /**
         * The Update member.
         */
        Update = 2,
        
        /**
         * The Deactivate member.
         */
        Deactivate = 3
    }
    
    /**
     * AddressType enum type.
     */
    export enum AddressType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Invoice member.
         */
        Invoice = 1,
        
        /**
         * The Delivery member.
         */
        Delivery = 2,
        
        /**
         * The AltDlv member.
         */
        AltDlv = 3,
        
        /**
         * The SWIFT member.
         */
        SWIFT = 4,
        
        /**
         * The Payment member.
         */
        Payment = 5,
        
        /**
         * The Service member.
         */
        Service = 6,
        
        /**
         * The Home member.
         */
        Home = 7,
        
        /**
         * The Other member.
         */
        Other = 8,
        
        /**
         * The Business member.
         */
        Business = 9,
        
        /**
         * The RemitTo member.
         */
        RemitTo = 10,
        
        /**
         * The ShipCarrierThirdPartyShipping member.
         */
        ShipCarrierThirdPartyShipping = 11,
        
        /**
         * The Statement member.
         */
        Statement = 12,
        
        /**
         * The FixedAsset member.
         */
        FixedAsset = 15,
        
        /**
         * The Onetime member.
         */
        Onetime = 16,
        
        /**
         * The Recruit member.
         */
        Recruit = 17,
        
        /**
         * The SMS member.
         */
        SMS = 18,
        
        /**
         * The Lading_W member.
         */
        Lading_W = 101,
        
        /**
         * The Unlading_W member.
         */
        Unlading_W = 102,
        
        /**
         * The Consignment_IN member.
         */
        Consignment_IN = 103
    }
    
    /**
     * AttributeDataType enum type.
     */
    export enum AttributeDataType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Currency member.
         */
        Currency = 1,
        
        /**
         * The DateTime member.
         */
        DateTime = 2,
        
        /**
         * The Decimal member.
         */
        Decimal = 3,
        
        /**
         * The Integer member.
         */
        Integer = 4,
        
        /**
         * The Text member.
         */
        Text = 5,
        
        /**
         * The TrueFalse member.
         */
        TrueFalse = 6,
        
        /**
         * The Video member.
         */
        Video = 40,
        
        /**
         * The Image member.
         */
        Image = 41
    }
    
    /**
     * BarcodeEntryMethodType enum type.
     */
    export enum BarcodeEntryMethodType {
      
        /**
         * The SingleScanned member.
         */
        SingleScanned = 0,
        
        /**
         * The MultipleScanned member.
         */
        MultipleScanned = 1,
        
        /**
         * The ManuallyEntered member.
         */
        ManuallyEntered = 2,
        
        /**
         * The Selected member.
         */
        Selected = 3
    }
    
    /**
     * BarcodeMaskType enum type.
     */
    export enum BarcodeMaskType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Item member.
         */
        Item = 1,
        
        /**
         * The Customer member.
         */
        Customer = 2,
        
        /**
         * The Employee member.
         */
        Employee = 3,
        
        /**
         * The Coupon member.
         */
        Coupon = 4,
        
        /**
         * The DataEntry member.
         */
        DataEntry = 5,
        
        /**
         * The Salesperson member.
         */
        Salesperson = 6,
        
        /**
         * The Pharmacy member.
         */
        Pharmacy = 7,
        
        /**
         * The DiscountCode member.
         */
        DiscountCode = 8,
        
        /**
         * The GiftCard member.
         */
        GiftCard = 9,
        
        /**
         * The LoyaltyCard member.
         */
        LoyaltyCard = 10
    }
    
    /**
     * TransactionStatus enum type.
     */
    export enum TransactionStatus {
      
        /**
         * The Normal member.
         */
        Normal = 0,
        
        /**
         * The Voided member.
         */
        Voided = 1,
        
        /**
         * The Posted member.
         */
        Posted = 2,
        
        /**
         * The Concluded member.
         */
        Concluded = 3,
        
        /**
         * The Canceled member.
         */
        Canceled = 4,
        
        /**
         * The OnHold member.
         */
        OnHold = 5,
        
        /**
         * The Training member.
         */
        Training = 6,
        
        /**
         * The Aborted member.
         */
        Aborted = 7
    }
    
    /**
     * GiftCardOperationType enum type.
     */
    export enum GiftCardOperationType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Issue member.
         */
        Issue = 1,
        
        /**
         * The AddTo member.
         */
        AddTo = 2,
        
        /**
         * The CashOut member.
         */
        CashOut = 3
    }
    
    /**
     * RetailGiftCardType enum type.
     */
    export enum RetailGiftCardType {
      
        /**
         * The Unknown member.
         */
        Unknown = 0,
        
        /**
         * The InternalGiftCard member.
         */
        InternalGiftCard = 1,
        
        /**
         * The ExternalGiftCard member.
         */
        ExternalGiftCard = 2
    }
    
    /**
     * PriceMethod enum type.
     */
    export enum PriceMethod {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Fixed member.
         */
        Fixed = 1,
        
        /**
         * The AmountOff member.
         */
        AmountOff = 2,
        
        /**
         * The PercentOff member.
         */
        PercentOff = 3
    }
    
    /**
     * ManualPriceEntryType enum type.
     */
    export enum ManualPriceEntryType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The PriceOverridden member.
         */
        PriceOverridden = 1,
        
        /**
         * The PriceKeyedIn member.
         */
        PriceKeyedIn = 2
    }
    
    /**
     * ConcurrencyMode enum type.
     */
    export enum ConcurrencyMode {
      
        /**
         * The Exclusive member.
         */
        Exclusive = 0,
        
        /**
         * The BestPrice member.
         */
        BestPrice = 1,
        
        /**
         * The Compounded member.
         */
        Compounded = 2,
        
        /**
         * The AlwaysApply member.
         */
        AlwaysApply = 3,
        
        /**
         * The HighestCombinedPricingPriority member.
         */
        HighestCombinedPricingPriority = 4
    }
    
    /**
     * SalesAgreementLineType enum type.
     */
    export enum SalesAgreementLineType {
      
        /**
         * The ProductQuantity member.
         */
        ProductQuantity = 0,
        
        /**
         * The ProductVolume member.
         */
        ProductVolume = 1,
        
        /**
         * The ProductCategory member.
         */
        ProductCategory = 2,
        
        /**
         * The ProductRootCategory member.
         */
        ProductRootCategory = 3
    }
    
    /**
     * DiscountLineType enum type.
     */
    export enum DiscountLineType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The CustomerDiscount member.
         */
        CustomerDiscount = 1,
        
        /**
         * The PeriodicDiscount member.
         */
        PeriodicDiscount = 2,
        
        /**
         * The ManualDiscount member.
         */
        ManualDiscount = 3,
        
        /**
         * The LoyaltyDiscount member.
         */
        LoyaltyDiscount = 4,
        
        /**
         * The TenderTypeDiscount member.
         */
        TenderTypeDiscount = 5
    }
    
    /**
     * ManualDiscountType enum type.
     */
    export enum ManualDiscountType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The LineDiscountAmount member.
         */
        LineDiscountAmount = 1,
        
        /**
         * The LineDiscountPercent member.
         */
        LineDiscountPercent = 2,
        
        /**
         * The TotalDiscountAmount member.
         */
        TotalDiscountAmount = 3,
        
        /**
         * The TotalDiscountPercent member.
         */
        TotalDiscountPercent = 4
    }
    
    /**
     * CustomerDiscountType enum type.
     */
    export enum CustomerDiscountType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The LineDiscount member.
         */
        LineDiscount = 1,
        
        /**
         * The MultilineDiscount member.
         */
        MultilineDiscount = 2,
        
        /**
         * The TotalDiscount member.
         */
        TotalDiscount = 3
    }
    
    /**
     * ReasonCodeInputType enum type.
     */
    export enum ReasonCodeInputType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The SubCode member.
         */
        SubCode = 1,
        
        /**
         * The Date member.
         */
        Date = 2,
        
        /**
         * The Numeric member.
         */
        Numeric = 3,
        
        /**
         * The Item member.
         */
        Item = 4,
        
        /**
         * The Customer member.
         */
        Customer = 5,
        
        /**
         * The Staff member.
         */
        Staff = 6,
        
        /**
         * The Text member.
         */
        Text = 9,
        
        /**
         * The SubCodeButtons member.
         */
        SubCodeButtons = 10,
        
        /**
         * The AgeLimit member.
         */
        AgeLimit = 11,
        
        /**
         * The CompositeSubCodes member.
         */
        CompositeSubCodes = 12
    }
    
    /**
     * ReasonCodeLineType enum type.
     */
    export enum ReasonCodeLineType {
      
        /**
         * The Header member.
         */
        Header = 0,
        
        /**
         * The Sales member.
         */
        Sales = 1,
        
        /**
         * The Payment member.
         */
        Payment = 2,
        
        /**
         * The IncomeExpense member.
         */
        IncomeExpense = 3,
        
        /**
         * The NoSale member.
         */
        NoSale = 4,
        
        /**
         * The Affiliation member.
         */
        Affiliation = 5,
        
        /**
         * The Fiscal member.
         */
        Fiscal = 6
    }
    
    /**
     * ChargeModule enum type.
     */
    export enum ChargeModule {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Sales member.
         */
        Sales = 1,
        
        /**
         * The Retail member.
         */
        Retail = 3
    }
    
    /**
     * ChargeType enum type.
     */
    export enum ChargeType {
      
        /**
         * The ManualCharge member.
         */
        ManualCharge = 0,
        
        /**
         * The PriceCharge member.
         */
        PriceCharge = 1,
        
        /**
         * The AutoCharge member.
         */
        AutoCharge = 2
    }
    
    /**
     * ChargeMethod enum type.
     */
    export enum ChargeMethod {
      
        /**
         * The Fixed member.
         */
        Fixed = 0,
        
        /**
         * The Pieces member.
         */
        Pieces = 1,
        
        /**
         * The Percent member.
         */
        Percent = 2,
        
        /**
         * The InterCompanyPercent member.
         */
        InterCompanyPercent = 3,
        
        /**
         * The External member.
         */
        External = 4,
        
        /**
         * The Proportional member.
         */
        Proportional = 5,
        
        /**
         * The UnitSpecified member.
         */
        UnitSpecified = 6,
        
        /**
         * The UnitSpecifiedMatch member.
         */
        UnitSpecifiedMatch = 7
    }
    
    /**
     * CustType enum type.
     */
    export enum CustType {
      
        /**
         * The Item member.
         */
        Item = 0,
        
        /**
         * The LedgerAccount member.
         */
        LedgerAccount = 1,
        
        /**
         * The CustVend member.
         */
        CustVend = 2
    }
    
    /**
     * CashType enum type.
     */
    export enum CashType {
      
        /**
         * The Coin member.
         */
        Coin = 0,
        
        /**
         * The Note member.
         */
        Note = 1
    }
    
    /**
     * IncomeExpenseAccountType enum type.
     */
    export enum IncomeExpenseAccountType {
      
        /**
         * The Income member.
         */
        Income = 0,
        
        /**
         * The Expense member.
         */
        Expense = 1,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * TenderLineStatus enum type.
     */
    export enum TenderLineStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The NotProcessed member.
         */
        NotProcessed = 1,
        
        /**
         * The PendingCommit member.
         */
        PendingCommit = 2,
        
        /**
         * The Voided member.
         */
        Voided = 3,
        
        /**
         * The Committed member.
         */
        Committed = 4,
        
        /**
         * The Historical member.
         */
        Historical = 5
    }
    
    /**
     * TenderLineVoidStatus enum type.
     */
    export enum TenderLineVoidStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The NormalVoid member.
         */
        NormalVoid = 1,
        
        /**
         * The ForceVoided member.
         */
        ForceVoided = 2,
        
        /**
         * The ForceVoidReconciled member.
         */
        ForceVoidReconciled = 3
    }
    
    /**
     * PaymentProcessingType enum type.
     */
    export enum PaymentProcessingType {
      
        /**
         * The Immediate member.
         */
        Immediate = 0,
        
        /**
         * The Deferred member.
         */
        Deferred = 1,
        
        /**
         * The LinkedRefund member.
         */
        LinkedRefund = 2,
        
        /**
         * The Recalled member.
         */
        Recalled = 3
    }
    
    /**
     * CreditCardProcessorStatus enum type.
     */
    export enum CreditCardProcessorStatus {
      
        /**
         * The NA member.
         */
        NA = 0,
        
        /**
         * The Approved member.
         */
        Approved = 1,
        
        /**
         * The Declined member.
         */
        Declined = 2,
        
        /**
         * The Error member.
         */
        Error = 3
    }
    
    /**
     * ContactInformationType enum type.
     */
    export enum ContactInformationType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Phone member.
         */
        Phone = 1,
        
        /**
         * The Email member.
         */
        Email = 2,
        
        /**
         * The Url member.
         */
        Url = 3,
        
        /**
         * The Telex member.
         */
        Telex = 4,
        
        /**
         * The Fax member.
         */
        Fax = 5,
        
        /**
         * The CellularPhone member.
         */
        CellularPhone = 6
    }
    
    /**
     * CommerceEntityDataLevel enum type.
     */
    export enum CommerceEntityDataLevel {
      
        /**
         * The Identity member.
         */
        Identity = 0,
        
        /**
         * The Minimal member.
         */
        Minimal = 1,
        
        /**
         * The Standard member.
         */
        Standard = 2,
        
        /**
         * The Extended member.
         */
        Extended = 3,
        
        /**
         * The Complete member.
         */
        Complete = 4
    }
    
    /**
     * ProductPropertyType enum type.
     */
    export enum ProductPropertyType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Currency member.
         */
        Currency = 1,
        
        /**
         * The DateTime member.
         */
        DateTime = 2,
        
        /**
         * The Decimal member.
         */
        Decimal = 3,
        
        /**
         * The Integer member.
         */
        Integer = 4,
        
        /**
         * The Text member.
         */
        Text = 5,
        
        /**
         * The Boolean member.
         */
        Boolean = 6,
        
        /**
         * The Video member.
         */
        Video = 40,
        
        /**
         * The Image member.
         */
        Image = 41
    }
    
    /**
     * AttributeGroupType enum type.
     */
    export enum AttributeGroupType {
      
        /**
         * The Default member.
         */
        Default = 0,
        
        /**
         * The Specification member.
         */
        Specification = 1
    }
    
    /**
     * ProductSource enum type.
     */
    export enum ProductSource {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Local member.
         */
        Local = 1,
        
        /**
         * The Remote member.
         */
        Remote = 2
    }
    
    /**
     * RoundingMethod enum type.
     */
    export enum RoundingMethod {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Nearest member.
         */
        Nearest = 1,
        
        /**
         * The Up member.
         */
        Up = 2,
        
        /**
         * The Down member.
         */
        Down = 3
    }
    
    /**
     * LineMultilineDiscountOnItem enum type.
     */
    export enum LineMultilineDiscountOnItem {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Line member.
         */
        Line = 1,
        
        /**
         * The Multiline member.
         */
        Multiline = 2,
        
        /**
         * The Both member.
         */
        Both = 3
    }
    
    /**
     * LoyaltyRewardPointEntryType enum type.
     */
    export enum LoyaltyRewardPointEntryType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Earn member.
         */
        Earn = 1,
        
        /**
         * The Redeem member.
         */
        Redeem = 2,
        
        /**
         * The ReturnEarned member.
         */
        ReturnEarned = 3,
        
        /**
         * The Adjust member.
         */
        Adjust = 4,
        
        /**
         * The Refund member.
         */
        Refund = 5
    }
    
    /**
     * LoyaltyRewardPointType enum type.
     */
    export enum LoyaltyRewardPointType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Quantity member.
         */
        Quantity = 1,
        
        /**
         * The Amount member.
         */
        Amount = 2
    }
    
    /**
     * TransactionType enum type.
     */
    export enum TransactionType {
      
        /**
         * The LogOff member.
         */
        LogOff = 0,
        
        /**
         * The LogOn member.
         */
        LogOn = 1,
        
        /**
         * The Sales member.
         */
        Sales = 2,
        
        /**
         * The Payment member.
         */
        Payment = 3,
        
        /**
         * The RemoveTender member.
         */
        RemoveTender = 4,
        
        /**
         * The FloatEntry member.
         */
        FloatEntry = 5,
        
        /**
         * The ChangeTender member.
         */
        ChangeTender = 6,
        
        /**
         * The TenderDeclaration member.
         */
        TenderDeclaration = 7,
        
        /**
         * The OpenDrawer member.
         */
        OpenDrawer = 9,
        
        /**
         * The SalesOrder member.
         */
        SalesOrder = 14,
        
        /**
         * The SalesInvoice member.
         */
        SalesInvoice = 15,
        
        /**
         * The BankDrop member.
         */
        BankDrop = 16,
        
        /**
         * The SafeDrop member.
         */
        SafeDrop = 17,
        
        /**
         * The IncomeExpense member.
         */
        IncomeExpense = 18,
        
        /**
         * The CustomerOrder member.
         */
        CustomerOrder = 19,
        
        /**
         * The StartingAmount member.
         */
        StartingAmount = 20,
        
        /**
         * The SuspendShift member.
         */
        SuspendShift = 21,
        
        /**
         * The BlindCloseShift member.
         */
        BlindCloseShift = 22,
        
        /**
         * The CloseShift member.
         */
        CloseShift = 23,
        
        /**
         * The PrintX member.
         */
        PrintX = 24,
        
        /**
         * The PrintZ member.
         */
        PrintZ = 25,
        
        /**
         * The PendingSalesOrder member.
         */
        PendingSalesOrder = 27,
        
        /**
         * The KitDisassembly member.
         */
        KitDisassembly = 28,
        
        /**
         * The AsyncCustomerQuote member.
         */
        AsyncCustomerQuote = 31,
        
        /**
         * The AsyncCustomerOrder member.
         */
        AsyncCustomerOrder = 33,
        
        /**
         * The ForceDeleteShift member.
         */
        ForceDeleteShift = 34,
        
        /**
         * The GiftCardInquiry member.
         */
        GiftCardInquiry = 35,
        
        /**
         * The SuspendedTransaction member.
         */
        SuspendedTransaction = 36,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * CashManagementTransactionContext enum type.
     */
    export enum CashManagementTransactionContext {
      
        /**
         * The Unknown member.
         */
        Unknown = 0,
        
        /**
         * The Shift member.
         */
        Shift = 1,
        
        /**
         * The Safe member.
         */
        Safe = 2,
        
        /**
         * The Bank member.
         */
        Bank = 3
    }
    
    /**
     * CustomerTimelineItemEntityType enum type.
     */
    export enum CustomerTimelineItemEntityType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Activity member.
         */
        Activity = 1,
        
        /**
         * The Note member.
         */
        Note = 2,
        
        /**
         * The UnifiedActivity member.
         */
        UnifiedActivity = 3
    }
    
    /**
     * EmployeePermissionsAllowPrintingReceiptCopy enum type.
     */
    export enum EmployeePermissionsAllowPrintingReceiptCopy {
      
        /**
         * The Always member.
         */
        Always = 0,
        
        /**
         * The OnlyOnce member.
         */
        OnlyOnce = 1,
        
        /**
         * The OnlyOnceHqAvailable member.
         */
        OnlyOnceHqAvailable = 2,
        
        /**
         * The Never member.
         */
        Never = 3
    }
    
    /**
     * AddressFormatLineType enum type.
     */
    export enum AddressFormatLineType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The ZipCode member.
         */
        ZipCode = 1,
        
        /**
         * The City member.
         */
        City = 2,
        
        /**
         * The County member.
         */
        County = 3,
        
        /**
         * The State member.
         */
        State = 4,
        
        /**
         * The CountryRegion member.
         */
        CountryRegion = 5,
        
        /**
         * The StreetName member.
         */
        StreetName = 6,
        
        /**
         * The District member.
         */
        District = 7,
        
        /**
         * The StreetNumber member.
         */
        StreetNumber = 8,
        
        /**
         * The BuildingCompliment member.
         */
        BuildingCompliment = 9,
        
        /**
         * The Postbox member.
         */
        Postbox = 10,
        
        /**
         * The House_RU member.
         */
        House_RU = 21,
        
        /**
         * The Flat_RU member.
         */
        Flat_RU = 22,
        
        /**
         * The CountryOKSMCode_RU member.
         */
        CountryOKSMCode_RU = 23
    }
    
    /**
     * CustomerOrderSynchronizationMode enum type.
     */
    export enum CustomerOrderSynchronizationMode {
      
        /**
         * The Synchronous member.
         */
        Synchronous = 0,
        
        /**
         * The Asynchronous member.
         */
        Asynchronous = 1,
        
        /**
         * The RealTimeWithAsyncFallback member.
         */
        RealTimeWithAsyncFallback = 2
    }
    
    /**
     * StatementMethod enum type.
     */
    export enum StatementMethod {
      
        /**
         * The Staff member.
         */
        Staff = 0,
        
        /**
         * The PosTerminal member.
         */
        PosTerminal = 1,
        
        /**
         * The Total member.
         */
        Total = 2,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * SalesRepPromptType enum type.
     */
    export enum SalesRepPromptType {
      
        /**
         * The NoPrompt member.
         */
        NoPrompt = 0,
        
        /**
         * The PromptOnCartCreation member.
         */
        PromptOnCartCreation = 1,
        
        /**
         * The PromptOnCartLineCreation member.
         */
        PromptOnCartLineCreation = 2,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * RetailProductSearchType enum type.
     */
    export enum RetailProductSearchType {
      
        /**
         * The MatchAnySearchTerms member.
         */
        MatchAnySearchTerms = 0,
        
        /**
         * The MatchAllSearchTerms member.
         */
        MatchAllSearchTerms = 1
    }
    
    /**
     * RetailDenominationsToDisplay enum type.
     */
    export enum RetailDenominationsToDisplay {
      
        /**
         * The GreaterOrEqualToAmountDue member.
         */
        GreaterOrEqualToAmountDue = 0,
        
        /**
         * The AllDenominations member.
         */
        AllDenominations = 1
    }
    
    /**
     * EmployeeLogonType enum type.
     */
    export enum EmployeeLogonType {
      
        /**
         * The RetailIdentityProvider member.
         */
        RetailIdentityProvider = 0,
        
        /**
         * The AzureActiveDirectory member.
         */
        AzureActiveDirectory = 1,
        
        /**
         * The AzureActiveDirectorySingleSignOn member.
         */
        AzureActiveDirectorySingleSignOn = 2
    }
    
    /**
     * RetailCustomerSearchMode enum type.
     */
    export enum RetailCustomerSearchMode {
      
        /**
         * The Local member.
         */
        Local = 0,
        
        /**
         * The Remote member.
         */
        Remote = 1
    }
    
    /**
     * RequirePaymentForFulfillment enum type.
     */
    export enum RequirePaymentForFulfillment {
      
        /**
         * The AllowPayLater member.
         */
        AllowPayLater = 0,
        
        /**
         * The CardRequired member.
         */
        CardRequired = 1
    }
    
    /**
     * CardNotPresentProcessingConfiguration enum type.
     */
    export enum CardNotPresentProcessingConfiguration {
      
        /**
         * The UseHardwareStation member.
         */
        UseHardwareStation = 0,
        
        /**
         * The UseCommerceEngine member.
         */
        UseCommerceEngine = 1
    }
    
    /**
     * ChangeDueBehavior enum type.
     */
    export enum ChangeDueBehavior {
      
        /**
         * The ShowAlways member.
         */
        ShowAlways = 0,
        
        /**
         * The SkipWhenZero member.
         */
        SkipWhenZero = 1
    }
    
    /**
     * FontSchemeType enum type.
     */
    export enum FontSchemeType {
      
        /**
         * The Standard member.
         */
        Standard = 0,
        
        /**
         * The Large member.
         */
        Large = 1,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * DefaultSearchResultDisplayViewType enum type.
     */
    export enum DefaultSearchResultDisplayViewType {
      
        /**
         * The ListView member.
         */
        ListView = 0,
        
        /**
         * The CardView member.
         */
        CardView = 1,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * DeviceActivationStatus enum type.
     */
    export enum DeviceActivationStatus {
      
        /**
         * The Pending member.
         */
        Pending = 0,
        
        /**
         * The Activated member.
         */
        Activated = 1,
        
        /**
         * The Deactivated member.
         */
        Deactivated = 2,
        
        /**
         * The Disabled member.
         */
        Disabled = 3,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * DeviceType enum type.
     */
    export enum DeviceType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The OPOS member.
         */
        OPOS = 1,
        
        /**
         * The WindowsPrinter member.
         */
        WindowsPrinter = 2,
        
        /**
         * The Network member.
         */
        Network = 3
    }
    
    /**
     * DualDisplayType enum type.
     */
    export enum DualDisplayType {
      
        /**
         * The Logo member.
         */
        Logo = 0,
        
        /**
         * The ImageRotator member.
         */
        ImageRotator = 1,
        
        /**
         * The WebBrowser member.
         */
        WebBrowser = 2,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * FiscalRegisterType enum type.
     */
    export enum FiscalRegisterType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Manufacturer member.
         */
        Manufacturer = 1
    }
    
    /**
     * PrinterLogotype enum type.
     */
    export enum PrinterLogotype {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Download member.
         */
        Download = 1,
        
        /**
         * The EpsonFlash member.
         */
        EpsonFlash = 2
    }
    
    /**
     * PrinterLogoAlignmentType enum type.
     */
    export enum PrinterLogoAlignmentType {
      
        /**
         * The Left member.
         */
        Left = 0,
        
        /**
         * The Center member.
         */
        Center = 1,
        
        /**
         * The Right member.
         */
        Right = 2,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * FiscalIntegrationConnectorType enum type.
     */
    export enum FiscalIntegrationConnectorType {
      
        /**
         * The Local member.
         */
        Local = 0,
        
        /**
         * The External member.
         */
        External = 1,
        
        /**
         * The Internal member.
         */
        Internal = 2
    }
    
    /**
     * FiscalIntegrationConnectorLocation enum type.
     */
    export enum FiscalIntegrationConnectorLocation {
      
        /**
         * The HardwareStation member.
         */
        HardwareStation = 0,
        
        /**
         * The Pos member.
         */
        Pos = 1
    }
    
    /**
     * ReceiptType enum type.
     */
    export enum ReceiptType {
      
        /**
         * The Unknown member.
         */
        Unknown = 0,
        
        /**
         * The SalesReceipt member.
         */
        SalesReceipt = 1,
        
        /**
         * The CardReceiptForShop member.
         */
        CardReceiptForShop = 2,
        
        /**
         * The CardReceiptForCustomer member.
         */
        CardReceiptForCustomer = 3,
        
        /**
         * The CardReceiptForShopReturn member.
         */
        CardReceiptForShopReturn = 4,
        
        /**
         * The CardReceiptForCustomerReturn member.
         */
        CardReceiptForCustomerReturn = 5,
        
        /**
         * The CustomerAccountReceiptForShop member.
         */
        CustomerAccountReceiptForShop = 7,
        
        /**
         * The CustomerAccountReceiptForCustomer member.
         */
        CustomerAccountReceiptForCustomer = 8,
        
        /**
         * The CustomerAccountReceiptForShopReturn member.
         */
        CustomerAccountReceiptForShopReturn = 9,
        
        /**
         * The CustomerAccountReceiptForCustomerReturn member.
         */
        CustomerAccountReceiptForCustomerReturn = 10,
        
        /**
         * The CustomerAccountDeposit member.
         */
        CustomerAccountDeposit = 14,
        
        /**
         * The CreditMemo member.
         */
        CreditMemo = 15,
        
        /**
         * The SalesOrderReceipt member.
         */
        SalesOrderReceipt = 18,
        
        /**
         * The GiftCertificate member.
         */
        GiftCertificate = 20,
        
        /**
         * The QuotationReceipt member.
         */
        QuotationReceipt = 21,
        
        /**
         * The PackingSlip member.
         */
        PackingSlip = 22,
        
        /**
         * The PickupReceipt member.
         */
        PickupReceipt = 23,
        
        /**
         * The XReport member.
         */
        XReport = 24,
        
        /**
         * The ZReport member.
         */
        ZReport = 25,
        
        /**
         * The SafeDrop member.
         */
        SafeDrop = 26,
        
        /**
         * The BankDrop member.
         */
        BankDrop = 27,
        
        /**
         * The TenderDeclaration member.
         */
        TenderDeclaration = 28,
        
        /**
         * The RemoveTender member.
         */
        RemoveTender = 29,
        
        /**
         * The FloatEntry member.
         */
        FloatEntry = 30,
        
        /**
         * The StartingAmount member.
         */
        StartingAmount = 31,
        
        /**
         * The OrderSummaryReceipt member.
         */
        OrderSummaryReceipt = 32,
        
        /**
         * The GiftReceipt member.
         */
        GiftReceipt = 33,
        
        /**
         * The ReturnLabel member.
         */
        ReturnLabel = 34,
        
        /**
         * The EFDocDANFESimplified member.
         */
        EFDocDANFESimplified = 35,
        
        /**
         * The EFDocDANFEDetailed member.
         */
        EFDocDANFEDetailed = 36,
        
        /**
         * The PickingList member.
         */
        PickingList = 37,
        
        /**
         * The OpenDrawer member.
         */
        OpenDrawer = 38,
        
        /**
         * The SuspendedTransaction member.
         */
        SuspendedTransaction = 39,
        
        /**
         * The GiftCardInquiry member.
         */
        GiftCardInquiry = 40,
        
        /**
         * The CardTerminationReceiptForShop member.
         */
        CardTerminationReceiptForShop = 41,
        
        /**
         * The CardTerminationReceiptForCustomer member.
         */
        CardTerminationReceiptForCustomer = 42,
        
        /**
         * The TransferPackingSlip member.
         */
        TransferPackingSlip = 43,
        
        /**
         * The EFDocDanfeModel55 member.
         */
        EFDocDanfeModel55 = 44,
        
        /**
         * The InventoryAdjustment member.
         */
        InventoryAdjustment = 45,
        
        /**
         * The InventoryTransfer member.
         */
        InventoryTransfer = 46,
        
        /**
         * The CfeDetailed member.
         */
        CfeDetailed = 47,
        
        /**
         * The CfeSimplified member.
         */
        CfeSimplified = 48,
        
        /**
         * The CfeCancelled member.
         */
        CfeCancelled = 49,
        
        /**
         * The CustomReceipt1 member.
         */
        CustomReceipt1 = 101,
        
        /**
         * The CustomReceipt2 member.
         */
        CustomReceipt2 = 102,
        
        /**
         * The CustomReceipt3 member.
         */
        CustomReceipt3 = 103,
        
        /**
         * The CustomReceipt4 member.
         */
        CustomReceipt4 = 104,
        
        /**
         * The CustomReceipt5 member.
         */
        CustomReceipt5 = 105,
        
        /**
         * The CustomReceipt6 member.
         */
        CustomReceipt6 = 106,
        
        /**
         * The CustomReceipt7 member.
         */
        CustomReceipt7 = 107,
        
        /**
         * The CustomReceipt8 member.
         */
        CustomReceipt8 = 108,
        
        /**
         * The CustomReceipt9 member.
         */
        CustomReceipt9 = 109,
        
        /**
         * The CustomReceipt10 member.
         */
        CustomReceipt10 = 110,
        
        /**
         * The CustomReceipt11 member.
         */
        CustomReceipt11 = 111,
        
        /**
         * The CustomReceipt12 member.
         */
        CustomReceipt12 = 112,
        
        /**
         * The CustomReceipt13 member.
         */
        CustomReceipt13 = 113,
        
        /**
         * The CustomReceipt14 member.
         */
        CustomReceipt14 = 114,
        
        /**
         * The CustomReceipt15 member.
         */
        CustomReceipt15 = 115,
        
        /**
         * The CustomReceipt16 member.
         */
        CustomReceipt16 = 116,
        
        /**
         * The CustomReceipt17 member.
         */
        CustomReceipt17 = 117,
        
        /**
         * The CustomReceipt18 member.
         */
        CustomReceipt18 = 118,
        
        /**
         * The CustomReceipt19 member.
         */
        CustomReceipt19 = 119,
        
        /**
         * The CustomReceipt20 member.
         */
        CustomReceipt20 = 120
    }
    
    /**
     * PrintBehavior enum type.
     */
    export enum PrintBehavior {
      
        /**
         * The Always member.
         */
        Always = 0,
        
        /**
         * The Never member.
         */
        Never = 1,
        
        /**
         * The Prompt member.
         */
        Prompt = 2,
        
        /**
         * The AsRequired member.
         */
        AsRequired = 3
    }
    
    /**
     * DistanceUnit enum type.
     */
    export enum DistanceUnit {
      
        /**
         * The Miles member.
         */
        Miles = 0,
        
        /**
         * The Kilometers member.
         */
        Kilometers = 1
    }
    
    /**
     * StockCountStatus enum type.
     */
    export enum StockCountStatus {
      
        /**
         * The Unchanged member.
         */
        Unchanged = 0,
        
        /**
         * The PendingUpdate member.
         */
        PendingUpdate = 1
    }
    
    /**
     * UnitOfMeasureSource enum type.
     */
    export enum UnitOfMeasureSource {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Default member.
         */
        Default = 1,
        
        /**
         * The StandardConversion member.
         */
        StandardConversion = 2,
        
        /**
         * The IntraOrInterClassConversion member.
         */
        IntraOrInterClassConversion = 3,
        
        /**
         * The VariantConversion member.
         */
        VariantConversion = 4
    }
    
    /**
     * RecommendedElementType enum type.
     */
    export enum RecommendedElementType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Product member.
         */
        Product = 1,
        
        /**
         * The Content member.
         */
        Content = 2
    }
    
    /**
     * CommerceListInvitationStatus enum type.
     */
    export enum CommerceListInvitationStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Pending member.
         */
        Pending = 1,
        
        /**
         * The Accepted member.
         */
        Accepted = 2
    }
    
    /**
     * CommerceListInvitationType enum type.
     */
    export enum CommerceListInvitationType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Public member.
         */
        Public = 1,
        
        /**
         * The Email member.
         */
        Email = 2
    }
    
    /**
     * SearchLocation enum type.
     */
    export enum SearchLocation {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Local member.
         */
        Local = 1,
        
        /**
         * The Remote member.
         */
        Remote = 2,
        
        /**
         * The All member.
         */
        All = 3
    }
    
    /**
     * OrderSearchType enum type.
     */
    export enum OrderSearchType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The SalesOrder member.
         */
        SalesOrder = 1,
        
        /**
         * The SalesTransaction member.
         */
        SalesTransaction = 2,
        
        /**
         * The ConsolidateOrder member.
         */
        ConsolidateOrder = 3
    }
    
    /**
     * SalesTransactionType enum type.
     */
    export enum SalesTransactionType {
      
        /**
         * The Sales member.
         */
        Sales = 2,
        
        /**
         * The CustomerAccountDeposit member.
         */
        CustomerAccountDeposit = 3,
        
        /**
         * The SalesInvoice member.
         */
        SalesInvoice = 15,
        
        /**
         * The IncomeExpense member.
         */
        IncomeExpense = 18,
        
        /**
         * The CustomerOrder member.
         */
        CustomerOrder = 19,
        
        /**
         * The PendingSalesOrder member.
         */
        PendingSalesOrder = 27,
        
        /**
         * The AsyncCustomerQuote member.
         */
        AsyncCustomerQuote = 31,
        
        /**
         * The AsyncCustomerOrder member.
         */
        AsyncCustomerOrder = 33,
        
        /**
         * The SuspendedTransaction member.
         */
        SuspendedTransaction = 36,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * CustomerRefinerSource enum type.
     */
    export enum CustomerRefinerSource {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Attribute member.
         */
        Attribute = 1,
        
        /**
         * The CustomerSearchField member.
         */
        CustomerSearchField = 2
    }
    
    /**
     * PriceSourceType enum type.
     */
    export enum PriceSourceType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The BasePrice member.
         */
        BasePrice = 1,
        
        /**
         * The TradeAgreement member.
         */
        TradeAgreement = 2,
        
        /**
         * The PriceAdjustment member.
         */
        PriceAdjustment = 3,
        
        /**
         * The SalesAgreement member.
         */
        SalesAgreement = 4,
        
        /**
         * The Manual member.
         */
        Manual = 5
    }
    
    /**
     * RetailAffiliationType enum type.
     */
    export enum RetailAffiliationType {
      
        /**
         * The General member.
         */
        General = 0,
        
        /**
         * The Loyalty member.
         */
        Loyalty = 1,
        
        /**
         * The Unknown member.
         */
        Unknown = -1
    }
    
    /**
     * InventoryDocumentLineOriginType enum type.
     */
    export enum InventoryDocumentLineOriginType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Headquarters member.
         */
        Headquarters = 1,
        
        /**
         * The Channel member.
         */
        Channel = 2
    }
    
    /**
     * InventorySerialNumberLineStatus enum type.
     */
    export enum InventorySerialNumberLineStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The NotRegistered member.
         */
        NotRegistered = 1,
        
        /**
         * The Registering member.
         */
        Registering = 2,
        
        /**
         * The Registered member.
         */
        Registered = 3
    }
    
    /**
     * InventoryTrackingDimensionLineStatus enum type.
     */
    export enum InventoryTrackingDimensionLineStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The NotRegistered member.
         */
        NotRegistered = 1,
        
        /**
         * The Registering member.
         */
        Registering = 2,
        
        /**
         * The Registered member.
         */
        Registered = 3
    }
    
    /**
     * InventorySourceDocumentLineStatus enum type.
     */
    export enum InventorySourceDocumentLineStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Deleted member.
         */
        Deleted = 1,
        
        /**
         * The ReadOnly member.
         */
        ReadOnly = 2
    }
    
    /**
     * RetailOperation enum type.
     */
    export enum RetailOperation {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The ItemSale member.
         */
        ItemSale = 100,
        
        /**
         * The PriceCheck member.
         */
        PriceCheck = 101,
        
        /**
         * The VoidItem member.
         */
        VoidItem = 102,
        
        /**
         * The ItemComment member.
         */
        ItemComment = 103,
        
        /**
         * The PriceOverride member.
         */
        PriceOverride = 104,
        
        /**
         * The SetQuantity member.
         */
        SetQuantity = 105,
        
        /**
         * The ClearQuantity member.
         */
        ClearQuantity = 106,
        
        /**
         * The ItemSearch member.
         */
        ItemSearch = 108,
        
        /**
         * The ReturnItem member.
         */
        ReturnItem = 109,
        
        /**
         * The WeighItem member.
         */
        WeighItem = 110,
        
        /**
         * The LinkedItemsAdd member.
         */
        LinkedItemsAdd = 112,
        
        /**
         * The SetDimensions member.
         */
        SetDimensions = 113,
        
        /**
         * The ReturnTransaction member.
         */
        ReturnTransaction = 114,
        
        /**
         * The ShowJournal member.
         */
        ShowJournal = 115,
        
        /**
         * The SetCostPrice member.
         */
        SetCostPrice = 116,
        
        /**
         * The LoyaltyRequest member.
         */
        LoyaltyRequest = 117,
        
        /**
         * The ProcessInput member.
         */
        ProcessInput = 118,
        
        /**
         * The SalespersonBarcode member.
         */
        SalespersonBarcode = 119,
        
        /**
         * The SalespersonCard member.
         */
        SalespersonCard = 120,
        
        /**
         * The SalespersonClear member.
         */
        SalespersonClear = 121,
        
        /**
         * The InvoiceComment member.
         */
        InvoiceComment = 122,
        
        /**
         * The ChangeUnitOfMeasure member.
         */
        ChangeUnitOfMeasure = 123,
        
        /**
         * The ItemSaleMultiple member.
         */
        ItemSaleMultiple = 124,
        
        /**
         * The RFIDSale member.
         */
        RFIDSale = 125,
        
        /**
         * The SalesHistory member.
         */
        SalesHistory = 126,
        
        /**
         * The OverrideTaxTransaction member.
         */
        OverrideTaxTransaction = 127,
        
        /**
         * The OverrideTaxTransactionList member.
         */
        OverrideTaxTransactionList = 128,
        
        /**
         * The OverrideTaxLine member.
         */
        OverrideTaxLine = 129,
        
        /**
         * The OverrideTaxLineList member.
         */
        OverrideTaxLineList = 130,
        
        /**
         * The PackSlip member.
         */
        PackSlip = 131,
        
        /**
         * The DepositOverride member.
         */
        DepositOverride = 132,
        
        /**
         * The BuyWarranty member.
         */
        BuyWarranty = 133,
        
        /**
         * The AddAffiliation member.
         */
        AddAffiliation = 134,
        
        /**
         * The AddAffiliationFromList member.
         */
        AddAffiliationFromList = 135,
        
        /**
         * The AddSerialNumber member.
         */
        AddSerialNumber = 136,
        
        /**
         * The AddAffiliationToCustomer member.
         */
        AddAffiliationToCustomer = 137,
        
        /**
         * The RemoveAffiliationFromCustomer member.
         */
        RemoveAffiliationFromCustomer = 138,
        
        /**
         * The ConcludeTransaction member.
         */
        ConcludeTransaction = 139,
        
        /**
         * The AddLineCharge member.
         */
        AddLineCharge = 140,
        
        /**
         * The AddHeaderCharge member.
         */
        AddHeaderCharge = 141,
        
        /**
         * The ManageCharges member.
         */
        ManageCharges = 142,
        
        /**
         * The RecalculateCharges member.
         */
        RecalculateCharges = 143,
        
        /**
         * The AddWarrantyToAnExistingTransaction member.
         */
        AddWarrantyToAnExistingTransaction = 144,
        
        /**
         * The PayCash member.
         */
        PayCash = 200,
        
        /**
         * The PayCard member.
         */
        PayCard = 201,
        
        /**
         * The PayCustomerAccount member.
         */
        PayCustomerAccount = 202,
        
        /**
         * The PayCurrency member.
         */
        PayCurrency = 203,
        
        /**
         * The PayCheck member.
         */
        PayCheck = 204,
        
        /**
         * The PayCashQuick member.
         */
        PayCashQuick = 206,
        
        /**
         * The PayLoyalty member.
         */
        PayLoyalty = 207,
        
        /**
         * The PayCorporateCard member.
         */
        PayCorporateCard = 208,
        
        /**
         * The ChangeBack member.
         */
        ChangeBack = 210,
        
        /**
         * The VoidPayment member.
         */
        VoidPayment = 211,
        
        /**
         * The FleetCardInfo member.
         */
        FleetCardInfo = 212,
        
        /**
         * The PayCreditMemo member.
         */
        PayCreditMemo = 213,
        
        /**
         * The PayGiftCertificate member.
         */
        PayGiftCertificate = 214,
        
        /**
         * The CashOutGiftCard member.
         */
        CashOutGiftCard = 215,
        
        /**
         * The PayCardExact member.
         */
        PayCardExact = 216,
        
        /**
         * The PayCheckExact member.
         */
        PayCheckExact = 217,
        
        /**
         * The PayCustomerAccountExact member.
         */
        PayCustomerAccountExact = 218,
        
        /**
         * The PayGiftCardExact member.
         */
        PayGiftCardExact = 219,
        
        /**
         * The PayLoyaltyCardExact member.
         */
        PayLoyaltyCardExact = 220,
        
        /**
         * The LineDiscountAmount member.
         */
        LineDiscountAmount = 300,
        
        /**
         * The LineDiscountPercent member.
         */
        LineDiscountPercent = 301,
        
        /**
         * The TotalDiscountAmount member.
         */
        TotalDiscountAmount = 302,
        
        /**
         * The TotalDiscountPercent member.
         */
        TotalDiscountPercent = 303,
        
        /**
         * The DiscountCodeBarcode member.
         */
        DiscountCodeBarcode = 304,
        
        /**
         * The CalculateFullDiscounts member.
         */
        CalculateFullDiscounts = 310,
        
        /**
         * The RemovePeriodicDiscountsFromTransaction member.
         */
        RemovePeriodicDiscountsFromTransaction = 311,
        
        /**
         * The RecalculatePeriodicDiscounts member.
         */
        RecalculatePeriodicDiscounts = 312,
        
        /**
         * The PopupMenu member.
         */
        PopupMenu = 400,
        
        /**
         * The Submenu member.
         */
        Submenu = 401,
        
        /**
         * The VoidTransaction member.
         */
        VoidTransaction = 500,
        
        /**
         * The TransactionComment member.
         */
        TransactionComment = 501,
        
        /**
         * The SalesPerson member.
         */
        SalesPerson = 502,
        
        /**
         * The SuspendTransaction member.
         */
        SuspendTransaction = 503,
        
        /**
         * The RecallTransaction member.
         */
        RecallTransaction = 504,
        
        /**
         * The RecallUnconcludedTransaction member.
         */
        RecallUnconcludedTransaction = 505,
        
        /**
         * The CardSwipe member.
         */
        CardSwipe = 506,
        
        /**
         * The PharmacyPrescriptionAdd member.
         */
        PharmacyPrescriptionAdd = 507,
        
        /**
         * The PharmacyPrescriptionCancel member.
         */
        PharmacyPrescriptionCancel = 508,
        
        /**
         * The PharmacyPrescriptionPaid member.
         */
        PharmacyPrescriptionPaid = 509,
        
        /**
         * The PharmacyPrescriptions member.
         */
        PharmacyPrescriptions = 510,
        
        /**
         * The IssueCreditMemo member.
         */
        IssueCreditMemo = 511,
        
        /**
         * The IssueGiftCertificate member.
         */
        IssueGiftCertificate = 512,
        
        /**
         * The DisplayTotal member.
         */
        DisplayTotal = 513,
        
        /**
         * The RecallSalesOrder member.
         */
        RecallSalesOrder = 515,
        
        /**
         * The SalesInvoice member.
         */
        SalesInvoice = 516,
        
        /**
         * The IncomeAccounts member.
         */
        IncomeAccounts = 517,
        
        /**
         * The ExpenseAccounts member.
         */
        ExpenseAccounts = 518,
        
        /**
         * The AddToGiftCard member.
         */
        AddToGiftCard = 519,
        
        /**
         * The GiftCardBalance member.
         */
        GiftCardBalance = 520,
        
        /**
         * The LoyaltyCardPointsBalance member.
         */
        LoyaltyCardPointsBalance = 521,
        
        /**
         * The ForceCompleteTransaction member.
         */
        ForceCompleteTransaction = 522,
        
        /**
         * The CashChangerRegisterAmount member.
         */
        CashChangerRegisterAmount = 550,
        
        /**
         * The CashChangerReset member.
         */
        CashChangerReset = 551,
        
        /**
         * The CashChangerRegret member.
         */
        CashChangerRegret = 552,
        
        /**
         * The CashChangerExit member.
         */
        CashChangerExit = 553,
        
        /**
         * The CashChangerChange member.
         */
        CashChangerChange = 554,
        
        /**
         * The CashChangerLogOn member.
         */
        CashChangerLogOn = 555,
        
        /**
         * The CashChangerInit member.
         */
        CashChangerInit = 556,
        
        /**
         * The SetCustomer member.
         */
        SetCustomer = 600,
        
        /**
         * The CustomerSearch member.
         */
        CustomerSearch = 602,
        
        /**
         * The CustomerClear member.
         */
        CustomerClear = 603,
        
        /**
         * The CustomerCard member.
         */
        CustomerCard = 604,
        
        /**
         * The CustomerTransactions member.
         */
        CustomerTransactions = 609,
        
        /**
         * The CustomerTransactionsReport member.
         */
        CustomerTransactionsReport = 610,
        
        /**
         * The CustomerBalanceReport member.
         */
        CustomerBalanceReport = 611,
        
        /**
         * The CustomerAdd member.
         */
        CustomerAdd = 612,
        
        /**
         * The CustomerBarcode member.
         */
        CustomerBarcode = 613,
        
        /**
         * The EditCustomerOrder member.
         */
        EditCustomerOrder = 614,
        
        /**
         * The EditQuotation member.
         */
        EditQuotation = 615,
        
        /**
         * The CreateCustomerOrder member.
         */
        CreateCustomerOrder = 620,
        
        /**
         * The CreateQuotation member.
         */
        CreateQuotation = 621,
        
        /**
         * The Search member.
         */
        Search = 622,
        
        /**
         * The CustomerEdit member.
         */
        CustomerEdit = 623,
        
        /**
         * The LoyaltyIssueCard member.
         */
        LoyaltyIssueCard = 625,
        
        /**
         * The RecalculateCustomerOrder member.
         */
        RecalculateCustomerOrder = 627,
        
        /**
         * The ShipSelectedProducts member.
         */
        ShipSelectedProducts = 629,
        
        /**
         * The ShipAllProducts member.
         */
        ShipAllProducts = 630,
        
        /**
         * The PickupSelectedProducts member.
         */
        PickupSelectedProducts = 631,
        
        /**
         * The PickupAllProducts member.
         */
        PickupAllProducts = 632,
        
        /**
         * The SetQuotationExpirationDate member.
         */
        SetQuotationExpirationDate = 633,
        
        /**
         * The PaymentsHistory member.
         */
        PaymentsHistory = 634,
        
        /**
         * The ReturnChargesOverride member.
         */
        ReturnChargesOverride = 635,
        
        /**
         * The CreateRetailTransaction member.
         */
        CreateRetailTransaction = 636,
        
        /**
         * The SetCommissionSalesGroupOnTransaction member.
         */
        SetCommissionSalesGroupOnTransaction = 637,
        
        /**
         * The SetCommissionSalesGroupOnLine member.
         */
        SetCommissionSalesGroupOnLine = 638,
        
        /**
         * The ClearCommissionSalesGroupOnTransaction member.
         */
        ClearCommissionSalesGroupOnTransaction = 639,
        
        /**
         * The ClearCommissionSalesGroupOnLine member.
         */
        ClearCommissionSalesGroupOnLine = 640,
        
        /**
         * The CarryoutSelectedProducts member.
         */
        CarryoutSelectedProducts = 641,
        
        /**
         * The CarryoutAllProducts member.
         */
        CarryoutAllProducts = 642,
        
        /**
         * The AddCoupons member.
         */
        AddCoupons = 643,
        
        /**
         * The RemoveCoupons member.
         */
        RemoveCoupons = 644,
        
        /**
         * The ViewAllDiscounts member.
         */
        ViewAllDiscounts = 645,
        
        /**
         * The ViewAvailableDiscounts member.
         */
        ViewAvailableDiscounts = 646,
        
        /**
         * The ChangeDeliveryMode member.
         */
        ChangeDeliveryMode = 647,
        
        /**
         * The CancelOrder member.
         */
        CancelOrder = 648,
        
        /**
         * The CreatePickingList member.
         */
        CreatePickingList = 649,
        
        /**
         * The PrintPackingSlip member.
         */
        PrintPackingSlip = 650,
        
        /**
         * The EditFulfillmentLine member.
         */
        EditFulfillmentLine = 651,
        
        /**
         * The AcceptFulfillmentLine member.
         */
        AcceptFulfillmentLine = 652,
        
        /**
         * The RejectFulfillmentLine member.
         */
        RejectFulfillmentLine = 653,
        
        /**
         * The PickFulfillmentLine member.
         */
        PickFulfillmentLine = 654,
        
        /**
         * The PackFulfillmentLine member.
         */
        PackFulfillmentLine = 655,
        
        /**
         * The ShipFulfillmentLine member.
         */
        ShipFulfillmentLine = 656,
        
        /**
         * The PickupFulfillmentLine member.
         */
        PickupFulfillmentLine = 657,
        
        /**
         * The ChangePickupLines member.
         */
        ChangePickupLines = 658,
        
        /**
         * The LogOn member.
         */
        LogOn = 700,
        
        /**
         * The LogOff member.
         */
        LogOff = 701,
        
        /**
         * The ChangeUser member.
         */
        ChangeUser = 702,
        
        /**
         * The LockTerminal member.
         */
        LockTerminal = 703,
        
        /**
         * The LogOffForce member.
         */
        LogOffForce = 704,
        
        /**
         * The EmployeeCard member.
         */
        EmployeeCard = 705,
        
        /**
         * The EmployeeBarcode member.
         */
        EmployeeBarcode = 706,
        
        /**
         * The ActivateDevice member.
         */
        ActivateDevice = 707,
        
        /**
         * The DeactivateDevice member.
         */
        DeactivateDevice = 708,
        
        /**
         * The ChangeHardwareStation member.
         */
        ChangeHardwareStation = 709,
        
        /**
         * The PairHardwareStation member.
         */
        PairHardwareStation = 710,
        
        /**
         * The MassActivateDevice member.
         */
        MassActivateDevice = 711,
        
        /**
         * The ViewMyClientBook member.
         */
        ViewMyClientBook = 712,
        
        /**
         * The ViewStoreClientBooks member.
         */
        ViewStoreClientBooks = 713,
        
        /**
         * The AddCustomerToClientBook member.
         */
        AddCustomerToClientBook = 714,
        
        /**
         * The RemoveCustomersFromClientBook member.
         */
        RemoveCustomersFromClientBook = 715,
        
        /**
         * The ReassignClientBookCustomers member.
         */
        ReassignClientBookCustomers = 716,
        
        /**
         * The HealthCheck member.
         */
        HealthCheck = 717,
        
        /**
         * The RequestForAssistance member.
         */
        RequestForAssistance = 718,
        
        /**
         * The NegativeAdjustment member.
         */
        NegativeAdjustment = 800,
        
        /**
         * The InventoryLookup member.
         */
        InventoryLookup = 801,
        
        /**
         * The StockCount member.
         */
        StockCount = 802,
        
        /**
         * The PickingAndReceiving member.
         */
        PickingAndReceiving = 803,
        
        /**
         * The InboundInventory member.
         */
        InboundInventory = 804,
        
        /**
         * The OutboundInventory member.
         */
        OutboundInventory = 805,
        
        /**
         * The InventoryAdjustment member.
         */
        InventoryAdjustment = 806,
        
        /**
         * The InventoryMovement member.
         */
        InventoryMovement = 807,
        
        /**
         * The PostStockCounting member.
         */
        PostStockCounting = 808,
        
        /**
         * The CreatePurchaseOrder member.
         */
        CreatePurchaseOrder = 809,
        
        /**
         * The ConfirmPurchaseOrder member.
         */
        ConfirmPurchaseOrder = 810,
        
        /**
         * The CreateTransferOrder member.
         */
        CreateTransferOrder = 811,
        
        /**
         * The ApplicationExit member.
         */
        ApplicationExit = 900,
        
        /**
         * The PrintTaxFree member.
         */
        PrintTaxFree = 906,
        
        /**
         * The PrintPreviousSlip member.
         */
        PrintPreviousSlip = 907,
        
        /**
         * The PrintPreviousInvoice member.
         */
        PrintPreviousInvoice = 908,
        
        /**
         * The UploadPrinterLogo member.
         */
        UploadPrinterLogo = 909,
        
        /**
         * The RestartComputer member.
         */
        RestartComputer = 910,
        
        /**
         * The ShutdownComputer member.
         */
        ShutdownComputer = 911,
        
        /**
         * The DesignModeEnable member.
         */
        DesignModeEnable = 912,
        
        /**
         * The DesignModeDisable member.
         */
        DesignModeDisable = 913,
        
        /**
         * The MinimizePOSWindow member.
         */
        MinimizePOSWindow = 914,
        
        /**
         * The BlankOperation member.
         */
        BlankOperation = 915,
        
        /**
         * The WindowsWorkflowOperation member.
         */
        WindowsWorkflowOperation = 916,
        
        /**
         * The DatabaseConnectionStatus member.
         */
        DatabaseConnectionStatus = 917,
        
        /**
         * The ShowBlindClosedShifts member.
         */
        ShowBlindClosedShifts = 918,
        
        /**
         * The ExtendedLogOn member.
         */
        ExtendedLogOn = 919,
        
        /**
         * The TimeRegistration member.
         */
        TimeRegistration = 920,
        
        /**
         * The ViewTimeClockEntries member.
         */
        ViewTimeClockEntries = 921,
        
        /**
         * The ViewProductDetails member.
         */
        ViewProductDetails = 922,
        
        /**
         * The ViewOrderFulfillmentLines member.
         */
        ViewOrderFulfillmentLines = 928,
        
        /**
         * The OpenDrawer member.
         */
        OpenDrawer = 1000,
        
        /**
         * The ViewReport member.
         */
        ViewReport = 1003,
        
        /**
         * The TenderDeclaration member.
         */
        TenderDeclaration = 1052,
        
        /**
         * The BlindCloseShift member.
         */
        BlindCloseShift = 1053,
        
        /**
         * The SuspendShift member.
         */
        SuspendShift = 1054,
        
        /**
         * The CloseShift member.
         */
        CloseShift = 1055,
        
        /**
         * The PrintX member.
         */
        PrintX = 1056,
        
        /**
         * The PrintZ member.
         */
        PrintZ = 1057,
        
        /**
         * The PrintFiscalX member.
         */
        PrintFiscalX = 1058,
        
        /**
         * The PrintFiscalZ member.
         */
        PrintFiscalZ = 1059,
        
        /**
         * The CustomerAccountDeposit member.
         */
        CustomerAccountDeposit = 1100,
        
        /**
         * The DeclareStartAmount member.
         */
        DeclareStartAmount = 1200,
        
        /**
         * The FloatEntry member.
         */
        FloatEntry = 1201,
        
        /**
         * The TenderRemoval member.
         */
        TenderRemoval = 1210,
        
        /**
         * The SafeDrop member.
         */
        SafeDrop = 1211,
        
        /**
         * The BankDrop member.
         */
        BankDrop = 1212,
        
        /**
         * The ShippingAddressSearch member.
         */
        ShippingAddressSearch = 1213,
        
        /**
         * The ShippingAddressAdd member.
         */
        ShippingAddressAdd = 1214,
        
        /**
         * The ChangePassword member.
         */
        ChangePassword = 1215,
        
        /**
         * The ResetPassword member.
         */
        ResetPassword = 1216,
        
        /**
         * The KitDisassembly member.
         */
        KitDisassembly = 1217,
        
        /**
         * The ForceUnlockPeripheral member.
         */
        ForceUnlockPeripheral = 1218,
        
        /**
         * The OpenURL member.
         */
        OpenURL = 1219,
        
        /**
         * The ManageSafe member.
         */
        ManageSafe = 1220,
        
        /**
         * The VoidSuspendedTransactions member.
         */
        VoidSuspendedTransactions = 1221,
        
        /**
         * The SkipFiscalRegistration member.
         */
        SkipFiscalRegistration = 1300,
        
        /**
         * The MarkFiscalEventRegistered member.
         */
        MarkFiscalEventRegistered = 1301,
        
        /**
         * The CompleteFiscalRegistrationProcess member.
         */
        CompleteFiscalRegistrationProcess = 1302,
        
        /**
         * The SkipHealthCheckError member.
         */
        SkipHealthCheckError = 1303,
        
        /**
         * The PostponeFiscalRegistration member.
         */
        PostponeFiscalRegistration = 1304,
        
        /**
         * The ManageChecklistsAndTasks member.
         */
        ManageChecklistsAndTasks = 1400,
        
        /**
         * The Invalid member.
         */
        Invalid = 65535
    }
    
    /**
     * RefinerType enum type.
     */
    export enum RefinerType {
      
        /**
         * The SingleSelect member.
         */
        SingleSelect = 0,
        
        /**
         * The MultiSelect member.
         */
        MultiSelect = 1,
        
        /**
         * The FreeText member.
         */
        FreeText = 2
    }
    
    /**
     * DisplayTemplate enum type.
     */
    export enum DisplayTemplate {
      
        /**
         * The List member.
         */
        List = 0,
        
        /**
         * The Slider member.
         */
        Slider = 1,
        
        /**
         * The SliderWithBars member.
         */
        SliderWithBars = 2,
        
        /**
         * The Range member.
         */
        Range = 3,
        
        /**
         * The TextBox member.
         */
        TextBox = 4
    }
    
    /**
     * ClientBookRefinerSource enum type.
     */
    export enum ClientBookRefinerSource {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Attribute member.
         */
        Attribute = 1,
        
        /**
         * The CustomerSearchKeyword member.
         */
        CustomerSearchKeyword = 2,
        
        /**
         * The StaffId member.
         */
        StaffId = 3
    }
    
    /**
     * ProductRefinerSource enum type.
     */
    export enum ProductRefinerSource {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Attribute member.
         */
        Attribute = 1,
        
        /**
         * The Category member.
         */
        Category = 2,
        
        /**
         * The Price member.
         */
        Price = 3,
        
        /**
         * The Rating member.
         */
        Rating = 4
    }
    
    /**
     * LoyaltyCardTenderType enum type.
     */
    export enum LoyaltyCardTenderType {
      
        /**
         * The AsCardTender member.
         */
        AsCardTender = 0,
        
        /**
         * The AsContactTender member.
         */
        AsContactTender = 1,
        
        /**
         * The NoTender member.
         */
        NoTender = 2,
        
        /**
         * The Blocked member.
         */
        Blocked = 3
    }
    
    /**
     * ReleasedProductType enum type.
     */
    export enum ReleasedProductType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Item member.
         */
        Item = 1,
        
        /**
         * The Service member.
         */
        Service = 2
    }
    
    /**
     * RetailChannelType enum type.
     */
    export enum RetailChannelType {
      
        /**
         * The RetailStore member.
         */
        RetailStore = 0,
        
        /**
         * The OnlineStore member.
         */
        OnlineStore = 1,
        
        /**
         * The OnlineMarketplace member.
         */
        OnlineMarketplace = 2,
        
        /**
         * The SharePointOnlineStore member.
         */
        SharePointOnlineStore = 3,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * LogOnConfiguration enum type.
     */
    export enum LogOnConfiguration {
      
        /**
         * The LocalDatabase member.
         */
        LocalDatabase = 0,
        
        /**
         * The RealTimeService member.
         */
        RealTimeService = 1
    }
    
    /**
     * TransactionServiceAuthenticationType enum type.
     */
    export enum TransactionServiceAuthenticationType {
      
        /**
         * The CertificateAuthentication member.
         */
        CertificateAuthentication = 0,
        
        /**
         * The ServiceToServiceAuthentication member.
         */
        ServiceToServiceAuthentication = 1,
        
        /**
         * The AdfsServiceToServiceClientSecretAuthentication member.
         */
        AdfsServiceToServiceClientSecretAuthentication = 2,
        
        /**
         * The ServiceToServiceClientCertificateAuthentication member.
         */
        ServiceToServiceClientCertificateAuthentication = 3,
        
        /**
         * The AdfsServiceToServiceClientCertificateAuthentication member.
         */
        AdfsServiceToServiceClientCertificateAuthentication = 4
    }
    
    /**
     * IncludePersonalDataInGuestOrderLookupPolicy enum type.
     */
    export enum IncludePersonalDataInGuestOrderLookupPolicy {
      
        /**
         * The Never member.
         */
        Never = 0,
        
        /**
         * The GuestOrdersOnly member.
         */
        GuestOrdersOnly = 1,
        
        /**
         * The AllOrders member.
         */
        AllOrders = 2
    }
    
    /**
     * RetailAddressBookType enum type.
     */
    export enum RetailAddressBookType {
      
        /**
         * The Customer member.
         */
        Customer = 0,
        
        /**
         * The Employee member.
         */
        Employee = 1,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * InventAvailabilityCalculationMode enum type.
     */
    export enum InventAvailabilityCalculationMode {
      
        /**
         * The RealTimeService member.
         */
        RealTimeService = 0,
        
        /**
         * The Channel member.
         */
        Channel = 1
    }
    
    /**
     * InventoryAvailabilityClientDisplayMode enum type.
     */
    export enum InventoryAvailabilityClientDisplayMode {
      
        /**
         * The Raw member.
         */
        Raw = 0,
        
        /**
         * The Buffered member.
         */
        Buffered = 1,
        
        /**
         * The None member.
         */
        None = 2,
        
        /**
         * The Unknown member.
         */
        Unknown = -1
    }
    
    /**
     * EmployeeActivityType enum type.
     */
    export enum EmployeeActivityType {
      
        /**
         * The ClockIn member.
         */
        ClockIn = 0,
        
        /**
         * The JobStop member.
         */
        JobStop = 1,
        
        /**
         * The JobStart member.
         */
        JobStart = 2,
        
        /**
         * The TeamStop member.
         */
        TeamStop = 3,
        
        /**
         * The TeamStart member.
         */
        TeamStart = 4,
        
        /**
         * The BreakFlowStart member.
         */
        BreakFlowStart = 5,
        
        /**
         * The BreakCancelOne member.
         */
        BreakCancelOne = 6,
        
        /**
         * The BreakCancelAll member.
         */
        BreakCancelAll = 7,
        
        /**
         * The BreakFlowStop member.
         */
        BreakFlowStop = 8,
        
        /**
         * The FinishQuantity member.
         */
        FinishQuantity = 9,
        
        /**
         * The ClockOut member.
         */
        ClockOut = 10,
        
        /**
         * The EventCode member.
         */
        EventCode = 11,
        
        /**
         * The BreakFromWork member.
         */
        BreakFromWork = 12,
        
        /**
         * The BreakForLunch member.
         */
        BreakForLunch = 13,
        
        /**
         * The Logbook member.
         */
        Logbook = 14,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * DeliveryPreferenceType enum type.
     */
    export enum DeliveryPreferenceType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The ShipToAddress member.
         */
        ShipToAddress = 1,
        
        /**
         * The PickupFromStore member.
         */
        PickupFromStore = 2,
        
        /**
         * The ElectronicDelivery member.
         */
        ElectronicDelivery = 3,
        
        /**
         * The DeliverItemsIndividually member.
         */
        DeliverItemsIndividually = 4
    }
    
    /**
     * LayoutType enum type.
     */
    export enum LayoutType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The ModernPosCompact member.
         */
        ModernPosCompact = 1,
        
        /**
         * The ModernPosFull member.
         */
        ModernPosFull = 2,
        
        /**
         * The Epos member.
         */
        Epos = 3
    }
    
    /**
     * SalesInvoiceType enum type.
     */
    export enum SalesInvoiceType {
      
        /**
         * The Journal member.
         */
        Journal = 0,
        
        /**
         * The DEL_Quotation member.
         */
        DEL_Quotation = 1,
        
        /**
         * The Subscription member.
         */
        Subscription = 2,
        
        /**
         * The Sales member.
         */
        Sales = 3,
        
        /**
         * The ReturnItem member.
         */
        ReturnItem = 4,
        
        /**
         * The DEL_Blanket member.
         */
        DEL_Blanket = 5,
        
        /**
         * The ItemReq member.
         */
        ItemReq = 6
    }
    
    /**
     * InvoiceType enum type.
     */
    export enum InvoiceType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The SalesOrderInvoice member.
         */
        SalesOrderInvoice = 1,
        
        /**
         * The FreeTextInvoice member.
         */
        FreeTextInvoice = 2,
        
        /**
         * The ProjectInvoice member.
         */
        ProjectInvoice = 3,
        
        /**
         * The CreditNoteInvoice member.
         */
        CreditNoteInvoice = 4,
        
        /**
         * The FreeTextCreditNoteInvoice member.
         */
        FreeTextCreditNoteInvoice = 5,
        
        /**
         * The ProjectCreditNoteInvoice member.
         */
        ProjectCreditNoteInvoice = 6
    }
    
    /**
     * InvoicePaidStatus enum type.
     */
    export enum InvoicePaidStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Unpaid member.
         */
        Unpaid = 1,
        
        /**
         * The PartiallyPaid member.
         */
        PartiallyPaid = 2,
        
        /**
         * The Paid member.
         */
        Paid = 3
    }
    
    /**
     * TaxOverrideType enum type.
     */
    export enum TaxOverrideType {
      
        /**
         * The ItemSalesTaxGroup member.
         */
        ItemSalesTaxGroup = 0,
        
        /**
         * The SalesTaxGroup member.
         */
        SalesTaxGroup = 1,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * TaxOverrideBy enum type.
     */
    export enum TaxOverrideBy {
      
        /**
         * The Line member.
         */
        Line = 0,
        
        /**
         * The Cart member.
         */
        Cart = 1,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * ReasonCodeInputRequiredType enum type.
     */
    export enum ReasonCodeInputRequiredType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Always member.
         */
        Always = 1,
        
        /**
         * The Positive member.
         */
        Positive = 2,
        
        /**
         * The Negative member.
         */
        Negative = 3
    }
    
    /**
     * RecordingValueType enum type.
     */
    export enum RecordingValueType {
      
        /**
         * The Preferred member.
         */
        Preferred = 0,
        
        /**
         * The Example member.
         */
        Example = 1
    }
    
    /**
     * UserActionType enum type.
     */
    export enum UserActionType {
      
        /**
         * The Input member.
         */
        Input = 1,
        
        /**
         * The Output member.
         */
        Output = 16,
        
        /**
         * The Validation member.
         */
        Validation = 256
    }
    
    /**
     * ArtifactType enum type.
     */
    export enum ArtifactType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Ax7Bpm member.
         */
        Ax7Bpm = 1,
        
        /**
         * The Visio member.
         */
        Visio = 2,
        
        /**
         * The TaskGuide member.
         */
        TaskGuide = 3,
        
        /**
         * The Ax6Bpm member.
         */
        Ax6Bpm = 4,
        
        /**
         * The TaskGuideResources member.
         */
        TaskGuideResources = 5,
        
        /**
         * The TaskXml member.
         */
        TaskXml = 6,
        
        /**
         * The VideoWma member.
         */
        VideoWma = 7,
        
        /**
         * The ProcessXml member.
         */
        ProcessXml = 8,
        
        /**
         * The Trace member.
         */
        Trace = 9,
        
        /**
         * The RapidStartXml member.
         */
        RapidStartXml = 10,
        
        /**
         * The UserDrawing member.
         */
        UserDrawing = 100
    }
    
    /**
     * FrameworkAccess enum type.
     */
    export enum FrameworkAccess {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Global member.
         */
        Global = 1,
        
        /**
         * The Corporate member.
         */
        Corporate = 2,
        
        /**
         * The Private member.
         */
        Private = 3,
        
        /**
         * The BoxPackage member.
         */
        BoxPackage = 4
    }
    
    /**
     * MetadataControl enum type.
     */
    export enum MetadataControl {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The SingleValue member.
         */
        SingleValue = 1,
        
        /**
         * The MultiValue member.
         */
        MultiValue = 2,
        
        /**
         * The Tags member.
         */
        Tags = 3,
        
        /**
         * The Links member.
         */
        Links = 4,
        
        /**
         * The ComboBox member.
         */
        ComboBox = 5,
        
        /**
         * The MultiSelect member.
         */
        MultiSelect = 6
    }
    
    /**
     * FiscalIntegrationRegistrationStatus enum type.
     */
    export enum FiscalIntegrationRegistrationStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Completed member.
         */
        Completed = 1,
        
        /**
         * The Skipped member.
         */
        Skipped = 2,
        
        /**
         * The MarkedAsRegistered member.
         */
        MarkedAsRegistered = 3,
        
        /**
         * The AutoSkipped member.
         */
        AutoSkipped = 4,
        
        /**
         * The Postponed member.
         */
        Postponed = 5
    }
    
    /**
     * CustomerOrderOperation enum type.
     */
    export enum CustomerOrderOperation {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Edit member.
         */
        Edit = 1,
        
        /**
         * The Cancel member.
         */
        Cancel = 2,
        
        /**
         * The PickUpFromStore member.
         */
        PickUpFromStore = 3,
        
        /**
         * The CreatePickingList member.
         */
        CreatePickingList = 4,
        
        /**
         * The CreatePackingSlip member.
         */
        CreatePackingSlip = 5,
        
        /**
         * The PrintPackingSlip member.
         */
        PrintPackingSlip = 6,
        
        /**
         * The Return member.
         */
        Return = 7,
        
        /**
         * The RejectFulfillmentLine member.
         */
        RejectFulfillmentLine = 8,
        
        /**
         * The AcceptFulfillmentLine member.
         */
        AcceptFulfillmentLine = 9,
        
        /**
         * The PackFulfillmentLine member.
         */
        PackFulfillmentLine = 10,
        
        /**
         * The ShipFulfillmentLine member.
         */
        ShipFulfillmentLine = 11,
        
        /**
         * The PickFulfillmentLine member.
         */
        PickFulfillmentLine = 12
    }
    
    /**
     * BusinessPartnerOperationType enum type.
     */
    export enum BusinessPartnerOperationType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The CreateProspect member.
         */
        CreateProspect = 1,
        
        /**
         * The AddUser member.
         */
        AddUser = 2,
        
        /**
         * The DeleteUser member.
         */
        DeleteUser = 3,
        
        /**
         * The EditUser member.
         */
        EditUser = 4,
        
        /**
         * The AccountStatement member.
         */
        AccountStatement = 5,
        
        /**
         * The InvoiceRequest member.
         */
        InvoiceRequest = 6,
        
        /**
         * The PromoteBusinessPartner member.
         */
        PromoteBusinessPartner = 7
    }
    
    /**
     * BusinessPartnerOperationStatus enum type.
     */
    export enum BusinessPartnerOperationStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Processed member.
         */
        Processed = 1,
        
        /**
         * The Error member.
         */
        Error = 2
    }
    
    /**
     * NatureOfAssessee enum type.
     */
    export enum NatureOfAssessee {
      
        /**
         * The Company member.
         */
        Company = 0,
        
        /**
         * The Huf member.
         */
        Huf = 1,
        
        /**
         * The Firm member.
         */
        Firm = 2,
        
        /**
         * The Individual member.
         */
        Individual = 3,
        
        /**
         * The Aop member.
         */
        Aop = 4,
        
        /**
         * The Boi member.
         */
        Boi = 5,
        
        /**
         * The LocalAuthority member.
         */
        LocalAuthority = 6,
        
        /**
         * The Others member.
         */
        Others = 7
    }
    
    /**
     * CartType enum type.
     */
    export enum CartType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Shopping member.
         */
        Shopping = 1,
        
        /**
         * The Checkout member.
         */
        Checkout = 2,
        
        /**
         * The CustomerOrder member.
         */
        CustomerOrder = 3,
        
        /**
         * The IncomeExpense member.
         */
        IncomeExpense = 4,
        
        /**
         * The AccountDeposit member.
         */
        AccountDeposit = 5
    }
    
    /**
     * CartStatus enum type.
     */
    export enum CartStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Created member.
         */
        Created = 1,
        
        /**
         * The Suspended member.
         */
        Suspended = 2,
        
        /**
         * The Voided member.
         */
        Voided = 3
    }
    
    /**
     * PeriodicDiscountsCalculateScope enum type.
     */
    export enum PeriodicDiscountsCalculateScope {
      
        /**
         * The All member.
         */
        All = 0,
        
        /**
         * The None member.
         */
        None = 1,
        
        /**
         * The CouponDiscountsOnly member.
         */
        CouponDiscountsOnly = 2
    }
    
    /**
     * TaxCalculationType enum type.
     */
    export enum TaxCalculationType {
      
        /**
         * The Regular member.
         */
        Regular = 0,
        
        /**
         * The GTE member.
         */
        GTE = 1
    }
    
    /**
     * NoteRestriction enum type.
     */
    export enum NoteRestriction {
      
        /**
         * The Internal member.
         */
        Internal = 0,
        
        /**
         * The External member.
         */
        External = 1
    }
    
    /**
     * CustomerType enum type.
     */
    export enum CustomerType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Person member.
         */
        Person = 1,
        
        /**
         * The Organization member.
         */
        Organization = 2
    }
    
    /**
     * ContactInfoType enum type.
     */
    export enum ContactInfoType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Phone member.
         */
        Phone = 1,
        
        /**
         * The Email member.
         */
        Email = 2,
        
        /**
         * The Url member.
         */
        Url = 3,
        
        /**
         * The Telex member.
         */
        Telex = 4,
        
        /**
         * The Fax member.
         */
        Fax = 5
    }
    
    /**
     * ChecklistStatus enum type.
     */
    export enum ChecklistStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The NotStarted member.
         */
        NotStarted = 1,
        
        /**
         * The InProgress member.
         */
        InProgress = 2,
        
        /**
         * The Completed member.
         */
        Completed = 3
    }
    
    /**
     * ChecklistTaskDeepLinkType enum type.
     */
    export enum ChecklistTaskDeepLinkType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Display member.
         */
        Display = 1,
        
        /**
         * The Output member.
         */
        Output = 2,
        
        /**
         * The Action member.
         */
        Action = 3,
        
        /**
         * The Url member.
         */
        Url = 4,
        
        /**
         * The PosOperation member.
         */
        PosOperation = 5,
        
        /**
         * The CustomerAccount member.
         */
        CustomerAccount = 6,
        
        /**
         * The PosOperationWithParameters member.
         */
        PosOperationWithParameters = 7
    }
    
    /**
     * ChecklistTaskStatus enum type.
     */
    export enum ChecklistTaskStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The NotStarted member.
         */
        NotStarted = 1,
        
        /**
         * The InProgress member.
         */
        InProgress = 2,
        
        /**
         * The Completed member.
         */
        Completed = 3
    }
    
    /**
     * DocumentStatus enum type.
     */
    export enum DocumentStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Quotation member.
         */
        Quotation = 1,
        
        /**
         * The PurchaseOrder member.
         */
        PurchaseOrder = 2,
        
        /**
         * The Confirmation member.
         */
        Confirmation = 3,
        
        /**
         * The PickingList member.
         */
        PickingList = 4,
        
        /**
         * The PackingSlip member.
         */
        PackingSlip = 5,
        
        /**
         * The ReceiptsList member.
         */
        ReceiptsList = 6,
        
        /**
         * The Invoice member.
         */
        Invoice = 7,
        
        /**
         * The ApproveJournal member.
         */
        ApproveJournal = 8,
        
        /**
         * The ProjectInvoice member.
         */
        ProjectInvoice = 9,
        
        /**
         * The ProjectPackingSlip member.
         */
        ProjectPackingSlip = 10,
        
        /**
         * The CRMQuotation member.
         */
        CRMQuotation = 11,
        
        /**
         * The Lost member.
         */
        Lost = 12,
        
        /**
         * The Canceled member.
         */
        Canceled = 13,
        
        /**
         * The FreeTextInvoice member.
         */
        FreeTextInvoice = 14,
        
        /**
         * The RFQ member.
         */
        RFQ = 15,
        
        /**
         * The RFQAccept member.
         */
        RFQAccept = 16,
        
        /**
         * The RFQReject member.
         */
        RFQReject = 17,
        
        /**
         * The PurchaseRequest member.
         */
        PurchaseRequest = 18,
        
        /**
         * The RFQResend member.
         */
        RFQResend = 19
    }
    
    /**
     * CustomerOrderType enum type.
     */
    export enum CustomerOrderType {
      
        /**
         * The SalesOrder member.
         */
        SalesOrder = 0,
        
        /**
         * The Quote member.
         */
        Quote = 1
    }
    
    /**
     * LineDiscountCalculationType enum type.
     */
    export enum LineDiscountCalculationType {
      
        /**
         * The Line member.
         */
        Line = 0,
        
        /**
         * The Multiline member.
         */
        Multiline = 1,
        
        /**
         * The MaxLineMultiline member.
         */
        MaxLineMultiline = 2,
        
        /**
         * The MinLineMultiline member.
         */
        MinLineMultiline = 3,
        
        /**
         * The LinePlusMultiline member.
         */
        LinePlusMultiline = 4,
        
        /**
         * The LineMultiplyMultiline member.
         */
        LineMultiplyMultiline = 5
    }
    
    /**
     * ShiftStatus enum type.
     */
    export enum ShiftStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Open member.
         */
        Open = 1,
        
        /**
         * The Closed member.
         */
        Closed = 2,
        
        /**
         * The BlindClosed member.
         */
        BlindClosed = 3,
        
        /**
         * The Suspended member.
         */
        Suspended = 4,
        
        /**
         * The Invalid member.
         */
        Invalid = 5
    }
    
    /**
     * TaxRegistrationType enum type.
     */
    export enum TaxRegistrationType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The INN member.
         */
        INN = 1,
        
        /**
         * The KPP member.
         */
        KPP = 2,
        
        /**
         * The OKPO member.
         */
        OKPO = 3,
        
        /**
         * The OKDP member.
         */
        OKDP = 4,
        
        /**
         * The OKATO member.
         */
        OKATO = 5,
        
        /**
         * The OGRN member.
         */
        OGRN = 6,
        
        /**
         * The SNILS member.
         */
        SNILS = 7,
        
        /**
         * The CIFTS member.
         */
        CIFTS = 8,
        
        /**
         * The UID member.
         */
        UID = 9,
        
        /**
         * The TaxId member.
         */
        TaxId = 10,
        
        /**
         * The BranchId member.
         */
        BranchId = 11,
        
        /**
         * The CommercialRegisterCZ member.
         */
        CommercialRegisterCZ = 12,
        
        /**
         * The CustomsCustomerId member.
         */
        CustomsCustomerId = 14,
        
        /**
         * The Passport member.
         */
        Passport = 15,
        
        /**
         * The OfficialIdDoc member.
         */
        OfficialIdDoc = 16,
        
        /**
         * The ResidenceCertificate member.
         */
        ResidenceCertificate = 17,
        
        /**
         * The OtherIdDoc member.
         */
        OtherIdDoc = 18,
        
        /**
         * The NotCensused member.
         */
        NotCensused = 19,
        
        /**
         * The BusinessPremiseId member.
         */
        BusinessPremiseId = 20,
        
        /**
         * The LotteryCode member.
         */
        LotteryCode = 21
    }
    
    /**
     * CommerceListType enum type.
     */
    export enum CommerceListType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The WishList member.
         */
        WishList = 1
    }
    
    /**
     * ProductListType enum type.
     */
    export enum ProductListType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The OrderTemplate member.
         */
        OrderTemplate = 1,
        
        /**
         * The QuickOrder member.
         */
        QuickOrder = 2,
        
        /**
         * The WishList member.
         */
        WishList = 3
    }
    
    /**
     * RecommendationType enum type.
     */
    export enum RecommendationType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Editorial member.
         */
        Editorial = 1,
        
        /**
         * The New member.
         */
        New = 2,
        
        /**
         * The Trending member.
         */
        Trending = 3,
        
        /**
         * The Bestselling member.
         */
        Bestselling = 4,
        
        /**
         * The Cart member.
         */
        Cart = 5,
        
        /**
         * The PeopleAlsoBuy member.
         */
        PeopleAlsoBuy = 6,
        
        /**
         * The Picks member.
         */
        Picks = 7,
        
        /**
         * The ShopSimilarLooks member.
         */
        ShopSimilarLooks = 8,
        
        /**
         * The ShopSimilarDescriptions member.
         */
        ShopSimilarDescriptions = 9
    }
    
    /**
     * PurchaseTransferOrderType enum type.
     */
    export enum PurchaseTransferOrderType {
      
        /**
         * The Unknown member.
         */
        Unknown = 0,
        
        /**
         * The PurchaseOrder member.
         */
        PurchaseOrder = 1,
        
        /**
         * The TransferIn member.
         */
        TransferIn = 2,
        
        /**
         * The TransferOut member.
         */
        TransferOut = 3,
        
        /**
         * The TransferOrder member.
         */
        TransferOrder = 4,
        
        /**
         * The PickingList member.
         */
        PickingList = 5
    }
    
    /**
     * BusinessPartnerUserStatus enum type.
     */
    export enum BusinessPartnerUserStatus {
      
        /**
         * The Pending member.
         */
        Pending = 0,
        
        /**
         * The Active member.
         */
        Active = 1,
        
        /**
         * The Removed member.
         */
        Removed = 2
    }
    
    /**
     * InventoryAccuracy enum type.
     */
    export enum InventoryAccuracy {
      
        /**
         * The Default member.
         */
        Default = 0,
        
        /**
         * The Low member.
         */
        Low = 1,
        
        /**
         * The Realtime member.
         */
        Realtime = 2
    }
    
    /**
     * ElectronicAddressType enum type.
     */
    export enum ElectronicAddressType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Email member.
         */
        Email = 1
    }
    
    /**
     * MediaUsageType enum type.
     */
    export enum MediaUsageType {
      
        /**
         * The Primary member.
         */
        Primary = 0,
        
        /**
         * The Additional member.
         */
        Additional = 1,
        
        /**
         * The All member.
         */
        All = 2,
        
        /**
         * The None member.
         */
        None = -1
    }
    
    /**
     * DateValidationType enum type.
     */
    export enum DateValidationType {
      
        /**
         * The Advanced member.
         */
        Advanced = 0,
        
        /**
         * The Standard member.
         */
        Standard = 1
    }
    
    /**
     * AffiliationFilterType enum type.
     */
    export enum AffiliationFilterType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Hidden member.
         */
        Hidden = 1,
        
        /**
         * The NoneHidden member.
         */
        NoneHidden = 2,
        
        /**
         * The All member.
         */
        All = 3
    }
    
    /**
     * DownloadSessionStatus enum type.
     */
    export enum DownloadSessionStatus {
      
        /**
         * The Started member.
         */
        Started = 0,
        
        /**
         * The Available member.
         */
        Available = 1,
        
        /**
         * The Requested member.
         */
        Requested = 2,
        
        /**
         * The Downloaded member.
         */
        Downloaded = 3,
        
        /**
         * The Applied member.
         */
        Applied = 4,
        
        /**
         * The Canceled member.
         */
        Canceled = 5,
        
        /**
         * The CreateFailed member.
         */
        CreateFailed = 6,
        
        /**
         * The DownloadFailed member.
         */
        DownloadFailed = 7,
        
        /**
         * The ApplyFailed member.
         */
        ApplyFailed = 8
    }
    
    /**
     * HardwareStationType enum type.
     */
    export enum HardwareStationType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Shared member.
         */
        Shared = 1,
        
        /**
         * The Dedicated member.
         */
        Dedicated = 2
    }
    
    /**
     * AuditEventUploadType enum type.
     */
    export enum AuditEventUploadType {
      
        /**
         * The Async member.
         */
        Async = 0,
        
        /**
         * The RealTime member.
         */
        RealTime = 1
    }
    
    /**
     * AuditEventType enum type.
     */
    export enum AuditEventType {
      
        /**
         * The Unknown member.
         */
        Unknown = 0,
        
        /**
         * The UserLogOn member.
         */
        UserLogOn = 1,
        
        /**
         * The UserLogOff member.
         */
        UserLogOff = 2,
        
        /**
         * The ManagerOverride member.
         */
        ManagerOverride = 3,
        
        /**
         * The ItemVoid member.
         */
        ItemVoid = 4,
        
        /**
         * The TransactionVoid member.
         */
        TransactionVoid = 5,
        
        /**
         * The PrintReceiptCopy member.
         */
        PrintReceiptCopy = 6,
        
        /**
         * The PriceCheck member.
         */
        PriceCheck = 7,
        
        /**
         * The TaxOverride member.
         */
        TaxOverride = 8,
        
        /**
         * The QuantityCorrection member.
         */
        QuantityCorrection = 9,
        
        /**
         * The PurgeTransactionsData member.
         */
        PurgeTransactionsData = 10
    }
    
    /**
     * AuditLogTraceLevel enum type.
     */
    export enum AuditLogTraceLevel {
      
        /**
         * The Trace member.
         */
        Trace = 0,
        
        /**
         * The Debug member.
         */
        Debug = 1,
        
        /**
         * The Error member.
         */
        Error = 2
    }
    
    /**
     * FiscalIntegrationEventType enum type.
     */
    export enum FiscalIntegrationEventType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Sale member.
         */
        Sale = 1,
        
        /**
         * The PrintReceiptCopy member.
         */
        PrintReceiptCopy = 2,
        
        /**
         * The ZReport member.
         */
        ZReport = 3,
        
        /**
         * The XReport member.
         */
        XReport = 4,
        
        /**
         * The CloseShift member.
         */
        CloseShift = 5,
        
        /**
         * The BankDrop member.
         */
        BankDrop = 6,
        
        /**
         * The TenderDeclaration member.
         */
        TenderDeclaration = 7,
        
        /**
         * The RemoveTender member.
         */
        RemoveTender = 8,
        
        /**
         * The FloatEntry member.
         */
        FloatEntry = 9,
        
        /**
         * The SafeDrop member.
         */
        SafeDrop = 10,
        
        /**
         * The StartingAmount member.
         */
        StartingAmount = 11,
        
        /**
         * The PackingSlip member.
         */
        PackingSlip = 12,
        
        /**
         * The GiftReceipt member.
         */
        GiftReceipt = 13,
        
        /**
         * The CustomerAccountDeposit member.
         */
        CustomerAccountDeposit = 14,
        
        /**
         * The CreditMemo member.
         */
        CreditMemo = 15,
        
        /**
         * The EditCustomerOrder member.
         */
        EditCustomerOrder = 16,
        
        /**
         * The CreateCustomerOrder member.
         */
        CreateCustomerOrder = 17,
        
        /**
         * The DepositOverride member.
         */
        DepositOverride = 18,
        
        /**
         * The FiscalXReport member.
         */
        FiscalXReport = 19,
        
        /**
         * The FiscalZReport member.
         */
        FiscalZReport = 20,
        
        /**
         * The AuditEvent member.
         */
        AuditEvent = 21,
        
        /**
         * The OpenDrawer member.
         */
        OpenDrawer = 22,
        
        /**
         * The CancelCustomerOrder member.
         */
        CancelCustomerOrder = 23,
        
        /**
         * The BeginSale member.
         */
        BeginSale = 24,
        
        /**
         * The PreSale member.
         */
        PreSale = 25,
        
        /**
         * The IncomeAccounts member.
         */
        IncomeAccounts = 26,
        
        /**
         * The ExpenseAccounts member.
         */
        ExpenseAccounts = 27,
        
        /**
         * The VoidTransaction member.
         */
        VoidTransaction = 28,
        
        /**
         * The SuspendTransaction member.
         */
        SuspendTransaction = 29,
        
        /**
         * The RecallTransaction member.
         */
        RecallTransaction = 30
    }
    
    /**
     * FiscalIntegrationDocumentGenerationResultType enum type.
     */
    export enum FiscalIntegrationDocumentGenerationResultType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Succeeded member.
         */
        Succeeded = 1,
        
        /**
         * The NotSupported member.
         */
        NotSupported = 2,
        
        /**
         * The NotRequired member.
         */
        NotRequired = 3,
        
        /**
         * The Failed member.
         */
        Failed = 4
    }
    
    /**
     * FiscalIntegrationRegistrationProcessMode enum type.
     */
    export enum FiscalIntegrationRegistrationProcessMode {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Disabled member.
         */
        Disabled = 1,
        
        /**
         * The Excepted member.
         */
        Excepted = 2,
        
        /**
         * The Full member.
         */
        Full = 3
    }
    
    /**
     * FiscalIntegrationServiceCommunicationResultType enum type.
     */
    export enum FiscalIntegrationServiceCommunicationResultType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Succeeded member.
         */
        Succeeded = 1,
        
        /**
         * The Failed member.
         */
        Failed = 2
    }
    
    /**
     * FiscalIntegrationServiceFailureType enum type.
     */
    export enum FiscalIntegrationServiceFailureType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Busy member.
         */
        Busy = 1,
        
        /**
         * The NotAvailable member.
         */
        NotAvailable = 2,
        
        /**
         * The SubmissionFailed member.
         */
        SubmissionFailed = 3,
        
        /**
         * The Other member.
         */
        Other = 4,
        
        /**
         * The BadResponse member.
         */
        BadResponse = 5,
        
        /**
         * The Timeout member.
         */
        Timeout = 6
    }
    
    /**
     * PickupTimeslotAvailabilitySearchOption enum type.
     */
    export enum PickupTimeslotAvailabilitySearchOption {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The DailyGroupingTimeslotOnly member.
         */
        DailyGroupingTimeslotOnly = 1,
        
        /**
         * The All member.
         */
        All = 2
    }
    
    /**
     * VendorValidationResultLevel enum type.
     */
    export enum VendorValidationResultLevel {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Approved member.
         */
        Approved = 1,
        
        /**
         * The ApprovedWithWarning member.
         */
        ApprovedWithWarning = 2,
        
        /**
         * The NotApproved member.
         */
        NotApproved = 3
    }
    
    /**
     * AttachedServiceStatus enum type.
     */
    export enum AttachedServiceStatus {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Disabled member.
         */
        Disabled = 1,
        
        /**
         * The InProgress member.
         */
        InProgress = 2,
        
        /**
         * The Enabled member.
         */
        Enabled = 3,
        
        /**
         * The Submitted member.
         */
        Submitted = 4
    }
    
    /**
     * ReceiptEmailBehavior enum type.
     */
    export enum ReceiptEmailBehavior {
      
        /**
         * The DoNotEmail member.
         */
        DoNotEmail = 0,
        
        /**
         * The PromptUser member.
         */
        PromptUser = 1,
        
        /**
         * The AlwaysEmail member.
         */
        AlwaysEmail = 2
    }
    
    /**
     * CartLineQuantityLimitsErrors enum type.
     */
    export enum CartLineQuantityLimitsErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AddingItem_ExceedsMaximumQuantity member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AddingItem_ExceedsMaximumQuantity,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UpdatingItem_ExceedsMaximumQuantity member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UpdatingItem_ExceedsMaximumQuantity,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ItemQuantityExceedsMaximum member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ItemQuantityExceedsMaximum,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ItemQuantityLessThanMinimum member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ItemQuantityLessThanMinimum,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ItemQuantityViolatesMultiplicityOfConfiguredNumber member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ItemQuantityViolatesMultiplicityOfConfiguredNumber,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ItemQuantityExceedsMaximumAndViolatesMultiplicityOfConfiguredNumber member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ItemQuantityExceedsMaximumAndViolatesMultiplicityOfConfiguredNumber,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ItemQuantityLessThanMinimumAndViolatesMultiplicityOfConfiguredNumber member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ItemQuantityLessThanMinimumAndViolatesMultiplicityOfConfiguredNumber,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AddingItem_QuantityExceedsMaximumAndViolatesMultiplicityOfConfiguredNumber member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AddingItem_QuantityExceedsMaximumAndViolatesMultiplicityOfConfiguredNumber,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UpdatingItem_QuantityExceedsMaximumAndViolatesMultiplicityOfConfiguredNumber member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UpdatingItem_QuantityExceedsMaximumAndViolatesMultiplicityOfConfiguredNumber
    }
    
    /**
     * CommunicationErrors enum type.
     */
    export enum CommunicationErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_HeadquarterCommunicationFailure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_HeadquarterCommunicationFailure,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_HeadquarterResponseParsingError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_HeadquarterResponseParsingError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AggregateCommunicationError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AggregateCommunicationError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ExternalProviderError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ExternalProviderError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_HeadquarterTransactionServiceMethodCallFailure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_HeadquarterTransactionServiceMethodCallFailure,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TransactionServiceTimeOut member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceTimeOut,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TransactionServiceException member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceException,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TransactionServiceAuthenticationFailedFault member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceAuthenticationFailedFault,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TransactionServiceForbiddenFault member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceForbiddenFault,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TransactionServiceSenderFault member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceSenderFault,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidS2SClientId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidS2SClientId,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidS2SSecret member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidS2SSecret,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidS2STenant member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidS2STenant,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidS2SApplicationName member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidS2SApplicationName,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TransactionServiceLoyaltySenderFault member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TransactionServiceLoyaltySenderFault
    }
    
    /**
     * ConfigurationErrors enum type.
     */
    export enum ConfigurationErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ConfigurationSettingNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ConfigurationSettingNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidConfigurationKeyFormat member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidConfigurationKeyFormat,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ApplicationCompositionFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ApplicationCompositionFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidChannelConfiguration member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidChannelConfiguration,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidPipelineConfiguration member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidPipelineConfiguration,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidProviderConfiguration member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidProviderConfiguration,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToFindDeliveryOptions member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindDeliveryOptions,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToFindDeliveryPreferences member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindDeliveryPreferences,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToFindConfigForTenderType member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindConfigForTenderType,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ConnectionIsNotOverridden member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ConnectionIsNotOverridden,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ConnectionStringNotProvided member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ConnectionStringNotProvided,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentConnectorNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentConnectorNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DeviceConfigurationNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DeviceConfigurationNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_HardwareProfileNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_HardwareProfileNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_LayoutNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_LayoutNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_VersionedEdmResourceFileNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_VersionedEdmResourceFileNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RetailServerConfigurationNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RetailServerConfigurationNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RetailServerCertificateNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RetailServerCertificateNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RealtimeServiceCertificateNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RealtimeServiceCertificateNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RealtimeServiceInvalidConfiguration member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RealtimeServiceInvalidConfiguration,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ActivatedDeviceMissingTokenIssueDatetime member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ActivatedDeviceMissingTokenIssueDatetime,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_LCSLibrariesNotConfigured member.
         */
        Microsoft_Dynamics_Commerce_Runtime_LCSLibrariesNotConfigured,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnknownRequestResponsePair member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnknownRequestResponsePair,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ProductRecommendationsDisabled member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ProductRecommendationsDisabled,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToRetrieveRecommendationServiceCredentials member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToRetrieveRecommendationServiceCredentials,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CommerceIssuerNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CommerceIssuerNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SecretProviderNotAvailable member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SecretProviderNotAvailable,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SecretNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SecretNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SecretProviderRetrievalFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SecretProviderRetrievalFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidProfilesConfiguration member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidProfilesConfiguration,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ExtensionSettingsMustStartWithExtPrefix member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ExtensionSettingsMustStartWithExtPrefix,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ConfigurationSettingValueIncorrectFormat member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ConfigurationSettingValueIncorrectFormat,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RequestWasNotHandled member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RequestWasNotHandled,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_FiscalService_NotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_FiscalService_NotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidConfigurationExtensionsSection member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidConfigurationExtensionsSection,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CompositionComponentExportingError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CompositionComponentExportingError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_VisualProfileNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_VisualProfileNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DuplicatedExtensionConfigurationKey member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DuplicatedExtensionConfigurationKey,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NextRequestHandlerNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NextRequestHandlerNotFound
    }
    
    /**
     * DataValidationErrors enum type.
     */
    export enum DataValidationErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The RegexAttribute_ValidationError member.
         */
        RegexAttribute_ValidationError,
        
        /**
         * The RequiredAttribute_ValidationError member.
         */
        RequiredAttribute_ValidationError,
        
        /**
         * The StringLengthAttribute_ValidationError member.
         */
        StringLengthAttribute_ValidationError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AuthenticationGrantTypeNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AuthenticationGrantTypeNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_BlockedLoyaltyCard member.
         */
        Microsoft_Dynamics_Commerce_Runtime_BlockedLoyaltyCard,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidLoyaltyCardNumber member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidLoyaltyCardNumber,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_LoyaltyCardNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_LoyaltyCardNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ProductMasterPageRequired member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ProductMasterPageRequired,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RequiredValueNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RequiredValueNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SalesLineNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SalesLineNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RemoteProductsNotSupportedWithCurrentTransactionType member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RemoteProductsNotSupportedWithCurrentTransactionType,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountIsBlocked member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountIsBlocked,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerInvoiceAccountIsBlocked member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerInvoiceAccountIsBlocked,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ProductIsNotActive member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ProductIsNotActive,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ProductIsBlocked member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ProductIsBlocked,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ValueOutOfRange member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ValueOutOfRange,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ObjectNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ObjectNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DuplicateObject member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DuplicateObject,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidFormat member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidFormat,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MissingStockCountTransactions member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MissingStockCountTransactions,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MissingParameter member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MissingParameter,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidProductDimensionCombinations member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidProductDimensionCombinations,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_EmployeeDiscountExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_EmployeeDiscountExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_EmployeeDetailsNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_EmployeeDetailsNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_BarcodeNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_BarcodeNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ExistingCustomerAlreadyMappedToExternalIdentity member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ExistingCustomerAlreadyMappedToExternalIdentity,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnsupportedLanguage member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnsupportedLanguage,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnknownRequest member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnknownRequest,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnSupportedType member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnSupportedType,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AggregateValidationError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AggregateValidationError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IdMismatch member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IdMismatch,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidRequest member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidRequest,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultipleEmployeeLineDiscountsNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultipleEmployeeLineDiscountsNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultipleEmployeeTotalDiscountsNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultipleEmployeeTotalDiscountsNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TotalDiscountsNotAllowedForMixSalesAndReturn member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TotalDiscountsNotAllowedForMixSalesAndReturn,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseAccountsInSameCart member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseAccountsInSameCart,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowDiscounts member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowDiscounts,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowSalesLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowSalesLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowCustomer member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowCustomer,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowGiftCardLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowGiftCardLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseLineDoesNotAllowSettingTransactionStatus member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseLineDoesNotAllowSettingTransactionStatus,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowAffiliation member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IncomeExpenseCartDoesNotAllowAffiliation,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InsufficientQuantityAvailable member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InsufficientQuantityAvailable,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidUnitOfMeasure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidUnitOfMeasure,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnitOfMeasureConversionNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnitOfMeasureConversionNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidDeliveryMode member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidDeliveryMode,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DeliveryModeMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DeliveryModeMissing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToFindDeliveryOptions member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindDeliveryOptions,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidEmailAddress member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidEmailAddress,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidDeliveryPreferenceType member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidDeliveryPreferenceType,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidShippingAddress member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidShippingAddress,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCountryRegion member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCountryRegion,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidStateProvince member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidStateProvince,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCounty member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCounty,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCity member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCity,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidDistrict member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidDistrict,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidZipPostalCode member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidZipPostalCode,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidAddress member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidAddress,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidShippingDate member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidShippingDate,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DiscountAmountInvalidated member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DiscountAmountInvalidated,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidPriceEncountered member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidPriceEncountered,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ItemDiscontinuedFromChannel member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ItemDiscontinuedFromChannel,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DiscontinuedProductsRemovedFromCart member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DiscontinuedProductsRemovedFromCart,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GrossWeightForItemNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GrossWeightForItemNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ListingIdNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ListingIdNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RequiredReasonCodesMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RequiredReasonCodesMissing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReasonCodeLinesReasonCodeIdDuplicated member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReasonCodeLinesReasonCodeIdDuplicated,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CartNotActive member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CartNotActive,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidStatus member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidStatus,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_VoidTransactionContainsTenderedLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_VoidTransactionContainsTenderedLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeForVoidProducts member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeForVoidProducts,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CartContainsProductsForReturn member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CartContainsProductsForReturn,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidReceiptTemplate member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidReceiptTemplate,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidReceiptItem member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidReceiptItem,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ItemIdBarcodeMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ItemIdBarcodeMissing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultipleItemsForItemId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultipleItemsForItemId,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeChange member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeChange,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeForReturnTransaction member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeForReturnTransaction,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeForAddCartLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCustomerOrderModeForAddCartLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotAddProductHavingRefundChargeAmount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotAddProductHavingRefundChargeAmount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotChangeCustomerIdWhenEditingCustomerOrder member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotChangeCustomerIdWhenEditingCustomerOrder,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_QuoteMustNotHaveAnyPayment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_QuoteMustNotHaveAnyPayment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_QuoteMustHaveValidQuotationExpiryDate member.
         */
        Microsoft_Dynamics_Commerce_Runtime_QuoteMustHaveValidQuotationExpiryDate,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_QuoteMustNotHaveDepositOverride member.
         */
        Microsoft_Dynamics_Commerce_Runtime_QuoteMustNotHaveDepositOverride,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DepositMustBeGreaterThanZero member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DepositMustBeGreaterThanZero,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMustNotBeGreaterThanTotalAmount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMustNotBeGreaterThanTotalAmount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMustNotBeGreaterThanMaximumOverrideAmount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMustNotBeGreaterThanMaximumOverrideAmount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidPickupDepositOverrideAmount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidPickupDepositOverrideAmount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OrderWasNotCreatedWithDepositOverride member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OrderWasNotCreatedWithDepositOverride,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMayNotBeChanged member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMayNotBeChanged,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMayNotBeCleared member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DepositOverrideMayNotBeCleared,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AmountDueMustBePaidBeforeCheckout member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AmountDueMustBePaidBeforeCheckout,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DiscountMustBeCalculatedBeforeCheckout member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DiscountMustBeCalculatedBeforeCheckout,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TotalsMustBeCalculatedBeforeCheckout member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TotalsMustBeCalculatedBeforeCheckout,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IncorrectPaymentAmountSign member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IncorrectPaymentAmountSign,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMaximumAmountPerLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMaximumAmountPerLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMinimumAmountPerLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMinimumAmountPerLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMaximumAmountPerTransaction member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMaximumAmountPerTransaction,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMinimumAmountPerTransaction member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentExceedsMinimumAmountPerTransaction,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ChangebackIsNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ChangebackIsNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OvertenderAmountExceedsMaximumAllowedValue member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OvertenderAmountExceedsMaximumAllowedValue,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_BalanceAmountExceedsMaximumAllowedValue member.
         */
        Microsoft_Dynamics_Commerce_Runtime_BalanceAmountExceedsMaximumAllowedValue,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentMustBeUsedToFinalizeTransaction member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentMustBeUsedToFinalizeTransaction,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToFindListing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindListing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToFindEmployeeActivityBreakCategory member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindEmployeeActivityBreakCategory,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToFindVariant member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToFindVariant,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidStoreNumber member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidStoreNumber,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SalesLineMustHavePickupDeliveryMode member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SalesLineMustHavePickupDeliveryMode,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToPickupMoreThanQtyRemaining member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToPickupMoreThanQtyRemaining,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidDeliveryCharge member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidDeliveryCharge,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CurrencyConversionFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CurrencyConversionFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CurrencyChannelOrderMismatch member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CurrencyChannelOrderMismatch,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CurrencyNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CurrencyNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCancellationCharge member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCancellationCharge,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ChargeNotConfiguredOnHeadquarters member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ChargeNotConfiguredOnHeadquarters,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ShippingChargeRefundCannotBePositive member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ShippingChargeRefundCannotBePositive,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ShippingChargeRefundIsNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ShippingChargeRefundIsNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SalesGroupItemGroupIntersectionInvalid member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SalesGroupItemGroupIntersectionInvalid,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotApplyHeaderChargesWhenShippingRefundAppliedOnCartLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotApplyHeaderChargesWhenShippingRefundAppliedOnCartLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotApplyRefundChargeOnProductForSale member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotApplyRefundChargeOnProductForSale,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PickupModeOfDeliveryNotConfiguredOnHeadquarters member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PickupModeOfDeliveryNotConfiguredOnHeadquarters,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SerialNumberMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SerialNumberMissing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SerialNumberCannotBeChanged member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SerialNumberCannotBeChanged,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SerialNumberMissingInCustomerOrder member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SerialNumberMissingInCustomerOrder,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SerializedQuantityGreaterThanOne member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SerializedQuantityGreaterThanOne,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultipleCreditCardPaymentNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultipleCreditCardPaymentNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCardExpirationDate member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCardExpirationDate,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PurchaseTransferOrderMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PurchaseTransferOrderMissing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotAllLinesSaved member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotAllLinesSaved,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PurchaseTransferOrderRequired member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PurchaseTransferOrderRequired,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SalesMustHaveQuantityGreaterThanZero member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SalesMustHaveQuantityGreaterThanZero,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReturnsMustHaveQuantityLesserThanZero member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReturnsMustHaveQuantityLesserThanZero,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotReturnMoreThanPurchased member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotReturnMoreThanPurchased,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotReturnMoreThanInvoicedMinusReturned member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotReturnMoreThanInvoicedMinusReturned,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotReturnMultipleTransactions member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotReturnMultipleTransactions,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PropertyUpdateNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PropertyUpdateNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GiftCardDiscountNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GiftCardDiscountNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_LoadingActiveCartFromAnotherTerminalNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_LoadingActiveCartFromAnotherTerminalNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ShiftAlreadyOpenOnDifferentTerminal member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ShiftAlreadyOpenOnDifferentTerminal,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TerminalHasAnOpenShift member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TerminalHasAnOpenShift,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CashDrawerHasAnOpenShift member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CashDrawerHasAnOpenShift,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ShiftStartingAmountNotEntered member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ShiftStartingAmountNotEntered,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ShiftTenderDeclarationAmountNotEntered member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ShiftTenderDeclarationAmountNotEntered,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ShiftHasUnreconciledLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ShiftHasUnreconciledLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReconciliationLineStatusMustBePending member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReconciliationLineStatusMustBePending,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReceiptTypeNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReceiptTypeNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReceiptTypeNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReceiptTypeNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MoreThanOneTenderTypeForTenderTypeId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MoreThanOneTenderTypeForTenderTypeId,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TimeClockNotEnabled member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TimeClockNotEnabled,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ViewTimeClockNotEnabled member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ViewTimeClockNotEnabled,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NoMoreThanOneOperationWithAGiftCard member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NoMoreThanOneOperationWithAGiftCard,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GiftCardUnlockFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GiftCardUnlockFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GiftCardLineVoidReversalNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GiftCardLineVoidReversalNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SalesInvoiceLineVoidReversalNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SalesInvoiceLineVoidReversalNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotSuspendCartWithActiveTenderLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotSuspendCartWithActiveTenderLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotSuspendCartWithActiveGiftCardSalesLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotSuspendCartWithActiveGiftCardSalesLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotUpdateUnitOfMeasureOnPriceOverriddenLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotUpdateUnitOfMeasureOnPriceOverriddenLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SettleInvoiceFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SettleInvoiceFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TerminalNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TerminalNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidQuantity member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidQuantity,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ItemQuantityExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ItemQuantityExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NoPriceOverrideForReturns member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NoPriceOverrideForReturns,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NoPriceOverrideForGiftCards member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NoPriceOverrideForGiftCards,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NoPriceOverrideForInvoiceLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NoPriceOverrideForInvoiceLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotAddNonProductItemToCustomerOrder member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotAddNonProductItemToCustomerOrder,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReturnItemPriceExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReturnItemPriceExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReturnTransactionTotalExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReturnTransactionTotalExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ShiftNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ShiftNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ShiftValidationError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ShiftValidationError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CredentialIdentifierAlreadyInUse member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CredentialIdentifierAlreadyInUse,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CreditVoucherNull member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CreditVoucherNull,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CartNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CartNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositMultipleCartLinesNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositMultipleCartLinesNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountNumberIsNotSet member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountNumberIsNotSet,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotPayForCustomerAccountDepositWithCustomerAccountPaymentMethod member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotPayForCustomerAccountDepositWithCustomerAccountPaymentMethod,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositCannotBeNegative member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositCannotBeNegative,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositCannotBeVoided member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositCannotBeVoided,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OfflineDatabaseChunkFileNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OfflineDatabaseChunkFileNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ChannelIsNotPublished member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ChannelIsNotPublished,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidOperation member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidOperation,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MaxCountingDifferenceExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MaxCountingDifferenceExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_EmployeeNotAllowedManageSharedShift member.
         */
        Microsoft_Dynamics_Commerce_Runtime_EmployeeNotAllowedManageSharedShift,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidAmount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidAmount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidBagNumber member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidBagNumber,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NoPrintersReturned member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NoPrintersReturned,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_EnteringPriceNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_EnteringPriceNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MustKeyInEqualHigherPrice member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MustKeyInEqualHigherPrice,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MustKeyInEqualLowerPrice member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MustKeyInEqualLowerPrice,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MustKeyInNewPrice member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MustKeyInNewPrice,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ConflictingClaimsPresentOnUserContext member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ConflictingClaimsPresentOnUserContext,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCartSalesLineAdd member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartSalesLineAdd,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCartSalesLineUpdate member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartSalesLineUpdate,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCartState member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartState,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidProduct member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidProduct,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ConflictingCartLineOperation member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ConflictingCartLineOperation,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCartLinesAggregateError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartLinesAggregateError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCartInventoryLocationId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartInventoryLocationId,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCartVersion member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCartVersion,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UpdateOfReadOnlyCart member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UpdateOfReadOnlyCart,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerOrDirectoryPartyNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerOrDirectoryPartyNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotUpdateCustomerAndLoyaltyCardAtTheSameTime member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotUpdateCustomerAndLoyaltyCardAtTheSameTime,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ConflictLoyaltyCardCustomerAndTransactionCustomer member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ConflictLoyaltyCardCustomerAndTransactionCustomer,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCashBackAmount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCashBackAmount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToRetrieveCardPaymentAcceptResult member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToRetrieveCardPaymentAcceptResult,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PreValidationForAsyncAddressFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PreValidationForAsyncAddressFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ZeroPriceIsNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ZeroPriceIsNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OperationNotAllowedOnLinkedProduct member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OperationNotAllowedOnLinkedProduct,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountMismatchBetweenTransactionAndDepositLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountMismatchBetweenTransactionAndDepositLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositLineDoesNotAllowSettingTransactionStatus member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositLineDoesNotAllowSettingTransactionStatus,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositLinesNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountDepositLinesNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReturnLineNumberNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReturnLineNumberNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerNameExceedsMaximumLength member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerNameExceedsMaximumLength,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerPhoneNumberExceedsMaximumLength member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerPhoneNumberExceedsMaximumLength,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerEmailExceedsMaximumLength member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerEmailExceedsMaximumLength,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidShiftStatusChange member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidShiftStatusChange,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AmountExceedsMaximumAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AmountExceedsMaximumAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PrintXZReportNotConfigured member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PrintXZReportNotConfigured,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ColumnsNameBadFormat member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ColumnsNameBadFormat,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SelectedValuesDidNotMatchExactlyOneProduct member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SelectedValuesDidNotMatchExactlyOneProduct,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ProductNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ProductNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DiscountNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DiscountNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_FailedToRecallTransaction member.
         */
        Microsoft_Dynamics_Commerce_Runtime_FailedToRecallTransaction,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultiplePrimaryAddresses member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultiplePrimaryAddresses,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SortingColumnsNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SortingColumnsNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_WorkerDoesNotHaveAllowSaleOutsideAssortmentPermission member.
         */
        Microsoft_Dynamics_Commerce_Runtime_WorkerDoesNotHaveAllowSaleOutsideAssortmentPermission,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidOrderInvoiceData member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidOrderInvoiceData,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NoSalesInvoiceReturned member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NoSalesInvoiceReturned,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GiftCardLineNotAllowedWithInvoiceLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GiftCardLineNotAllowedWithInvoiceLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedInCustomerOrder member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedInCustomerOrder,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerOrderNotAllowedToContainInvoiceLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerOrderNotAllowedToContainInvoiceLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SalesLineNotAllowedDuringInvoicePayment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SalesLineNotAllowedDuringInvoicePayment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedWithItemLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedWithItemLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ItemLinesNotAllowedWithInvoiceLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ItemLinesNotAllowedWithInvoiceLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultipleInvoiceLinesNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultipleInvoiceLinesNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountRemovalNotAllowedForInvoiceSales member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountRemovalNotAllowedForInvoiceSales,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedInCartWithoutCustomerAccount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedInCartWithoutCustomerAccount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedInCartWithDifferentCustomerAccount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedInCartWithDifferentCustomerAccount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvoiceDiscountNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvoiceDiscountNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AttributeTypeNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AttributeTypeNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidAttributeValue member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidAttributeValue,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AttributeValueOutOfBounds member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AttributeValueOutOfBounds,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AttributeValueCannotBeNull member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AttributeValueCannotBeNull,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AttributeTypeMismatch member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AttributeTypeMismatch,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AttributeDefinitionNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AttributeDefinitionNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AttributeValidationFailure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AttributeValidationFailure,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MixingSalesAndReturnsProhibited member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MixingSalesAndReturnsProhibited,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCouponCode member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCouponCode,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CouponRequiresCustomerOnCart member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CouponRequiresCustomerOnCart,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ExclusiveCouponCannotBeAppliedWithOtherCoupons member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ExclusiveCouponCannotBeAppliedWithOtherCoupons,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CouponExceedsDefinedUsageLimits member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CouponExceedsDefinedUsageLimits,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UserCannotAcceptFulfillmentLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UserCannotAcceptFulfillmentLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UserCannotRejectFulfillmentLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UserCannotRejectFulfillmentLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RestrictPrintingReceiptCopy_AlreadyRegistered member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RestrictPrintingReceiptCopy_AlreadyRegistered,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RestrictPrintingReceiptCopy_HQisNotAvailable member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RestrictPrintingReceiptCopy_HQisNotAvailable,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RestrictPrintingReceiptCopy member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RestrictPrintingReceiptCopy,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RemoveAddPaymentMethodConfigurationNotDefined member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RemoveAddPaymentMethodConfigurationNotDefined,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OverrideDepostAmountShouldBeLargerThanCarriedOutAmount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OverrideDepostAmountShouldBeLargerThanCarriedOutAmount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MixingItemIdsAndProductIdsProhibited member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MixingItemIdsAndProductIdsProhibited,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PackingLinesFromDifferentOrdersNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PackingLinesFromDifferentOrdersNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidFulfillmentLineKey member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidFulfillmentLineKey,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Missing_LocationId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Missing_LocationId,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Missing_ShipDate member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Missing_ShipDate,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_Missing_ReceiveDate member.
         */
        Microsoft_Dynamics_Commerce_Runtime_Missing_ReceiveDate,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidOrderType member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidOrderType,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ShippingSerializedProductsNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ShippingSerializedProductsNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ShippingMultipleOrdersNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ShippingMultipleOrdersNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToOpenShift member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToOpenShift,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CartAlreadyCheckedOut member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CartAlreadyCheckedOut,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CashDrawerLimitExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CashDrawerLimitExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_InvalidShift member.
         */
        Microsoft_Dynamics_Commerce_InvalidShift,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SuspendedTransactionNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SuspendedTransactionNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CartContainsProductsForReturnOnly member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CartContainsProductsForReturnOnly,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerBlockedForLoyaltyEnrollment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerBlockedForLoyaltyEnrollment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InactiveCouponCode member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InactiveCouponCode,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ExpiredCouponCode member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ExpiredCouponCode,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotStartedCouponCode member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotStartedCouponCode,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ExceededUsageLimitCouponCode member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ExceededUsageLimitCouponCode,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidResumeCartRequest member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidResumeCartRequest,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ChargeCodeNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ChargeCodeNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentException_ReturnWithoutReceiptPayment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentException_ReturnWithoutReceiptPayment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AddressLengthExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AddressLengthExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CountyLengthExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CountyLengthExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_StreetLengthExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_StreetLengthExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidLinkedPayment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidLinkedPayment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AttributeMustBeUnique member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AttributeMustBeUnique,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotesLengthExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotesLengthExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToLocateTenderTypeWithGivenId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToLocateTenderTypeWithGivenId,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TenderTypeDoesNotSupportGiftCardOperations member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TenderTypeDoesNotSupportGiftCardOperations,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ExtensibleTransactionTypeNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ExtensibleTransactionTypeNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidLastModifiedDateTimeFromValue member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidLastModifiedDateTimeFromValue,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MissingRequiredCartTenderLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MissingRequiredCartTenderLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidRefinerRecordIdForCustomerSearchKeywordRefiner member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidRefinerRecordIdForCustomerSearchKeywordRefiner,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidCustomerOrderModeForCheckout member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidCustomerOrderModeForCheckout,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidCartTypeForCheckout member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidCartTypeForCheckout,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MissingSequentialSignature member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MissingSequentialSignature,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MissingRecordIdForStorePickUpAddress member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MissingRecordIdForStorePickUpAddress,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidChecklistTasksUpdateRequest member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidChecklistTasksUpdateRequest,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ChecklistTasksCreateNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ChecklistTasksCreateNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidTransferOrder member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidTransferOrder,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidTransferOrderLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidTransferOrderLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DefaultLocationNotFoundForWarehouse member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DefaultLocationNotFoundForWarehouse,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ApplyMaxQuantitiesNotSupportedForOperationType member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ApplyMaxQuantitiesNotSupportedForOperationType,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentTransactionServiceDeserializationError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentTransactionServiceDeserializationError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotValidStatus member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotValidStatus,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentUpdateLinesCriteriaNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentUpdateLinesCriteriaNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventorySourceDocumentLineMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventorySourceDocumentLineMissing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UpdateInventoryDocumentStatusUnsupportedTransition member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UpdateInventoryDocumentStatusUnsupportedTransition,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AddingLinesToOrderIsNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AddingLinesToOrderIsNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOverreceivingToTransferOrderIsNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOverreceivingToTransferOrderIsNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOverdeliveringToTransferOrderIsNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOverdeliveringToTransferOrderIsNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOverreceivingNotEnabled member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOverreceivingNotEnabled,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOvershippingNotEnabled member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOvershippingNotEnabled,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOverReceivedExceedsThreshold member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOverReceivedExceedsThreshold,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOverShippedExceedsThreshold member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOverShippedExceedsThreshold,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOperationCommitFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentOperationCommitFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentReceiptIdNotValid member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentReceiptIdNotValid,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentReceiptIdNotSupportedForGivenDocumentType member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentReceiptIdNotSupportedForGivenDocumentType,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentLockedByOtherTerminal member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentLockedByOtherTerminal,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentVersionNull member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentVersionNull,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotValidVersion member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotValidVersion,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotEnoughApplicableLinesForUpdateLinesByProduct member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotEnoughApplicableLinesForUpdateLinesByProduct,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentExceedMaximumQuantity member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentExceedMaximumQuantity,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentLineProductIdMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentLineProductIdMissing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_StoreOrgUnitNameMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_StoreOrgUnitNameMissing,
        
        /**
         * The Microsoft_Dynamics_RetailServer_BadRequest member.
         */
        Microsoft_Dynamics_RetailServer_BadRequest,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidItemTaxGroup member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidItemTaxGroup,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MixingGiftCardsAndDepositLinesNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MixingGiftCardsAndDepositLinesNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentRowVersionMismatch member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentRowVersionMismatch,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AssociatedWarrantableIsVoided member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AssociatedWarrantableIsVoided,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidWarrantyLineQuantity member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidWarrantyLineQuantity,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DuplicatedWarranty member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DuplicatedWarranty,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SalesOrderNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SalesOrderNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SalesOrderVoided member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SalesOrderVoided,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_WarrantyAlreadyAdded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_WarrantyAlreadyAdded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_WarrantyAlreadyBought member.
         */
        Microsoft_Dynamics_Commerce_Runtime_WarrantyAlreadyBought,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_WarrantyNotApplicableByPrice member.
         */
        Microsoft_Dynamics_Commerce_Runtime_WarrantyNotApplicableByPrice,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidWarranty member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidWarranty,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_WarrantyOperationalLineNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_WarrantyOperationalLineNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_WarrantyForReturnedItemNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_WarrantyForReturnedItemNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IsNotWarranty member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IsNotWarranty,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotChangeWarrantableProductWhenItAssociatesWarranty member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotChangeWarrantableProductWhenItAssociatesWarranty,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_WarrantyNotEmptyForReturn member.
         */
        Microsoft_Dynamics_Commerce_Runtime_WarrantyNotEmptyForReturn,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotSpecifyBothWarrantableLineNumberAndWarrantiedId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotSpecifyBothWarrantableLineNumberAndWarrantiedId,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotHaveMultipleWarrantablesOrWarrantiesWithSameWarrantiedId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotHaveMultipleWarrantablesOrWarrantiesWithSameWarrantiedId,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OnlySerializedProductCanHaveWarranty member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OnlySerializedProductCanHaveWarranty,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CrossCustomerWarrantyNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CrossCustomerWarrantyNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CrossCustomerWarrantyReturnNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CrossCustomerWarrantyReturnNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerChangeNotAllowedWithWarrantyLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerChangeNotAllowedWithWarrantyLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerChangeNotAllowedWithWarrantyReturn member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerChangeNotAllowedWithWarrantyReturn,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CartTypeChangeNotAllowedWhenWarrantableInDifferentOrder member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CartTypeChangeNotAllowedWhenWarrantableInDifferentOrder,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_WarrantyInconsistentCartType member.
         */
        Microsoft_Dynamics_Commerce_Runtime_WarrantyInconsistentCartType,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_WarrantyRelationCombiningCashAndCarryAndCustomerOrderNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_WarrantyRelationCombiningCashAndCarryAndCustomerOrderNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentViolatesReturnPolicy member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentViolatesReturnPolicy,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CardTypeNotValid member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CardTypeNotValid,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TaxRegistrationFormatNotValid member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TaxRegistrationFormatNotValid,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TaxRegistrationInvalidCategorySetup member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TaxRegistrationInvalidCategorySetup,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TaxRegistrationIsPrimaryAddressRestricted member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TaxRegistrationIsPrimaryAddressRestricted,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TaxRegistrationNumberMustBeUnique member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TaxRegistrationNumberMustBeUnique,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ElectronicAddressTypeNotValid member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ElectronicAddressTypeNotValid,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RecipientAddressCountExceededMaximumAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RecipientAddressCountExceededMaximumAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SearchingWarehouseLocationsInMultipleWarehousesNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SearchingWarehouseLocationsInMultipleWarehousesNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SearchingWarehouseLocationsWithoutWarehouseNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SearchingWarehouseLocationsWithoutWarehouseNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryNoAvailableReceiveQtyTransferOrder member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryNoAvailableReceiveQtyTransferOrder,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberNotMatch member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberNotMatch,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberLinesFulfilled member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberLinesFulfilled,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberDuplicated member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberDuplicated,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberRequired member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberRequired,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotBlankSerialNumberRequired member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotBlankSerialNumberRequired,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberLineNonIntegerQuantityEntered member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentSerialNumberLineNonIntegerQuantityEntered,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotAllowToUpdatePostedSerialNumbers member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotAllowToUpdatePostedSerialNumbers,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultiplePrimaryCustomerContactsNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultiplePrimaryCustomerContactsNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotSupportedHeadquarterVersion member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentNotSupportedHeadquarterVersion,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentTransferOrderUnderDeliveryNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentTransferOrderUnderDeliveryNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentTransferOrderLineNotAllowToClose member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentTransferOrderLineNotAllowToClose,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentTransferOrderUnderDeliveryBelowTolerance member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentTransferOrderUnderDeliveryBelowTolerance,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentValidationResultCategoryMustBeSpecified member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentValidationResultCategoryMustBeSpecified,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentValidationResultCategoryCanOnlyBeSpecifiedOnce member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentValidationResultCategoryCanOnlyBeSpecifiedOnce,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentDoesNotExist member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentDoesNotExist,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentPurchaseOrderChangeRequestRequired member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentPurchaseOrderChangeRequestRequired,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentPurchaseOrderChangeRequestRequirementUnknown member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentPurchaseOrderChangeRequestRequirementUnknown,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentLineMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryDocumentLineMissing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventorySerialNumberNotAvailable member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventorySerialNumberNotAvailable,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidEntityProperty member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidEntityProperty
    }
    
    /**
     * InvoiceDataValidationErrors enum type.
     */
    export enum InvoiceDataValidationErrors {
      
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvoiceLineAlreadyExistsInCart member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvoiceLineAlreadyExistsInCart,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvoiceNotExists member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvoiceNotExists
    }
    
    /**
     * FeatureNotSupportedErrors enum type.
     */
    export enum FeatureNotSupportedErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RequestTypeNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RequestTypeNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RequestParametersNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RequestParametersNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RequestParameterValueNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RequestParameterValueNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ChangeTenderTypeNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ChangeTenderTypeNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DemoModeOperationNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DemoModeOperationNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RealtimeServiceNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RealtimeServiceNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReceiptTypeNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReceiptTypeNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OnlineChannelRequired member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OnlineChannelRequired,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CouponsNotSupportedOnSalesQuotations member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CouponsNotSupportedOnSalesQuotations,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_FeatureNotSupportedInHeadquarters member.
         */
        Microsoft_Dynamics_Commerce_Runtime_FeatureNotSupportedInHeadquarters,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UpdatingCouponsNotSupportedOnPickup member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UpdatingCouponsNotSupportedOnPickup,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UpdateAsyncCustomerNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UpdateAsyncCustomerNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GiftCardPaymentNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GiftCardPaymentNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GiftCardOperationNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GiftCardOperationNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CurrentVersionSupportsOnlyOneInvoicePayment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CurrentVersionSupportsOnlyOneInvoicePayment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultipleCategoryIdsNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultipleCategoryIdsNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CrossStoreProductSearchNotSupportedInOnlineChannel member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CrossStoreProductSearchNotSupportedInOnlineChannel,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CrossStoreGetActivePriceNotSupportedInOnlineChannel member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CrossStoreGetActivePriceNotSupportedInOnlineChannel,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UpdateClientBookNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UpdateClientBookNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RequestCustomerTimelineItemsNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RequestCustomerTimelineItemsNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RequestCustomerTimelineItemTypesNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RequestCustomerTimelineItemTypesNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CreateCustomerTimelineItemNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CreateCustomerTimelineItemNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UpdateCustomerTimelineItemNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UpdateCustomerTimelineItemNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SearchByIdsNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SearchByIdsNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DocumentOperationNotSupportedInHeadquarters member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DocumentOperationNotSupportedInHeadquarters,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TaskManagementNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TaskManagementNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryInboundOutboundDocumentsWithoutASourceDocumentNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryInboundOutboundDocumentsWithoutASourceDocumentNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_WarrantyForCustomerOrderNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_WarrantyForCustomerOrderNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OptimizedProductAvailabilityJobNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OptimizedProductAvailabilityJobNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryInboundOutboundDocumentsValidationNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryInboundOutboundDocumentsValidationNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InventoryAddingItemToPurchaseOrderNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InventoryAddingItemToPurchaseOrderNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DataSignatureRequestHandlerExecutionDeprecated member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DataSignatureRequestHandlerExecutionDeprecated
    }
    
    /**
     * SecurityErrors enum type.
     */
    export enum SecurityErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AuthenticationFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AuthenticationFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AuthorizationFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AuthorizationFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AuthenticationMethodDisabled member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AuthenticationMethodDisabled,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CommerceIdentityNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CommerceIdentityNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_EmployeePermissionContextNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_EmployeePermissionContextNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UserNotActivated member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UserNotActivated,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PrincipalMissing member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PrincipalMissing,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PasswordRequired member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PasswordRequired,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ChangePasswordFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ChangePasswordFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidPassword member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidPassword,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IdentityProviderNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IdentityProviderNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidAuthenticationCredentials member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidAuthenticationCredentials,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidExtendedAuthenticationCredentials member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidExtendedAuthenticationCredentials,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UpdatePasswordFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UpdatePasswordFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ResetPasswordFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ResetPasswordFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NonDrawerOperationsOnly member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NonDrawerOperationsOnly,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UseExistingShiftPermissionDenied member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UseExistingShiftPermissionDenied,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CreateTransferOrderNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CreateTransferOrderNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UserCannotMassActivation member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UserCannotMassActivation,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OpenMultipleShiftsNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OpenMultipleShiftsNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UserSessionNotOpened member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UserSessionNotOpened,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_HeadquarterTransactionServiceMethodCallFailure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_HeadquarterTransactionServiceMethodCallFailure,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_HeadquarterCommunicationFailure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_HeadquarterCommunicationFailure,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DeviceTokenExpired member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DeviceTokenExpired,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DeviceTokenNotPresent member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DeviceTokenNotPresent,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidChannel member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidChannel,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ElevatedUserSameAsLoggedOnUser member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ElevatedUserSameAsLoggedOnUser,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GrantTypeNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GrantTypeNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DeviceDeactivationFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DeviceDeactivationFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_HardwareStationTokenCreationFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_HardwareStationTokenCreationFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidHardwareStationToken member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidHardwareStationToken,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UserLogonAnotherTerminal member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UserLogonAnotherTerminal,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnlockRegisterFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnlockRegisterFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ChannelDatabaseConnectionFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ChannelDatabaseConnectionFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidUserToken member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidUserToken,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountAuthorizationFailure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountAuthorizationFailure,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_LocalLogonFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_LocalLogonFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_LocalDeviceAuthenticationFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_LocalDeviceAuthenticationFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DeviceTokenValidationFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DeviceTokenValidationFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NoDeviceManagementPermission member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NoDeviceManagementPermission,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IncorrectLogonTypeUserAccountOrPassword member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IncorrectLogonTypeUserAccountOrPassword,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidAudience member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidAudience,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidIssuer member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidIssuer,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TenantIdNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TenantIdNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AADTokenIssuedForDifferentEnvironment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AADTokenIssuedForDifferentEnvironment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidAADTenantId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidAADTenantId,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_EmployeeIsConfiguredAsBlockLogin member.
         */
        Microsoft_Dynamics_Commerce_Runtime_EmployeeIsConfiguredAsBlockLogin,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UserBlockedDueToTooManyFailedLogonAttempts member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UserBlockedDueToTooManyFailedLogonAttempts,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UserPasswordExpired member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UserPasswordExpired,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CheckOutNotOverHTTPS member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CheckOutNotOverHTTPS,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AttemptToActivateFromDifferentPhysicalDevice member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AttemptToActivateFromDifferentPhysicalDevice,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InternalServerError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InternalServerError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DeviceActivationNotAllowedWithUserTokenIssuer member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DeviceActivationNotAllowedWithUserTokenIssuer,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PasswordComplexityRequirementsNotMet member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PasswordComplexityRequirementsNotMet,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PasswordHistoryRequirementsNotMet member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PasswordHistoryRequirementsNotMet,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReturnItemPriceExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReturnItemPriceExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReturnTransactionTotalExceeded member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReturnTransactionTotalExceeded,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CredentialsNotConfigured member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CredentialsNotConfigured,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PolicyBypassNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PolicyBypassNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OnBehalfOfNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OnBehalfOfNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_IdentityProviderTypeNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_IdentityProviderTypeNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ChannelNotAccessibleInB2BOrganization member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ChannelNotAccessibleInB2BOrganization,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_B2CCustomerAccessB2BChannelNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_B2CCustomerAccessB2BChannelNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CommerceCustomerIdentityNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CommerceCustomerIdentityNotFound
    }
    
    /**
     * StorageErrors enum type.
     */
    export enum StorageErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CriticalStorageError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CriticalStorageError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnexpectedNumberOfRowsError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnexpectedNumberOfRowsError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ObjectVersionMismatchError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ObjectVersionMismatchError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_StorageRequestTimeout member.
         */
        Microsoft_Dynamics_Commerce_Runtime_StorageRequestTimeout,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UpdateOfReadOnlyRowError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UpdateOfReadOnlyRowError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TransientStorageError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TransientStorageError,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ValueTooLong member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ValueTooLong
    }
    
    /**
     * VersionNotSupportedErrors enum type.
     */
    export enum VersionNotSupportedErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RetailServerApiVersionNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RetailServerApiVersionNotSupported
    }
    
    /**
     * PaymentErrors enum type.
     */
    export enum PaymentErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToCapturePayment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToCapturePayment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToAuthorizePayment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToAuthorizePayment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToRefundPayment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToRefundPayment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToCancelPayment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToCancelPayment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToGetCardPaymentAcceptPoint member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToGetCardPaymentAcceptPoint,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToRetrieveCardPaymentAcceptResult member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToRetrieveCardPaymentAcceptResult,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidCashBackAmount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidCashBackAmount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ManualCardNumberNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ManualCardNumberNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TenderLineCannotBeVoided member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TenderLineCannotBeVoided,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidPaymentRequest member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidPaymentRequest,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentAlreadyVoided member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentAlreadyVoided,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidLoyaltyCardNumber member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidLoyaltyCardNumber,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GiftCardCurrencyMismatch member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GiftCardCurrencyMismatch,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GiftCardBalanceInquiryFailed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GiftCardBalanceInquiryFailed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NoResponseFromGatewayForGiftCardBalanceInquiry member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NoResponseFromGatewayForGiftCardBalanceInquiry,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentAmountExceedsGiftBalance member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentAmountExceedsGiftBalance,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_BlockedLoyaltyCard member.
         */
        Microsoft_Dynamics_Commerce_Runtime_BlockedLoyaltyCard,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NoTenderLoyaltyCard member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NoTenderLoyaltyCard,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotEnoughRewardPoints member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotEnoughRewardPoints,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RefundAmountMoreThanAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RefundAmountMoreThanAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NoMoreThanOneLoyaltyTender member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NoMoreThanOneLoyaltyTender,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentUsingUnauthorizedAccount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentUsingUnauthorizedAccount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentIsNotAllowedForCustomerOrderDepositAndCancellation member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentIsNotAllowedForCustomerOrderDepositAndCancellation,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentRequiresMerchantProperties member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentRequiresMerchantProperties,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentExceedsTotalAmountForCarryOutItems member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentExceedsTotalAmountForCarryOutItems,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentExceedsTotalAmountForCarryOutAndReturnItems member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentExceedsTotalAmountForCarryOutAndReturnItems,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountLimitSignDifferentFromAmountDue member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountLimitSignDifferentFromAmountDue,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountLimitSignDifferentFromTotalCustomerAccountPayment member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountLimitSignDifferentFromTotalCustomerAccountPayment,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentExceedsCustomerAccountFloorLimit member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentExceedsCustomerAccountFloorLimit,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToAuthorizePaymentCardTypeMissingOrNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToAuthorizePaymentCardTypeMissingOrNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_FraudRisk member.
         */
        Microsoft_Dynamics_Commerce_Runtime_FraudRisk,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TokenizedPaymentCardNotExpected member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TokenizedPaymentCardNotExpected,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultipleCustomerAccountPaymentsNotAllowed member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultipleCustomerAccountPaymentsNotAllowed,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentForCustomerWithoutAllowOnAccount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentForCustomerWithoutAllowOnAccount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentNotAllowedForOpenInvoices member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentNotAllowedForOpenInvoices,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToAuthorizePaymentCardAdditionalContextRequired member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToAuthorizePaymentCardAdditionalContextRequired,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OrderManager_CreditMemo_MissingId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OrderManager_CreditMemo_MissingId,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableToReadCardTokenInfo member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableToReadCardTokenInfo,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TenderLineIsNotAvailableInSalesTransaction member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TenderLineIsNotAvailableInSalesTransaction,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentExceedsAvailableCreditLimit member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountPaymentExceedsAvailableCreditLimit,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SameCreditMemoUsedInTransaction member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SameCreditMemoUsedInTransaction
    }
    
    /**
     * FiscalIntegrationServiceErrors enum type.
     */
    export enum FiscalIntegrationServiceErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidProfilesConfiguration member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidProfilesConfiguration,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_FiscalService_NotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_FiscalService_NotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableResolveRegistrationProcess member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableResolveRegistrationProcess,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnableResolveTechnicalProfileForRegistrationProcessLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnableResolveTechnicalProfileForRegistrationProcessLine
    }
    
    /**
     * CommerceDataExchangeErrors enum type.
     */
    export enum CommerceDataExchangeErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CdxDataPackageApplicationFailure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CdxDataPackageApplicationFailure,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CdxSyncLibraryHealthCheckFailure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CdxSyncLibraryHealthCheckFailure
    }
    
    /**
     * TaskManagementErrorCode enum type.
     */
    export enum TaskManagementErrorCode {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CreateTaskFailure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CreateTaskFailure = 1,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GetTaskFailure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GetTaskFailure = 2,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UpdateTaskFailure member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UpdateTaskFailure = 3,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphCallTimeOut member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphCallTimeOut = 4,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphServiceUnauthorized member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphServiceUnauthorized = 5,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphServiceNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphServiceNotFound = 6,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphServiceConflict member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphServiceConflict = 7,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphServiceVersionMismatch member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphServiceVersionMismatch = 8,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphServiceGeneralError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphServiceGeneralError = 9,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumActiveTasksInProject member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumActiveTasksInProject = 10,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumAssigneesInTasks member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumAssigneesInTasks = 11,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumTasksAssignedToUser member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumTasksAssignedToUser = 12,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumTasksCreatedByUser member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumTasksCreatedByUser = 13,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumTasksInProject member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumTasksInProject = 14,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumBucketsInProject member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumBucketsInProject = 15,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumChecklistItemsOnTask member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumChecklistItemsOnTask = 16,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumPlannerPlans member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumPlannerPlans = 17,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumProjectsOwnedByUser member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumProjectsOwnedByUser = 18,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumProjectsSharedWithUser member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumProjectsSharedWithUser = 19,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumReferencesOnTask member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumReferencesOnTask = 20,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumUsersSharedWithProject member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_MaximumUsersSharedWithProject = 21,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_General member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphService_Forbidden_General = 22,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphServiceNotValidData member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphServiceNotValidData = 23,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphServiceInternalServerError member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphServiceInternalServerError = 24,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_GraphServiceUnavailable member.
         */
        Microsoft_Dynamics_Commerce_Runtime_GraphServiceUnavailable = 25,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TaskService_FailedToGetPlanId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TaskService_FailedToGetPlanId = 26,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TaskService_FailedToFindExternalSubId member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TaskService_FailedToFindExternalSubId = 27,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TaskService_EmptyGraphToken member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TaskService_EmptyGraphToken = 28
    }
    
    /**
     * PricingDataValidationErrors enum type.
     */
    export enum PricingDataValidationErrors {
      
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MixAndMatchDiscountWithInvalidLineGroups member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MixAndMatchDiscountWithInvalidLineGroups,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MixAndMatchDiscountWithNoLineGroups member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MixAndMatchDiscountWithNoLineGroups,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_StartDateTimeLaterThanEndDateTime member.
         */
        Microsoft_Dynamics_Commerce_Runtime_StartDateTimeLaterThanEndDateTime,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PricingPropertyHandlerNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PricingPropertyHandlerNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultiplePricingPropertyHandlerFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultiplePricingPropertyHandlerFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PriceTradeAgreementRequestPropertyValueCannotBeNull member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PriceTradeAgreementRequestPropertyValueCannotBeNull,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CrossStoreGetActivePriceNotSupportedInOnlineChannel member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CrossStoreGetActivePriceNotSupportedInOnlineChannel,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AmbiguousParameters member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AmbiguousParameters,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PriceAttributeHandlerNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PriceAttributeHandlerNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultiplePriceAttributeHandlerFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultiplePriceAttributeHandlerFound
    }
    
    /**
     * ProductPricingConfigurationErrorCode enum type.
     */
    export enum ProductPricingConfigurationErrorCode {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The MissingItemId member.
         */
        MissingItemId = 1,
        
        /**
         * The MissingUnitOfMeasure member.
         */
        MissingUnitOfMeasure = 2,
        
        /**
         * The InvalidQuantity member.
         */
        InvalidQuantity = 4
    }
    
    /**
     * OrderDataValidationErrors enum type.
     */
    export enum OrderDataValidationErrors {
      
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidPickupTimeslot member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidPickupTimeslot,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidPickupTimeslotAvailabilitiesSearchOption member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidPickupTimeslotAvailabilitiesSearchOption,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NonInvoicelinesNotAllowedForSalesInvoice member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NonInvoicelinesNotAllowedForSalesInvoice,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidTaxOverrideCode member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidTaxOverrideCode,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OrderPickupForCheckInNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OrderPickupForCheckInNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_OrderPickupForCheckInNotValid member.
         */
        Microsoft_Dynamics_Commerce_Runtime_OrderPickupForCheckInNotValid,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotLoadTransactionFromHeadquarters member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotLoadTransactionFromHeadquarters,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReturnSerialNumberMismatch member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReturnSerialNumberMismatch,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MultipleQuickOrdersPerCustomer member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MultipleQuickOrdersPerCustomer,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MustKeyInEqualLowerPriceForInvoiceLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MustKeyInEqualLowerPriceForInvoiceLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_MustKeyInGreatherThanZeroForInvoiceLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_MustKeyInGreatherThanZeroForInvoiceLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerInSuspendedCartNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerInSuspendedCartNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ReturnReasonCodeNotProvided member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ReturnReasonCodeNotProvided,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_StoreIdDoesNotExist member.
         */
        Microsoft_Dynamics_Commerce_Runtime_StoreIdDoesNotExist,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedInCartWithNonAdminHavingInvoiceAccount member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvoiceLineNotAllowedInCartWithNonAdminHavingInvoiceAccount,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DeliveryAddressIsMissingCountryOrRegionCode member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DeliveryAddressIsMissingCountryOrRegionCode,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerAccountMismatchBetweenCartAndTenderLine member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerAccountMismatchBetweenCartAndTenderLine,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ChargeDescriptionExceededMaximumLength member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ChargeDescriptionExceededMaximumLength,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnitOfMeasureConversionNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnitOfMeasureConversionNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidSalesTransactionShippingAddress member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidSalesTransactionShippingAddress,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidSalesTransactionDeliveryDate member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidSalesTransactionDeliveryDate,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidSalesTransactionDeliveryMode member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidSalesTransactionDeliveryMode,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotOverrideDepositForB2bCustomer member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotOverrideDepositForB2bCustomer,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_StoreNumberMustBeProvidedWhenItemSetPicked member.
         */
        Microsoft_Dynamics_Commerce_Runtime_StoreNumberMustBeProvidedWhenItemSetPicked,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_ProductIsNotGiftCard member.
         */
        Microsoft_Dynamics_Commerce_Runtime_ProductIsNotGiftCard,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidTransactionTypeForRecalledOrder member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidTransactionTypeForRecalledOrder,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_DuplicatedCartLines member.
         */
        Microsoft_Dynamics_Commerce_Runtime_DuplicatedCartLines,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidForceCompleteTransactionUsage member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidForceCompleteTransactionUsage,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_TransactionAlreadyExistsDiffersByType member.
         */
        Microsoft_Dynamics_Commerce_Runtime_TransactionAlreadyExistsDiffersByType,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_AsynchronousOrderCancellationWorkflowAlreadyExists member.
         */
        Microsoft_Dynamics_Commerce_Runtime_AsynchronousOrderCancellationWorkflowAlreadyExists,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidAsynchronousCancellationTargetOrder member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidAsynchronousCancellationTargetOrder,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotCreateSynchronousCustomerOrderForAsyncCustomer member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotCreateSynchronousCustomerOrderForAsyncCustomer,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_UnsupportedOrderSearchSortColumn member.
         */
        Microsoft_Dynamics_Commerce_Runtime_UnsupportedOrderSearchSortColumn,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_RetailOperationForGettingTenderTypeIsNotSupported member.
         */
        Microsoft_Dynamics_Commerce_Runtime_RetailOperationForGettingTenderTypeIsNotSupported,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_SalesOrderNotValidForCancellationRequest member.
         */
        Microsoft_Dynamics_Commerce_Runtime_SalesOrderNotValidForCancellationRequest,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CannotCreateCart member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CannotCreateCart,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_CustomerOrderCannotIncludeCashAndCarryReturnsFlight member.
         */
        Microsoft_Dynamics_Commerce_Runtime_CustomerOrderCannotIncludeCashAndCarryReturnsFlight
    }
    
    /**
     * PaymentConfigurationErrors enum type.
     */
    export enum PaymentConfigurationErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentConnectorNotFound member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentConnectorNotFound,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_LoyaltyCardPaymentNotConfigured member.
         */
        Microsoft_Dynamics_Commerce_Runtime_LoyaltyCardPaymentNotConfigured,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_NotValidCardTypeInformation member.
         */
        Microsoft_Dynamics_Commerce_Runtime_NotValidCardTypeInformation,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidPaymentRequest member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidPaymentRequest,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_InvalidDataInTokenizedCard member.
         */
        Microsoft_Dynamics_Commerce_Runtime_InvalidDataInTokenizedCard,
        
        /**
         * The Microsoft_Dynamics_Commerce_Runtime_PaymentConnectorFilesNotFoundWhileLoadingAssemblies member.
         */
        Microsoft_Dynamics_Commerce_Runtime_PaymentConnectorFilesNotFoundWhileLoadingAssemblies
    }
    
    /**
     * TaxLimitBase enum type.
     */
    export enum TaxLimitBase {
      
        /**
         * The LineWithoutVat member.
         */
        LineWithoutVat = 0,
        
        /**
         * The UnitWithoutVat member.
         */
        UnitWithoutVat = 1,
        
        /**
         * The InvoiceWithoutVat member.
         */
        InvoiceWithoutVat = 2,
        
        /**
         * The LineWithVat member.
         */
        LineWithVat = 3,
        
        /**
         * The UnitWithVat member.
         */
        UnitWithVat = 4,
        
        /**
         * The InvoiceWithVat member.
         */
        InvoiceWithVat = 5
    }
    
    /**
     * OnlineStoreCustomerType enum type.
     */
    export enum OnlineStoreCustomerType {
      
        /**
         * The B2C member.
         */
        B2C = 0,
        
        /**
         * The B2B member.
         */
        B2B = 1
    }
    
    /**
     * BusinessPartnerOperationDeliveryType enum type.
     */
    export enum BusinessPartnerOperationDeliveryType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Email member.
         */
        Email = 1
    }
    
    /**
     * ProspectType enum type.
     */
    export enum ProspectType {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Buyer member.
         */
        Buyer = 1,
        
        /**
         * The BuyerSeller member.
         */
        BuyerSeller = 2
    }
    
    /**
     * WrongEndpointErrors enum type.
     */
    export enum WrongEndpointErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Commerce_WrongEndpoint member.
         */
        Microsoft_Dynamics_Commerce_WrongEndpoint
    }
    
    /**
     * RetailServerApiErrors enum type.
     */
    export enum RetailServerApiErrors {
      
        /**
         * The None member.
         */
        None,
        
        /**
         * The Microsoft_Dynamics_Internal_Server_Error member.
         */
        Microsoft_Dynamics_Internal_Server_Error,
        
        /**
         * The Microsoft_Dynamics_RetailServer_BadRequest member.
         */
        Microsoft_Dynamics_RetailServer_BadRequest,
        
        /**
         * The Microsoft_Dynamics_RetailServer_RequestTooLarge member.
         */
        Microsoft_Dynamics_RetailServer_RequestTooLarge,
        
        /**
         * The Microsoft_Dynamics_RetailServer_ODataModelError member.
         */
        Microsoft_Dynamics_RetailServer_ODataModelError,
        
        /**
         * The Microsoft_Dynamics_RetailServer_MissingRequiredArgument member.
         */
        Microsoft_Dynamics_RetailServer_MissingRequiredArgument,
        
        /**
         * The Microsoft_Dynamics_RetailServer_InvalidArgumentType member.
         */
        Microsoft_Dynamics_RetailServer_InvalidArgumentType,
        
        /**
         * The Microsoft_Dynamics_RetailServer_ParameterHasNullValue member.
         */
        Microsoft_Dynamics_RetailServer_ParameterHasNullValue,
        
        /**
         * The Microsoft_Dynamics_RetailServer_MultipleValuesOfSameArgument member.
         */
        Microsoft_Dynamics_RetailServer_MultipleValuesOfSameArgument,
        
        /**
         * The Microsoft_Dynamics_RetailServer_ODataControllerError member.
         */
        Microsoft_Dynamics_RetailServer_ODataControllerError
    }
    
    /**
     * ExceptionSeverity enum type.
     */
    export enum ExceptionSeverity {
      
        /**
         * The None member.
         */
        None = 0,
        
        /**
         * The Error member.
         */
        Error = 1,
        
        /**
         * The Warning member.
         */
        Warning = 2,
        
        /**
         * The Critical member.
         */
        Critical = 3,
        
        /**
         * The Informational member.
         */
        Informational = 4
    }
    
    /**
     * Category entity interface.
     */
    export interface Category {
        RecordId: number;
        OfflineImage?: string;
        Name?: string;
        ParentCategory?: number;
        DisplayOrder?: number;
        LocalizedDescription?: string;
        Images?: MediaLocation[];
        NameTranslations?: TextValueTranslation[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Cart entity interface.
     */
    export interface Cart {
        AffiliationLines?: AffiliationLoyaltyTier[];
        IsRequiredAmountPaid?: boolean;
        IsDiscountFullyCalculated?: boolean;
        IgnoreDiscountCalculation?: boolean;
        AmountDue?: number;
        AmountPaid?: number;
        AttributeValues?: AttributeValueBase[];
        IsTaxIncludedInPrice?: boolean;
        BeginDateTime?: Date;
        BusinessDate?: Date;
        CancellationChargeAmount?: number;
        EstimatedShippingAmount?: number;
        CartLines?: CartLine[];
        CartTypeValue?: number;
        ChannelId?: number;
        ChargeAmount?: number;
        CustomerOrderRemainingBalance?: number;
        ChargeLines?: ChargeLine[];
        TaxViewLines?: TaxViewLine[];
        Comment?: string;
        InvoiceComment?: string;
        Coupons?: Coupon[];
        CustomerId?: string;
        CustomerOrderModeValue?: number;
        DeliveryMode?: string;
        DeliveryModeChargeAmount?: number;
        DiscountAmount?: number;
        DiscountAmountWithoutTax?: number;
        DiscountCodes?: string[];
        Id: string;
        SuspendedCartId?: string;
        TransactionTypeValue?: number;
        CustomerAccountDepositLines?: CustomerAccountDepositLine[];
        IncomeExpenseLines?: IncomeExpenseLine[];
        IncomeExpenseTotalAmount?: number;
        IsReturnByReceipt?: boolean;
        ReturnTransactionHasLoyaltyPayment?: boolean;
        IsFavorite?: boolean;
        IsRecurring?: boolean;
        IsSuspended?: boolean;
        LoyaltyCardId?: string;
        ModifiedDateTime?: Date;
        Name?: string;
        OrderNumber?: string;
        AvailableDepositAmount?: number;
        OverriddenDepositAmount?: number;
        OverriddenDepositWithoutCarryoutAmount?: number;
        PrepaymentAmountPaid?: number;
        PrepaymentRoundingDifference?: number;
        PrepaymentAppliedOnPickup?: number;
        PrepaymentAmountInvoiced?: number;
        PromotionLines?: string[];
        QuotationExpiryDate?: Date;
        ReasonCodeLines?: ReasonCodeLine[];
        ReceiptEmail?: string;
        RequestedDeliveryDate?: Date;
        RequiredDepositAmount?: number;
        RequiredDepositWithoutCarryoutAmount?: number;
        SalesId?: string;
        ShippingAddress?: Address;
        StaffId?: string;
        SubtotalAmount?: number;
        SubtotalAmountWithoutTax?: number;
        NetPrice?: number;
        SubtotalSalesAmount?: number;
        TaxAmount?: number;
        TaxOnCancellationCharge?: number;
        TaxOnShippingCharge?: number;
        TaxOnNonShippingCharges?: number;
        TaxOverrideCode?: string;
        TenderLines?: TenderLine[];
        RefundableTenderLines?: TenderLine[];
        TerminalId?: string;
        TotalAmount?: number;
        TotalSalesAmount?: number;
        TotalReturnAmount?: number;
        TotalCarryoutSalesAmount?: number;
        TotalCustomerOrderSalesAmount?: number;
        TotalManualDiscountAmount?: number;
        TotalManualDiscountPercentage?: number;
        WarehouseId?: string;
        IsCreatedOffline?: boolean;
        CartStatusValue?: number;
        ReceiptTransactionTypeValue?: number;
        CommissionSalesGroup?: string;
        Version?: number;
        TotalItems?: number;
        HasTaxCalculationTriggered?: boolean;
        MerchantProperties?: PaymentMerchantInformation[];
        HasChargeCalculationTriggered?: boolean;
        FiscalTransactions?: FiscalTransaction[];
        ShippingChargeAmount?: number;
        OtherChargeAmount?: number;
        PeriodicDiscountsCalculateScopeValue?: number;
        TaxCalculationTypeValue?: number;
        Notes?: Note[];
        CustomerRequisition?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Customer entity interface.
     */
    export interface Customer {
        AccountNumber: string;
        RecordId?: number;
        CreatedDateTime?: Date;
        ChargeGroup?: string;
        PriceGroup?: string;
        IsCustomerTaxInclusive?: boolean;
        Phone?: string;
        PhoneRecordId?: number;
        PhoneExt?: string;
        Cellphone?: string;
        Email?: string;
        EmailRecordId?: number;
        Url?: string;
        UrlRecordId?: number;
        Name?: string;
        PersonNameId?: number;
        FirstName?: string;
        MiddleName?: string;
        LastName?: string;
        DirectoryPartyRecordId?: number;
        PartyNumber?: string;
        CustomerTypeValue?: number;
        Language?: string;
        CustomerGroup?: string;
        CurrencyCode?: string;
        CNPJCPFNumber?: string;
        IdentificationNumber?: string;
        InvoiceAccount?: string;
        MandatoryCreditLimit?: boolean;
        CreditRating?: string;
        CreditLimit?: number;
        Balance?: number;
        Blocked?: boolean;
        BlockedType?: number;
        UseOrderNumberReference?: boolean;
        OrganizationId?: string;
        UsePurchaseRequest?: boolean;
        MultilineDiscountGroup?: string;
        TotalDiscountGroup?: string;
        LineDiscountGroup?: string;
        TaxGroup?: string;
        SalesTaxGroup?: string;
        CommissionSalesGroupId?: string;
        TaxExemptNumber?: string;
        VatNumber?: string;
        TaxOffice?: string;
        NonChargeableAccount?: boolean;
        Tag?: string;
        ReceiptSettings?: number;
        ReceiptEmail?: string;
        OptOutPersonalization?: boolean;
        OptOutWebActivityTracking?: boolean;
        RetailCustomerTableRecordId?: number;
        OfflineImage?: string;
        IsAsyncCustomer?: boolean;
        NewCustomerPartyNumber?: string;
        CustomerAffiliations?: CustomerAffiliation[];
        Addresses?: Address[];
        Attributes?: CustomerAttribute[];
        Images?: MediaLocation[];
        TitleRecordId?: number;
        IsFloorLimitBlocked?: boolean;
        IsB2b?: boolean;
        IsB2bAdmin?: boolean;
        BusinessPartnerId?: string;
        Contacts?: ContactInfo[];
        AllowOnAccountPayment?: boolean;
        DefaultPaymentMethod?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Employee entity interface.
     */
    export interface Employee {
        StaffId: string;
        NameOnReceipt?: string;
        Name?: string;
        CultureName?: string;
        NumberOfDaysToPasswordExpiry?: number;
        Permissions?: EmployeePermissions;
        Images?: MediaLocation[];
        DefaultImage?: string;
        DefaultCommissionSalesGroup?: string;
        IdentifierTypeValue?: number;
        RecordId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Checklist entity interface.
     */
    export interface Checklist {
        RecordId: number;
        Tasks?: ChecklistTask[];
        Version?: string;
        ProcessId?: string;
        Name?: string;
        Description?: string;
        AssignedToChannelId?: number;
        AssignedToWorkerPersonnelNumber?: string;
        StatusValue?: number;
        StartDateTime?: Date;
        EndDateTime?: Date;
        TargetDateTime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SalesOrder entity interface.
     */
    export interface SalesOrder {
        DocumentStatusValue?: number;
        RecordId?: number;
        StatusValue?: number;
        McrOrderStopped?: boolean;
        Shipments?: Shipment[];
        AggregateInventoryQuantities?: InventoryQuantities;
        UnifiedDeliveryInformation?: DeliveryInformation;
        PaymentStatusValue?: number;
        DetailedOrderStatusValue?: number;
        AffiliationLoyaltyTierLines?: SalesAffiliationLoyaltyTier[];
        IsRequiredAmountPaid?: boolean;
        IsDiscountFullyCalculated?: boolean;
        IgnoreDiscountCalculation?: boolean;
        AmountDue?: number;
        EstimatedShippingAmount?: number;
        AmountPaid?: number;
        CustomerOrderRemainingBalance?: number;
        AttributeValues?: AttributeValueBase[];
        AvailableDepositAmount?: number;
        BeginDateTime?: Date;
        CreatedDateTime?: Date;
        BusinessDate?: Date;
        CalculatedDepositAmount?: number;
        CancellationCharge?: number;
        ChannelId?: number;
        ChannelReferenceId?: string;
        ChargeAmount?: number;
        ChargeLines?: ChargeLine[];
        Comment?: string;
        Coupons?: Coupon[];
        InvoiceComment?: string;
        ContactInformationCollection?: ContactInformation[];
        CurrencyCode?: string;
        CustomerAccountDepositLines?: CustomerAccountDepositLine[];
        CustomerId?: string;
        CustomerOrderModeValue?: number;
        CustomerOrderTypeValue?: number;
        DeliveryMode?: string;
        DeliveryModeChargeAmount?: number;
        DiscountAmount?: number;
        DiscountAmountWithoutTax?: number;
        NetPrice?: number;
        DiscountCodes?: string[];
        EntryStatusValue?: number;
        GrossAmount?: number;
        HasLoyaltyPayment?: boolean;
        Id: string;
        InternalTransactionId?: string;
        SuspendedTransactionId?: string;
        IncomeExpenseLines?: IncomeExpenseLine[];
        IncomeExpenseTotalAmount?: number;
        InventoryLocationId?: string;
        IsCreatedOffline?: boolean;
        IsReturnByReceipt?: boolean;
        IsSuspended?: boolean;
        IsTaxIncludedInPrice?: boolean;
        IsTaxExemptedForPriceInclusive?: boolean;
        LineDiscount?: number;
        LineDiscountCalculationTypeValue?: number;
        LoyaltyCardId?: string;
        LoyaltyDiscountAmount?: number;
        LoyaltyManualDiscountAmount?: number;
        LoyaltyRewardPointLines?: LoyaltyRewardPointLine[];
        ModifiedDateTime?: Date;
        Name?: string;
        NetAmount?: number;
        NetAmountWithoutTax?: number;
        NetAmountWithNoTax?: number;
        NetAmountWithTax?: number;
        NumberOfItems?: number;
        OverriddenDepositAmount?: number;
        OverriddenDepositWithoutCarryoutAmount?: number;
        PeriodicDiscountAmount?: number;
        TenderDiscountAmount?: number;
        PrepaymentAmountAppliedOnPickup?: number;
        PrepaymentAmountInvoiced?: number;
        PrepaymentAmountPaid?: number;
        PrepaymentRoundingDifference?: number;
        QuotationExpiryDate?: Date;
        ReasonCodeLines?: ReasonCodeLine[];
        ReceiptEmail?: string;
        ReceiptId?: string;
        RequestedDeliveryDate?: Date;
        ConfirmedShipDate?: Date;
        RequiredDepositAmount?: number;
        RequiredDepositWithoutCarryoutAmount?: number;
        ReturnTransactionHasLoyaltyPayment?: boolean;
        SalesId?: string;
        SalesPaymentDifference?: number;
        SalesLines?: SalesLine[];
        ShiftId?: number;
        ShiftTerminalId?: string;
        ShippingAddress?: Address;
        StaffId?: string;
        StatementCode?: string;
        StoreId?: string;
        SubtotalAmount?: number;
        SubtotalAmountWithoutTax?: number;
        SubtotalSalesAmount?: number;
        TaxAmount?: number;
        TaxAmountExclusive?: number;
        TaxAmountInclusive?: number;
        TaxLines?: TaxLine[];
        TaxOnCancellationCharge?: number;
        TaxOnShippingCharge?: number;
        TaxOnNonShippingCharges?: number;
        TaxOverrideCode?: string;
        TenderLines?: TenderLine[];
        RefundableTenderLines?: TenderLine[];
        TerminalId?: string;
        TotalAmount?: number;
        TotalSalesAmount?: number;
        TotalReturnAmount?: number;
        TotalCarryoutSalesAmount?: number;
        TotalCustomerOrderSalesAmount?: number;
        TotalDiscount?: number;
        TotalManualDiscountAmount?: number;
        TotalManualDiscountPercentage?: number;
        TransactionTypeValue?: number;
        TaxCalculationTypeValue?: number;
        SalesInvoiceAmount?: number;
        GiftCardActiveFrom?: Date;
        GiftCardBalance?: number;
        GiftCardExpireDate?: Date;
        GiftCardHistoryDetails?: string;
        GiftCardIssueAmount?: number;
        GiftCardIdMasked?: string;
        CommissionSalesGroup?: string;
        IsCommissionSalesGroupOverriddenByCustomer?: boolean;
        CommissionSalesGroupSetByCashier?: string;
        HasTaxCalculationTriggered?: boolean;
        HasChargeCalculationTriggered?: boolean;
        ShippingChargeAmount?: number;
        OtherChargeAmount?: number;
        PeriodicDiscountsCalculateScopeValue?: number;
        CustomerName?: string;
        OriginalOrderTransactionId?: string;
        Notes?: Note[];
        CustomerRequisition?: string;
        FiscalTransactions?: FiscalTransaction[];
        LanguageId?: string;
        SalesAgreementRecordId?: number;
        TransactionDate?: Date;
        TransactionTime?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Shift entity interface.
     */
    export interface Shift {
        ShiftId: number;
        TerminalId: string;
        StartingAmountTotal: number;
        FloatingEntryAmountTotal: number;
        AddToTenderAmountTotal: number;
        SafeDropTotal: number;
        BankDropTotal: number;
        RemoveTenderAmountTotal: number;
        DeclareTenderAmountTotal: number;
        OverShortTotal: number;
        TenderedTotal: number;
        ChangeTotal: number;
        IncomeAccountTotal: number;
        ExpenseAccountTotal: number;
        CashDrawer?: string;
        StoreRecordId?: number;
        StoreId?: string;
        StaffId?: string;
        CurrentStaffId?: string;
        StatusValue?: number;
        StartDateTime?: Date;
        CloseDateTime?: Date;
        ClosedAtTerminalId?: string;
        ClosedAtShiftId?: number;
        CurrentTerminalId?: string;
        SalesTotal?: number;
        StatusDateTime?: Date;
        ReturnsTotal?: number;
        PaidToAccountTotal?: number;
        TaxTotal?: number;
        ChargeTotal?: number;
        DiscountTotal?: number;
        RoundedAmountTotal?: number;
        CustomerCount?: number;
        SaleTransactionCount?: number;
        NoSaleTransactionCount?: number;
        VoidTransactionCount?: number;
        LogOnTransactionCount?: number;
        SuspendedTransactionCount?: number;
        TransactionCount?: number;
        ReceiptsCount?: number;
        ReturnsCount?: number;
        GoodsSoldQty?: number;
        ServicesSoldQty?: number;
        ReceiptCopiesCount?: number;
        ReceiptCopiesTotal?: number;
        PriceOverrideTotal?: number;
        SuspendedTotal?: number;
        SalesTotalIncludingTax?: number;
        SalesTotalExcludingTax?: number;
        SalesGrandTotal?: number;
        ReturnsGrandTotal?: number;
        TaxLines?: ShiftTaxLine[];
        TenderLines?: ShiftTenderLine[];
        AccountLines?: ShiftAccountLine[];
        IsShared?: boolean;
        StartingAmountRunningTotal?: number;
        GiftCardsTotal?: number;
        GiftCardCashOutTotal?: number;
        VoidedSalesTotal?: number;
        ShiftSalesTotal?: number;
        ShiftReturnsTotal?: number;
        HasPendingOfflineTransactions?: number;
        NumberOfUnreconciledLines?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * StockCountJournal entity interface.
     */
    export interface StockCountJournal {
        JournalId: string;
        RecordId?: string;
        Description?: string;
        InventLocationId?: string;
        DataAreaId?: string;
        StockCountTransactionLines?: StockCountJournalTransaction[];
        Worker?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OrgUnit entity interface.
     */
    export interface OrgUnit {
        OrgUnitNumber: string;
        RecordId: number;
        InventoryLocationId?: string;
        TaxGroup?: string;
        FunctionalityProfileId?: string;
        UseCustomerBasedTax?: boolean;
        UseCustomerBasedTaxExemption?: boolean;
        UseDestinationBasedTax?: boolean;
        Currency?: string;
        TimeZoneCode?: number;
        OrgUnitAddress?: Address;
        OrgUnitFullAddress?: string;
        OrgUnitName?: string;
        Latitude?: number;
        Longitude?: number;
        EmailReceiptProfileId?: string;
        ShippingWarehouseAddress?: Address;
        TaxRegistrations?: TaxRegistration[];
        EventNotificationProfileId?: string;
        OMOperatingUnitNumber?: string;
        Name?: string;
        DefaultCustomerAccount?: string;
        CategoryHierarchyId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Product entity interface.
     */
    export interface Product {
        RecordId: number;
        ProductName?: string;
        ProductNumber?: string;
        Description?: string;
        IsMasterProduct: boolean;
        IsKit: boolean;
        ItemId?: string;
        HasLinkedProducts: boolean;
        Rules: ProductRules;
        DefaultUnitOfMeasure?: string;
        Name?: string;
        Locale?: string;
        OfflineImage?: string;
        IsRemote?: boolean;
        ChangeTrackingInformation?: ProductChangeTrackingInformation;
        Image?: RichMediaLocations;
        UnitsOfMeasureSymbol?: string[];
        LinkedProducts?: LinkedProduct[];
        BasePrice?: number;
        Price?: number;
        AdjustedPrice?: number;
        RetailContext?: ProjectionDomain;
        PrimaryCategoryId?: number;
        CategoryIds?: number[];
        DisplayOrderInCategories?: DisplayOrderInCategory[];
        RelatedProducts?: RelatedProduct[];
        ProductsRelatedToThis?: RelatedProduct[];
        ProductSchema?: string[];
        ProductProperties?: ProductPropertyTranslation[];
        CompositionInformation?: ProductCompositionInformation;
        ParentKits?: KitComponent[];
        SearchName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductCatalog entity interface.
     */
    export interface ProductCatalog {
        RecordId: number;
        Name?: string;
        Description?: string;
        Language?: string;
        IsSnapshotEnabled: boolean;
        ValidFrom: Date;
        ValidTo: Date;
        CreatedOn: Date;
        ModifiedOn: Date;
        PublishedOn: Date;
        Images?: MediaLocation[];
        ChannelId?: number;
        DefaultImage?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CommerceList entity interface.
     */
    export interface CommerceList {
        Id: number;
        Name?: string;
        CustomerId?: string;
        CustomerName?: string;
        IsFavorite?: boolean;
        IsRecurring?: boolean;
        IsPrivate?: boolean;
        IsCollaborative?: boolean;
        CreatedDateTime?: Date;
        DueDateTime?: Date;
        CommerceListTypeValue?: number;
        CommerceListLines?: CommerceListLine[];
        CommerceListContributors?: CommerceListContributor[];
        CommerceListInvitations?: CommerceListInvitation[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductList entity interface.
     */
    export interface ProductList {
        Id: string;
        Name?: string;
        CustomerId?: string;
        CreatedDateTime?: Date;
        LastUpdated?: Date;
        DeletedDateTime?: Date;
        ProductListTypeValue?: number;
        DataAreaId?: string;
        ChannelId?: number;
        ProductListLines?: ProductListLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Recommendation entity interface.
     */
    export interface Recommendation {
        Id: string;
        RecommendationTypeValue?: number;
        Title?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TransferOrder entity interface.
     */
    export interface TransferOrder {
        OrderId: string;
        RecordId?: string;
        Status?: string;
        Lines?: number;
        TotalItems?: number;
        OrderTypeValue?: number;
        InventLocationIdFrom?: string;
        InventLocationIdTo?: string;
        QuantityShipped?: number;
        QuantityReceived?: number;
        QuantityShipNow?: number;
        QuantityReceiveNow?: number;
        QuantityShipRemaining?: number;
        QuantityReceiveRemaining?: number;
        ShipDate?: Date;
        ReceiveDate?: Date;
        DeliveryModeId?: string;
        OrderLines?: TransferOrderLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PurchaseOrder entity interface.
     */
    export interface PurchaseOrder {
        OrderId: string;
        RecordId?: string;
        Status?: string;
        Lines?: number;
        TotalItems?: number;
        OrderTypeValue?: number;
        TotalReceived?: number;
        OrderLines?: PurchaseOrderLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PickingList entity interface.
     */
    export interface PickingList {
        OrderId: string;
        RecordId?: string;
        Status?: string;
        Lines?: number;
        TotalItems?: number;
        OrderTypeValue?: number;
        InventLocationId?: string;
        DeliveryDate?: Date;
        DeliveryMode?: string;
        TotalReceived?: number;
        OrderLines?: PickingListLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Warehouse entity interface.
     */
    export interface Warehouse {
        InventLocation: string;
        Name?: string;
        IsWMSEnabled: boolean;
        DefaultInventoryStatus?: string;
        DefaultReceiptLocation?: string;
        DefaultLocationId?: string;
        DefaultIssueLocation?: string;
        Address?: Address;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ScanResult entity interface.
     */
    export interface ScanResult {
        ScannedText: string;
        MaskTypeValue?: number;
        Barcode?: Barcode;
        Product?: SimpleProduct;
        LoyaltyCard?: LoyaltyCard;
        GiftCard?: GiftCard;
        ExtensionProperties?: CommerceProperty[];
        Customer?: Customer;
        }
    
    /**
     * SalesOrderContextualOperationsMap entity interface.
     */
    export interface SalesOrderContextualOperationsMap {
        Id: string;
        ApplicableOperationsValues?: number[];
        ExtensionProperties?: CommerceProperty[];
        SalesOrder: SalesOrder;
        }
    
    /**
     * InventoryInboundOutboundDocument entity interface.
     */
    export interface InventoryInboundOutboundDocument {
        WorkDocumentId: string;
        TerminalId?: string;
        CommitRequestId?: string;
        ReceiveDate?: Date;
        ShipDate?: Date;
        Sender?: string;
        Receiver?: string;
        SenderDetails?: string;
        ReceiverDetails?: string;
        DeliveryMode?: string;
        OperationTypeValue?: number;
        StatusValue?: number;
        ReceiptId?: string;
        Note?: string;
        OperationResultMessage?: string;
        DocumentId?: string;
        LongVersion?: number;
        SourceDocument?: InventoryInboundOutboundSourceDocument;
        SourceDocumentTypeValue?: number;
        CreatedDateTime?: Date;
        NoteModifiedByStaffId?: string;
        NoteModifiedDateTime?: Date;
        DocumentTypeId?: string;
        Description?: string;
        StaffId?: string;
        TransactionDate?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * BusinessPartner entity interface.
     */
    export interface BusinessPartner {
        BusinessPartnerId: string;
        Name?: string;
        SellerChannelId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * BusinessPartnerUser entity interface.
     */
    export interface BusinessPartnerUser {
        B2BUserId: string;
        BusinessPartnerId?: string;
        FirstName?: string;
        LastName?: string;
        Email?: string;
        SpendingLimit?: number;
        LastOperationId?: string;
        StatusValue?: number;
        IsAdmin?: boolean;
        AccountNumber?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SuspendedCart entity interface.
     */
    export interface SuspendedCart {
        Id: string;
        ReceiptId?: string;
        ShiftId?: number;
        ShiftTerminalId?: string;
        ExtensionProperties?: CommerceProperty[];
        Cart?: Cart;
        }
    
    /**
     * ExtensibleEnumeration entity interface.
     */
    export interface ExtensibleEnumeration {
        Name: string;
        Value: number;
        }
    
    /**
     * ExtensibleEnumeration_1OfT entity interface.
     */
    export interface ExtensibleEnumeration_1OfT extends ExtensibleEnumeration {
        }
    
    /**
     * ExtensibleTransactionType entity interface.
     */
    export interface ExtensibleTransactionType extends ExtensibleEnumeration {
        }
    
    /**
     * ExtensibleSalesTransactionType entity interface.
     */
    export interface ExtensibleSalesTransactionType extends ExtensibleEnumeration {
        }
    
    /**
     * FulfillmentLineStatus entity interface.
     */
    export interface FulfillmentLineStatus extends ExtensibleEnumeration {
        }
    
    /**
     * FulfillmentLineDeliveryType entity interface.
     */
    export interface FulfillmentLineDeliveryType extends ExtensibleEnumeration {
        }
    
    /**
     * ExtensibleAddressType entity interface.
     */
    export interface ExtensibleAddressType extends ExtensibleEnumeration {
        }
    
    /**
     * ExtensibleLoyaltyRewardPointActivityEntryType entity interface.
     */
    export interface ExtensibleLoyaltyRewardPointActivityEntryType extends ExtensibleEnumeration {
        }
    
    /**
     * ExtensibleAttributeDataType entity interface.
     */
    export interface ExtensibleAttributeDataType extends ExtensibleEnumeration {
        }
    
    /**
     * ReleasedProductServiceType entity interface.
     */
    export interface ReleasedProductServiceType extends ExtensibleEnumeration {
        }
    
    /**
     * ExtensibleElectronicAddressType entity interface.
     */
    export interface ExtensibleElectronicAddressType extends ExtensibleEnumeration {
        }
    
    /**
     * ReceiptOutputFormatType entity interface.
     */
    export interface ReceiptOutputFormatType extends ExtensibleEnumeration {
        }
    
    /**
     * OrderLookupAdditionalCriteriaType entity interface.
     */
    export interface OrderLookupAdditionalCriteriaType extends ExtensibleEnumeration {
        }
    
    /**
     * Address entity interface.
     */
    export interface Address {
        Name?: string;
        Id?: string;
        FullAddress?: string;
        RecordId?: number;
        Street?: string;
        StreetNumber?: string;
        County?: string;
        CountyName?: string;
        City?: string;
        DistrictName?: string;
        State?: string;
        StateName?: string;
        ZipCode?: string;
        ThreeLetterISORegionName?: string;
        Phone?: string;
        PhoneRecordId?: number;
        PhoneExt?: string;
        Email?: string;
        EmailContent?: string;
        EmailRecordId?: number;
        Url?: string;
        UrlRecordId?: number;
        TwoLetterISORegionName?: string;
        Deactivate?: boolean;
        AttentionTo?: string;
        BuildingCompliment?: string;
        Postbox?: string;
        TaxGroup?: string;
        AddressTypeValue?: number;
        IsPrimary?: boolean;
        IsPrivate?: boolean;
        PartyNumber?: string;
        IsAsyncAddress?: boolean;
        DirectoryPartyTableRecordId?: number;
        DirectoryPartyLocationRecordId?: number;
        DirectoryPartyLocationRoleRecordId?: number;
        LogisticsLocationId?: string;
        LogisticsLocationRecordId?: number;
        LogisticsLocationExtRecordId?: number;
        LogisticsLocationRoleRecordId?: number;
        PhoneLogisticsLocationRecordId?: number;
        PhoneLogisticsLocationId?: string;
        EmailLogisticsLocationRecordId?: number;
        EmailLogisticsLocationId?: string;
        UrlLogisticsLocationRecordId?: number;
        UrlLogisticsLocationId?: string;
        ExpireRecordId?: number;
        SortOrder?: number;
        RoleCount?: number;
        DataAreaId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerAffiliation entity interface.
     */
    export interface CustomerAffiliation {
        RecordId?: number;
        RetailAffiliationId?: number;
        Name?: string;
        Description?: string;
        HideInChannels?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerBalances entity interface.
     */
    export interface CustomerBalances {
        Balance: number;
        PendingBalance: number;
        CreditLimit: number;
        InvoiceAccountBalance: number;
        InvoiceAccountPendingBalance: number;
        InvoiceAccountCreditLimit: number;
        OpenInvoiceBalance?: number;
        OpenInvoiceCount?: number;
        }
    
    /**
     * GlobalCustomer entity interface.
     */
    export interface GlobalCustomer {
        PartyNumber?: string;
        RecordId?: number;
        IsAsyncCustomer?: boolean;
        AccountNumber?: string;
        FullName?: string;
        FullAddress?: string;
        Phone?: string;
        Email?: string;
        CustomerTypeValue?: number;
        Images?: MediaLocation[];
        OfflineImage?: string;
        IsB2b?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeValue entity interface.
     */
    export interface AttributeValue {
        Name?: string;
        KeyName?: string;
        UnitOfMeasureSymbol?: string;
        DataTypeValue?: number;
        BooleanValue?: boolean;
        DateTimeOffsetValue?: Date;
        FloatValue?: number;
        IntegerValue?: number;
        TextValue?: string;
        CurrencyValue?: number;
        CurrencyCode?: string;
        AttributeValueId?: number;
        RecordId?: number;
        Swatches?: AttributeSwatch[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeValueBase entity interface.
     */
    export interface AttributeValueBase {
        Name?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Barcode entity interface.
     */
    export interface Barcode {
        BarcodeId?: string;
        BarcodePrice?: number;
        Quantity?: number;
        CustomerId?: string;
        EmployeeId?: string;
        SalespersonId?: string;
        EANLicenseId?: string;
        DataEntry?: string;
        DiscountCode?: string;
        GiftCardNumber?: string;
        LoyaltyCardNumber?: string;
        ItemBarcode?: ItemBarcode;
        EntryMethodTypeValue?: number;
        ItemType?: number;
        EnterDimensions?: boolean;
        ItemGroupId?: string;
        ItemDepartmentId?: string;
        ScaleItem?: boolean;
        ZeroPriceValid?: boolean;
        NegativeQuantity?: boolean;
        DiscountNotAllowed?: boolean;
        DateToBeBlocked?: Date;
        DateToBeActivated?: Date;
        CheckDigitValidated?: boolean;
        CouponId?: string;
        Message?: string;
        LineDiscountGroup?: string;
        MultilineDiscountGroup?: string;
        IncludedInTotalDiscount?: boolean;
        CostPrice?: number;
        BatchId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ItemBarcode entity interface.
     */
    export interface ItemBarcode {
        RecordId?: number;
        ItemId?: string;
        Description?: string;
        BarcodeSetupId?: string;
        ItemBarcodeValue?: string;
        InventoryDimensionId?: string;
        IsBlocked?: boolean;
        Display?: boolean;
        VariantId?: string;
        UnitId?: string;
        UseForInput?: boolean;
        UseForPrinting?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ButtonGrid entity interface.
     */
    export interface ButtonGrid {
        Id?: string;
        Name?: string;
        DefaultColor?: number;
        SpaceBetweenButtonsInPixels?: number;
        Buttons?: ButtonGridButton[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * GetButtonGridsByIdsCriteria entity interface.
     */
    export interface GetButtonGridsByIdsCriteria {
        ButtonGridIds?: string[];
        }
    
    /**
     * CartLine entity interface.
     */
    export interface CartLine {
        LineId?: string;
        TaxOverrideCode?: string;
        ItemId?: string;
        Barcode?: string;
        EntryMethodTypeValue?: number;
        Description?: string;
        InventoryDimensionId?: string;
        Comment?: string;
        ProductId?: number;
        WarehouseId?: string;
        Quantity?: number;
        Price?: number;
        ExtendedPrice?: number;
        TaxAmount?: number;
        SalesTaxGroupId?: string;
        ItemTaxGroupId?: string;
        TotalAmount?: number;
        NetAmountWithoutTax?: number;
        NetPrice?: number;
        DiscountAmountWithoutTax?: number;
        DiscountAmount?: number;
        LineDiscount?: number;
        LinePercentageDiscount?: number;
        LineManualDiscountPercentage?: number;
        LineManualDiscountAmount?: number;
        UnitOfMeasureSymbol?: string;
        ShippingAddress?: Address;
        DeliveryMode?: string;
        DeliveryModeChargeAmount?: number;
        RequestedDeliveryDate?: Date;
        PickupTimeslotStartDateTime?: Date;
        PickupTimeslotEndDateTime?: Date;
        IsWarrantyLine?: boolean;
        WarrantableTransactionId?: string;
        WarrantableSalesId?: string;
        WarrantableLineNumber?: number;
        WarrantableSerialNumber?: string;
        WarrantiedId?: string;
        ReturnTransactionId?: string;
        ReturnLineNumber?: number;
        ReturnInventTransId?: string;
        ReturnStore?: string;
        ReturnTerminalId?: string;
        IsVoided?: boolean;
        IsTaxOverideCodeTaxExempt?: boolean;
        IsGiftCardLine?: boolean;
        IsPriceKeyedIn?: boolean;
        GiftCardId?: string;
        GiftCardCurrencyCode?: string;
        GiftCardOperationValue?: number;
        GiftCardTypeValue?: number;
        SalesStatusValue?: number;
        QuantityOrdered?: number;
        QuantityNotProcessed?: number;
        QuantityReserved?: number;
        QuantityPicked?: number;
        QuantityPacked?: number;
        QuantityInvoiced?: number;
        QuantityCanceled?: number;
        FulfillmentStoreId?: string;
        SerialNumber?: string;
        ElectronicDeliveryEmail?: string;
        ElectronicDeliveryEmailContent?: string;
        IsPriceOverridden?: boolean;
        OriginalPrice?: number;
        IsInvoiceLine?: boolean;
        InvoiceId?: string;
        InvoiceAmount?: number;
        GiftCardBalance?: number;
        LineVersion?: number;
        PromotionLines?: string[];
        PriceLines?: PriceLine[];
        DiscountLines?: DiscountLine[];
        RelatedDiscountedLineIds?: string[];
        ReasonCodeLines?: ReasonCodeLine[];
        ChargeLines?: ChargeLine[];
        TaxLines?: TaxLine[];
        ReturnTaxLines?: TaxLine[];
        TaxRatePercent?: number;
        IsCustomerAccountDeposit?: boolean;
        LinkedParentLineId?: string;
        QuantityReturnable?: number;
        ExtensionProperties?: CommerceProperty[];
        LineNumber?: number;
        CommissionSalesGroup?: string;
        TrackingId?: string;
        StaffId?: string;
        QuantityRemained?: number;
        QuantityShipped?: number;
        CatalogId?: number;
        AttributeValues?: AttributeValueBase[];
        ThirdPartyGiftCardInfo?: ThirdPartyGiftCardInfo;
        BarcodeEmbeddedPrice?: number;
        PriceInBarcode?: boolean;
        InvoiceTypeValue?: number;
        InvoicedSalesId?: string;
        WarehouseLocation?: string;
        DetailedLineStatusValue?: number;
        SalesAgreementLineRecordId?: number;
        }
    
    /**
     * ThirdPartyGiftCardInfo entity interface.
     */
    export interface ThirdPartyGiftCardInfo {
        Amount?: number;
        Authorization?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CardTypeInfo entity interface.
     */
    export interface CardTypeInfo {
        RecordId?: number;
        TypeId?: string;
        Name?: string;
        PaymentMethodId?: string;
        CardTypeValue?: number;
        Issuer?: string;
        NumberFrom?: string;
        NumberTo?: string;
        CashBackLimit?: number;
        AllowManualInput?: boolean;
        CheckModulus?: boolean;
        HasTenderDiscount?: boolean;
        IsPinRequired?: boolean;
        IsExpirationDateRequired?: boolean;
        ConnectorName?: string;
        PaymentProcessorMethod?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CashDeclaration entity interface.
     */
    export interface CashDeclaration {
        RecordId?: number;
        Currency?: string;
        Amount?: number;
        CashTypeValue?: number;
        IncludeInQuickPayShortcuts?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * IncomeExpenseAccount entity interface.
     */
    export interface IncomeExpenseAccount {
        Amount?: number;
        AccountNumber?: string;
        AccountName?: string;
        AccountNameAlias?: string;
        AccountTypeValue?: number;
        Quantity?: number;
        Message1Line?: string;
        Message2Line?: string;
        SlipText1Line?: string;
        SlipText2Line?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * IncomeExpenseLine entity interface.
     */
    export interface IncomeExpenseLine {
        Amount?: number;
        IncomeExpenseAccount?: string;
        StoreNumber?: string;
        AccountTypeValue?: number;
        Terminal?: string;
        Shift?: string;
        TransactionStatusValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CartTenderLine entity interface.
     */
    export interface CartTenderLine {
        PaymentCard?: PaymentCard;
        TokenizedPaymentCard?: TokenizedPaymentCard;
        CardPaymentAcceptResult?: CardPaymentAcceptResult;
        IsLinkedRefund?: boolean;
        LinkedPaymentStore?: string;
        LinkedPaymentTerminalId?: string;
        LinkedPaymentTransactionId?: string;
        LinkedPaymentLineNumber?: number;
        LinkedPaymentCurrency?: string;
        TenderLineId?: string;
        Amount?: number;
        CashBackAmount?: number;
        AmountInTenderedCurrency?: number;
        AmountInCompanyCurrency?: number;
        Currency?: string;
        ExchangeRate?: number;
        CompanyCurrencyExchangeRate?: number;
        TenderTypeId?: string;
        SignatureData?: string;
        ReasonCodeLines?: ReasonCodeLine[];
        LineNumber?: number;
        GiftCardId?: string;
        GiftCardPin?: string;
        GiftCardExpirationYear?: number;
        GiftCardExpirationMonth?: number;
        CreditMemoId?: string;
        CustomerId?: string;
        LoyaltyCardId?: string;
        CardTypeId?: string;
        IsChangeLine?: boolean;
        IsHistorical?: boolean;
        IsVoidable?: boolean;
        StatusValue?: number;
        VoidStatusValue?: number;
        AuthorizedAmount?: number;
        PaymentRefRecId?: number;
        CardPaymentAccountId?: string;
        ProcessingTypeValue?: number;
        CardProcessorStatusValue?: number;
        LinkedPaymentRefRecId?: number;
        IsPolicyBypassed?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChargeLine entity interface.
     */
    export interface ChargeLine {
        ChargeLineId?: string;
        ChargeCode?: string;
        CurrencyCode?: string;
        ModuleTypeValue?: number;
        IsHeaderChargeProrated?: boolean;
        ChargeTypeValue?: number;
        ChargeMethodValue?: number;
        CalculatedAmount?: number;
        Value?: number;
        Description?: string;
        TransactionId?: string;
        MarkupAutoLineRecordId?: number;
        MarkupAutoTableRecId?: number;
        SaleLineNumber?: number;
        FromAmount?: number;
        ToAmount?: number;
        Keep?: number;
        AmountRefunded?: number;
        ChargeLineOverrides?: ChargeLineOverride[];
        ReasonCodeLines?: ReasonCodeLine[];
        IsRefundable?: boolean;
        IsShipping?: boolean;
        IsOverridden?: boolean;
        IsInvoiced?: boolean;
        CalculatedProratedAmount?: number;
        SpecificUnitSymbol?: string;
        ItemId?: string;
        Quantity?: number;
        Price?: number;
        ItemTaxGroupId?: string;
        SalesTaxGroupId?: string;
        OriginalSalesTaxGroupId?: string;
        OriginalItemTaxGroupId?: string;
        TaxAmount?: number;
        SalesOrderUnitOfMeasure?: string;
        NetAmount?: number;
        NetAmountPerUnit?: number;
        GrossAmount?: number;
        TaxLines?: TaxLine[];
        TaxMeasures?: TaxMeasure[];
        TaxAmountExemptInclusive?: number;
        TaxAmountInclusive?: number;
        TaxAmountExclusive?: number;
        NetAmountWithAllInclusiveTax?: number;
        BeginDateTime?: Date;
        EndDateTime?: Date;
        TaxRatePercent?: number;
        IsReturnByReceipt?: boolean;
        ReturnLineTaxAmount?: number;
        ReturnTaxLines?: TaxLine[];
        TaxExemptPriceInclusiveReductionAmount?: number;
        TaxExemptPriceInclusiveOriginalPrice?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CityInfo entity interface.
     */
    export interface CityInfo {
        Name?: string;
        Description?: string;
        CountryRegionId?: string;
        StateId?: string;
        CountyId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CommissionSalesGroup entity interface.
     */
    export interface CommissionSalesGroup {
        GroupId?: string;
        Name?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ContactInformation entity interface.
     */
    export interface ContactInformation {
        Value?: string;
        ContactInformationTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeCategory entity interface.
     */
    export interface AttributeCategory {
        Value?: CommercePropertyValue;
        RecordId?: number;
        Name?: string;
        KeyName?: string;
        DataTypeValue?: number;
        Attribute?: number;
        NameTranslations?: TextValueTranslation[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeProduct entity interface.
     */
    export interface AttributeProduct {
        MetadataFlags?: ProductAttributeMetadataFlags;
        IsDimension?: boolean;
        RecordId?: number;
        Name?: string;
        KeyName?: string;
        DataTypeValue?: number;
        Attribute?: number;
        NameTranslations?: TextValueTranslation[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductComparisonEntry entity interface.
     */
    export interface ProductComparisonEntry {
        ProductId: number;
        AttributeValue?: AttributeValue;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductComparisonLine entity interface.
     */
    export interface ProductComparisonLine {
        AttributeRecordId: number;
        AttributeName?: string;
        ProductAttributeComparisonEntries?: ProductComparisonEntry[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerSearchField entity interface.
     */
    export interface CustomerSearchField {
        IsShortcut?: boolean;
        DisplayName?: string;
        CanBeRefined?: boolean;
        SearchField?: CustomerSearchFieldType;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerSearchByFieldCriteria entity interface.
     */
    export interface CustomerSearchByFieldCriteria {
        Criteria?: CustomerSearchByFieldCriterion[];
        DataLevelValue?: number;
        }
    
    /**
     * CustomerSearchByFieldCriterion entity interface.
     */
    export interface CustomerSearchByFieldCriterion {
        SearchTerm?: string;
        SearchField?: CustomerSearchFieldType;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerSearchFieldType entity interface.
     */
    export interface CustomerSearchFieldType extends ExtensibleEnumeration {
        }
    
    /**
     * OrderShipments entity interface.
     */
    export interface OrderShipments {
        SalesId?: string;
        ChannelId?: number;
        ChannelReferenceId?: string;
        TransactionId?: string;
        CreatedDateTime?: Date;
        StatusValue?: number;
        CurrencyCode?: string;
        CustomerId?: string;
        DeliveryMode?: string;
        GrossAmount?: number;
        ExtensionProperties?: CommerceProperty[];
        InventoryLocationId?: string;
        ReceiptId?: string;
        RequestedDeliveryDate?: Date;
        TotalAmount?: number;
        TaxAmount?: number;
        SalesLines?: SalesLine[];
        Shipments?: Shipment[];
        }
    
    /**
     * Shipment entity interface.
     */
    export interface Shipment {
        SalesId?: string;
        ShipmentId?: string;
        DeliveryAddress?: Address;
        ShipDate?: Date;
        DeliveryMode?: string;
        TermsOfDelivery?: string;
        WeightUnit?: string;
        TrackingNumber?: string;
        TrackingUrl?: string;
        LatestCarrierTrackingInfo?: TrackingInfo;
        CarrierId?: string;
        CarrierName?: string;
        ShippingWeight?: number;
        ShipmentLines?: ShipmentLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ShipmentLine entity interface.
     */
    export interface ShipmentLine {
        ShipmentLineId?: string;
        ItemId?: string;
        Description?: string;
        InventDimId?: string;
        OrderedQuantity?: number;
        DeliveredQuantity?: number;
        RemainingQuantity?: number;
        InventoryTransactionId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Transaction entity interface.
     */
    export interface Transaction {
        Id?: string;
        StoreId?: string;
        TerminalId?: string;
        IsCreatedOffline?: boolean;
        StaffId?: string;
        LanguageId?: string;
        ShiftId?: string;
        ShiftTerminalId?: string;
        Description?: string;
        ReceiptId?: string;
        GrossAmount?: number;
        TotalAmount?: number;
        CreatedDateTime?: Date;
        TransactionTypeValue?: number;
        TransactionStatusValue?: number;
        BeginDateTime?: Date;
        GiftCardActiveFrom?: Date;
        GiftCardBalance?: number;
        GiftCardExpireDate?: Date;
        GiftCardHistoryDetails?: string;
        GiftCardIssueAmount?: number;
        GiftCardIdMasked?: string;
        FromSafe?: string;
        ToSafe?: string;
        FromShiftTerminalId?: string;
        ToShiftTerminalId?: string;
        FromShiftId?: string;
        TransactionSourceContextTypeValue?: number;
        TransactionDestinationContextTypeValue?: number;
        ToShiftId?: string;
        TransactionDateTime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ShiftReconciliationLine entity interface.
     */
    export interface ShiftReconciliationLine extends Transaction {
        GroupId?: number;
        GroupDescription?: string;
        ShiftGroupLinesCount?: number;
        ShiftGroupLinesClosedCount?: number;
        AmountInOriginalCurrency?: number;
        TransactionCurrencyCode?: string;
        TenderType?: string;
        }
    
    /**
     * ShiftReconciliationLineRetrievalCriteria entity interface.
     */
    export interface ShiftReconciliationLineRetrievalCriteria {
        TransactionTypeValues?: number[];
        ShiftReconciliationLineStatusValue?: number;
        Shifts?: ShiftKey[];
        DestinationShift?: ShiftKey;
        SourceShift?: ShiftKey;
        SourceSafe?: string;
        DestinationSafe?: string;
        TransactionSourceContextTypeValue?: number;
        TransactionDestinationContextTypeValue?: number;
        }
    
    /**
     * SearchConfiguration entity interface.
     */
    export interface SearchConfiguration {
        ProductSortColumns?: SortColumn[];
        ProductSearchServiceTypeValue?: number;
        ProductSortColumnsLabels?: LocalizedText[];
        }
    
    /**
     * CustomerTimelineItem entity interface.
     */
    export interface CustomerTimelineItem {
        CustomerId?: string;
        Description?: string;
        Id?: string;
        EntityType?: string;
        TypeId?: string;
        StaffId?: string;
        StartDateTime?: Date;
        Title?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeDefinition entity interface.
     */
    export interface AttributeDefinition {
        RecordId: number;
        Name?: string;
        AttributeTypeName?: string;
        ExtDataType?: ExtensibleAttributeDataType;
        DataTypeValue?: number;
        IsHidden?: boolean;
        IsMandatory?: boolean;
        IsMultiValue?: boolean;
        IsEnumeration?: boolean;
        TranslationDetails?: AttributeTranslationDetails[];
        EnumerationDetails?: AttributeEnumeration[];
        DefaultValue?: CommercePropertyValue;
        UpperBound?: CommercePropertyValue;
        LowerBound?: CommercePropertyValue;
        DisplayOrder?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeTranslationDetails entity interface.
     */
    export interface AttributeTranslationDetails {
        AttributeRecordId: number;
        LanguageId?: string;
        FriendlyName?: string;
        Description?: string;
        HelpText?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeEnumeration entity interface.
     */
    export interface AttributeEnumeration {
        OrdinalNumber?: number;
        EnumerationValue?: string;
        AttributeEnumerationTranslations?: AttributeEnumerationTranslation[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeEnumerationTranslation entity interface.
     */
    export interface AttributeEnumerationTranslation {
        LanguageId?: string;
        EnumerationTranslationValue?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeDefinitionCriteria entity interface.
     */
    export interface AttributeDefinitionCriteria {
        AttributeGroupIdentifier?: number;
        Languages?: string[];
        }
    
    /**
     * AttributeGroupDefinition entity interface.
     */
    export interface AttributeGroupDefinition {
        RecordId: number;
        Name?: string;
        TranslationDetails?: AttributeGroupTranslationDetails[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeGroupTranslationDetails entity interface.
     */
    export interface AttributeGroupTranslationDetails {
        AttributeGroupRecordId: number;
        LanguageId?: string;
        FriendlyName?: string;
        Description?: string;
        HelpText?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeGroupDefinitionCriteria entity interface.
     */
    export interface AttributeGroupDefinitionCriteria {
        AttributeGroupIdentifiers?: number[];
        Languages?: string[];
        }
    
    /**
     * CountyInfo entity interface.
     */
    export interface CountyInfo {
        Name?: string;
        CountyId?: string;
        CountryRegionId?: string;
        StateId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerGroup entity interface.
     */
    export interface CustomerGroup {
        CustomerGroupNumber?: string;
        CustomerGroupName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * DiscountLine entity interface.
     */
    export interface DiscountLine {
        SaleLineNumber?: number;
        OfferId?: string;
        OfferName?: string;
        OfferDescription?: string;
        Amount?: number;
        DiscountCost?: number;
        EffectiveAmount?: number;
        EffectivePercentage?: number;
        LineNumber?: number;
        RecordId?: number;
        SavedEffectiveAmount?: number;
        Percentage?: number;
        DealPrice?: number;
        DiscountLineTypeValue?: number;
        ManualDiscountTypeValue?: number;
        CustomerDiscountTypeValue?: number;
        PeriodicDiscountTypeValue?: number;
        DiscountApplicationGroup?: string;
        ConcurrencyModeValue?: number;
        IsCompoundable?: boolean;
        DiscountCode?: string;
        PricingPriorityNumber?: number;
        PricingAttributeCombinationPriority?: number;
        IsDiscountCodeRequired?: boolean;
        ThresholdAmountRequired?: number;
        BundleId?: number;
        ValidFrom?: Date;
        ValidTo?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * EmployeePermissions entity interface.
     */
    export interface EmployeePermissions {
        PriceOverrideRestrictionValue?: number;
        AllowPriceOverride?: number;
        MaximumDiscountPercentage?: number;
        MaximumLineDiscountAmount?: number;
        MaximumLineReturnAmount?: number;
        MaximumTotalDiscountAmount?: number;
        MaximumTotalDiscountPercentage?: number;
        MaxTotalReturnAmount?: number;
        StaffId?: string;
        Roles?: string[];
        AllowUseSharedShift?: boolean;
        AllowManageSharedShift?: boolean;
        AllowTaskGuides?: boolean;
        AllowSaleOutsideAssortment?: boolean;
        AllowPrintingReceiptCopy?: string;
        AllowSkipFiscalRegistration?: boolean;
        AllowSkipRegistrationOrMarkAsRegistered?: boolean;
        AllowPostponeRegistration?: boolean;
        AllowCreateTransferOrder?: boolean;
        AllowAcceptOrder?: boolean;
        AllowTaskManagement?: boolean;
        AllowRejectOrder?: boolean;
        AllowMassActivation?: boolean;
        AllowPostInventoryAdjustment?: boolean;
        AllowPostStockCounting?: boolean;
        AllowCreatePurchaseOrder?: boolean;
        AllowConfirmPurchaseOrder?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CommerceProperty entity interface.
     */
    export interface CommerceProperty {
        Key?: string;
        Value?: CommercePropertyValue;
        }
    
    /**
     * CommercePropertyValue entity interface.
     */
    export interface CommercePropertyValue {
        BooleanValue?: boolean;
        ByteValue?: number;
        DateTimeOffsetValue?: Date;
        DecimalValue?: number;
        IntegerValue?: number;
        LongValue?: number;
        StringValue?: string;
        }
    
    /**
     * CountryRegionInfo entity interface.
     */
    export interface CountryRegionInfo {
        CountryRegionId?: string;
        ShortName?: string;
        LongName?: string;
        ISOCode?: string;
        TimeZone?: number;
        LanguageId?: string;
        AddressFormatLines?: AddressFormattingInfo[];
        AddressFormatId?: string;
        AddressFormatName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CreditMemo entity interface.
     */
    export interface CreditMemo {
        Id?: string;
        Balance?: number;
        CurrencyCode?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Currency entity interface.
     */
    export interface Currency {
        CurrencyCode?: string;
        CurrencySymbol?: string;
        RoundOffPrice?: number;
        RoundOffSales?: number;
        RoundOffTypePrice?: number;
        RoundOffTypeSales?: number;
        NumberOfDecimals?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CurrencyAmount entity interface.
     */
    export interface CurrencyAmount {
        CurrencyCode?: string;
        CurrencySymbol?: string;
        ConvertedAmount?: number;
        RoundedConvertedAmount?: number;
        ExchangeRate?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ScaleUnitConfiguration entity interface.
     */
    export interface ScaleUnitConfiguration {
        Id?: string;
        Name?: string;
        Region?: string;
        }
    
    /**
     * EnvironmentConfiguration entity interface.
     */
    export interface EnvironmentConfiguration {
        EnvironmentId?: string;
        EnvironmentName?: string;
        TenantId?: string;
        ClientAppInsightsInstrumentationKey?: string;
        HardwareStationAppInsightsInstrumentationKey?: string;
        WindowsPhonePosAppInsightsInstrumentationKey?: string;
        BaseVersion?: string;
        ScaleUnit?: ScaleUnitConfiguration;
        AADAuthority?: string;
        FrameworkName?: string;
        }
    
    /**
     * OrderManagementConfiguration entity interface.
     */
    export interface OrderManagementConfiguration {
        EnableContactEditPromptForAsyncOrderCancellation?: boolean;
        SkipSalesInvoiceSelectionDuringReturn?: boolean;
        OrderAttributeForTIN?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * DeviceConfiguration entity interface.
     */
    export interface DeviceConfiguration {
        UseInMemoryDeviceDataStorage?: boolean;
        AllowItemsAggregation?: boolean;
        AggregateItemsForPrinting?: boolean;
        AggregatePayments?: boolean;
        AlwaysExpandTransactionScreenLineDetails?: boolean;
        AuditEnabled?: boolean;
        DiscountAtTotal?: string;
        ProductDiscount?: string;
        ManuallyCalculateComplexDiscounts?: boolean;
        DisplaySecondaryTotalCurrency?: boolean;
        EndOfTransaction?: string;
        ItemNotOnFile?: string;
        LimitStaffListToStore?: boolean;
        LineItemTaxChange?: string;
        MarkUp?: string;
        MaximumPrice?: number;
        MaximumQuantity?: number;
        MinimumPasswordLength?: number;
        MustKeyInPriceIfZero?: boolean;
        NfcEContingencyModeEnabled?: string;
        NfcEVoided?: string;
        FunctionalityProfileDescription?: string;
        OverridePrice?: string;
        PrintVoidTransactionReceipts?: boolean;
        PrintReceiptsOnCardDecline?: boolean;
        PrintXZReportsOnTerminal?: boolean;
        PrintTenderDetailsOnXReport?: boolean;
        ProfileId?: string;
        RefundSale?: string;
        ReturnProduct?: string;
        SalesPerson?: string;
        SecondaryTotalCurrency?: string;
        SelectHardwareStationOnTendering?: boolean;
        SelectHardwareStationAtStartOfTransaction?: boolean;
        SerialNumber?: string;
        ShowStaffListAtLogOn?: boolean;
        StaffBarcodeLogOn?: boolean;
        StaffBarcodeLogOnRequiresPassword?: boolean;
        StaffCardLogOn?: boolean;
        StaffCardLogOnRequiresPassword?: boolean;
        StartOfTransaction?: string;
        EnableTimeRegistration?: boolean;
        TenderDeclaration?: string;
        TransactionTaxChange?: string;
        VoidItem?: string;
        VoidPayment?: string;
        SalesModeDefaultsAsCustomerOrder?: boolean;
        CreateOfflineCustomerOrders?: boolean;
        CreateAsyncCustomers?: boolean;
        EnableAxCustomerSearch?: boolean;
        VoidTransaction?: string;
        CultureName?: string;
        SystemLegalTermsUrl?: string;
        SystemPrivacyStatementUrl?: string;
        HideTrainingMode?: boolean;
        StorePhone?: string;
        StatementMethod?: string;
        StoreNumber?: string;
        ChannelId?: number;
        StoreTaxGroup?: string;
        TaxIdNumber?: string;
        TaxOverrideGroup?: number;
        TenderDeclarationCalculation?: number;
        UseCustomerBasedTax?: boolean;
        UseDestinationBasedTax?: boolean;
        AutoLogOffTimeoutInMinutes?: number;
        AutoExitMethodValue?: number;
        CustomerDisplayText1?: string;
        CustomerDisplayText2?: string;
        EFTStoreId?: number;
        EFTTerminalId?: string;
        ExitAfterEachTransaction?: boolean;
        HardwareProfile?: string;
        Placement?: string;
        TerminalDescription?: string;
        OpenDrawer?: string;
        OpenDrawerAtLogOnLogOff?: boolean;
        PrintTaxRefundChecks?: boolean;
        StandAlone?: boolean;
        TerminalId?: string;
        TerminalStatement?: boolean;
        VisualProfile?: string;
        Currency?: string;
        InventLocationId?: string;
        IncludeKitComponents?: boolean;
        AccentColor?: number;
        HeaderColor?: number;
        Theme?: string;
        FontScheme?: number;
        ShowAppBarLabel?: boolean;
        LogOnBackgroundPictureAsBase64?: string;
        LogOnBackgroundPicturePortraitAsBase64?: string;
        BackgroundPictureAsBase64?: string;
        LogonBackgroundPictureId?: number;
        LogonBackgroundPictureIdCompact?: number;
        LogonBackgroundPictureIdPortrait?: number;
        LogonBackgroundPictureIdCompactPortrait?: number;
        BackgroundPictureId?: number;
        RequireAmountDeclaration?: boolean;
        DecimalNotRequiredForMinorCurrencyUnit?: boolean;
        MaxTransactionSearchResults?: number;
        OfflineProfileId?: number;
        NewOfflineDatabaseCheckInterval?: number;
        OfflineTransactionUploadInterval?: number;
        ReconnectToOnlineInterval?: number;
        SwitchToOfflineTimeout?: number;
        OfflineSwitchApiPerformanceThresholdInSeconds?: number;
        ReconnectFromPerformanceInducedOfflineIntervalInSeconds?: number;
        RetentionDays?: number;
        HardwareConfigurations?: HardwareConfigurations;
        CreateRecording?: boolean;
        PlaybackRecording?: boolean;
        ShouldUseDefaultCommisionSalesGroup?: boolean;
        AskForSalesRepresentative?: number;
        IsSalesRepRequired?: boolean;
        ProhibitMixingSalesAndReturns?: boolean;
        ApplyDiscountsToPriceKeyedIn?: boolean;
        ApplyDiscountsToPriceOverrides?: boolean;
        IsProductSuggestionsEnabled?: boolean;
        ProductSearchType?: string;
        TerminalRecId?: number;
        DeviceRecId?: number;
        DenominationsToDisplayValue?: number;
        PromptOnSeamlessOffline?: boolean;
        RetryCountToOffline?: number;
        EnableAdvancedOfflineSwitching?: boolean;
        SystemHealthCheckInterval?: number;
        RejectOrderFulfillment?: string;
        ManuallyCalculateTaxes?: boolean;
        EmployeeLogonTypeValue?: number;
        StartAmountCalculation?: number;
        BankDropCalculation?: number;
        GenerateLoyaltyCardNumber?: boolean;
        FiscalRegistrationProcessId?: string;
        IncludeSalesOrderInvoices?: boolean;
        IncludeFreeTextInvoices?: boolean;
        IncludeProjectInvoices?: boolean;
        IncludeCreditNoteInvoices?: boolean;
        DisplayTaxExemptInLineDetails?: boolean;
        TaxExemptReceiptIndicator?: string;
        ManuallyCalculateCharges?: boolean;
        ChargeOverrideReasonCode?: string;
        ShiftReconcilation?: string;
        CustomerAccountFloorLimit?: number;
        VoidSuspendedTransactionsOnCloseShift?: boolean;
        ShowDateTime?: boolean;
        UseAdvancedCashManagement?: boolean;
        DefaultCustomerSearchModeValue?: number;
        AllowManualOfflineBeforeSignIn?: boolean;
        UseFinancialReconciliationInStore?: boolean;
        RequirePaymentForFulfillmentValue?: number;
        CardNotPresentProcessingConfigurationValue?: number;
        EnableQuickPayShortcuts?: boolean;
        ChangeDueBehaviorValue?: number;
        AutoSynchronizeDeviceNumberSequences?: boolean;
        SelfCheckout?: boolean;
        DiagnosticsConfigurationOverride?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * VisualProfile entity interface.
     */
    export interface VisualProfile {
        ChannelId?: number;
        TerminalId?: string;
        AccentColor?: number;
        HeaderColor?: number;
        Theme?: string;
        FontSchemeTypeValue?: number;
        IsAppBarLabelVisible?: boolean;
        IsDateTimeVisible?: boolean;
        LogOnLayoutTypeValue?: number;
        LogOnKeyboardTypeValue?: number;
        LogonBackgroundPictureId?: number;
        CompactLogonBackgroundPictureId?: number;
        PortraitLogonBackgroundPictureId?: number;
        CompactPortraitLogonBackgroundPictureId?: number;
        BackgroundPictureId?: number;
        LogOnLogoPictureId?: number;
        IsProductIdVisibleOnCartLine?: boolean;
        DefaultSearchResultDisplayViewTypeValue?: number;
        BypassItemAddedDialog?: boolean;
        IsModernTransactionGridEnabled?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OperationalInsightsConfiguration entity interface.
     */
    export interface OperationalInsightsConfiguration {
        InstrumentationKey?: string;
        EnvironmentId?: string;
        IsEnabled?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PaymentConfiguration entity interface.
     */
    export interface PaymentConfiguration {
        AlwaysStoreCardTokenOnOrderBalanceAuthorization?: boolean;
        MinOrderProcessingDaysForStoringCardToken?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Device entity interface.
     */
    export interface Device {
        ChannelId: number;
        RecordId?: number;
        DeviceNumber?: string;
        DeviceId?: string;
        Description?: string;
        DeviceType?: number;
        TerminalRecordId?: number;
        TerminalId?: string;
        ChannelName?: string;
        UseInMemoryDeviceDataStorage?: boolean;
        AllowMassActivation?: boolean;
        TokenIssueTime?: Date;
        ActivationStatusValue?: number;
        Token?: string;
        CountryRegionIsoCode?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * DiscountCode entity interface.
     */
    export interface DiscountCode {
        RecordId: number;
        Barcode?: string;
        Code?: string;
        ConcurrencyMode?: number;
        Description?: string;
        Disclaimer?: string;
        IsDiscountCodeRequired?: boolean;
        Name?: string;
        OfferId?: string;
        IsEnabled?: boolean;
        ValidFrom?: Date;
        ValidTo?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * DistrictInfo entity interface.
     */
    export interface DistrictInfo {
        Name?: string;
        Description?: string;
        CountryRegionId?: string;
        StateId?: string;
        CountyId?: string;
        CityName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * HardwareProfile entity interface.
     */
    export interface HardwareProfile {
        RecordId?: number;
        LineDisplayDelayForLinkedItems?: number;
        LineDisplayBalanceText?: string;
        LineDisplayBinaryConversion?: boolean;
        LineDisplayCharacterSet?: number;
        LineDisplayClosedLine1?: string;
        LineDisplayClosedLine2?: string;
        LineDisplayDeviceDescription?: string;
        LineDisplayDeviceTypeValue?: number;
        LineDisplayDeviceName?: string;
        LineDisplayDisplayLinkedItem?: boolean;
        LineDisplayDisplayTerminalClosed?: boolean;
        LineDisplayTotalText?: string;
        LineDisplayKeepConnectionOpen?: boolean;
        DualDisplayActive?: boolean;
        DualDisplayWebBrowserUrl?: string;
        DualDisplayImageRotatorInterval?: number;
        DualDisplayImageRotatorPath?: string;
        DualDisplayReceiptWidthPercentage?: number;
        DualDisplayDisplayType?: string;
        EftTypeId?: number;
        EftCompanyId?: string;
        EftConfiguration?: number;
        EftPaymentConnectorName?: string;
        EftData?: string;
        EftDescription?: string;
        EftMerchantId?: string;
        EftPassword?: string;
        EftServerName?: string;
        EftServerPort?: string;
        EftUserId?: string;
        EftTestMode?: boolean;
        MsrEndTrack1?: string;
        MsrEndTrack2?: string;
        FiscalPrinterManagementReportPAFIdentification?: string;
        FiscalPrinterManagementReportConfigParameter?: string;
        FiscalPrinterManagementReportTenderType?: string;
        FiscalPrinterManagementReportGiftCard?: string;
        FiscalRegisterDeviceTypeValue?: number;
        FiscalRegisterConfiguration?: string;
        FiscalRegisterDeviceDescription?: string;
        FiscalRegisterDeviceName?: string;
        KeyboardMappingId?: string;
        KeyLockDeviceTypeValue?: number;
        KeyLockDeviceDescription?: string;
        KeyLockDeviceName?: string;
        MsrDeviceTypeValue?: number;
        MsrDeviceDescription?: string;
        MsrDeviceName?: string;
        MsrMake?: string;
        MsrModel?: string;
        MsrSeparator?: string;
        MsrStartTrack?: string;
        PinPadDeviceTypeValue?: number;
        PinPadDeviceName?: string;
        PinPadMake?: string;
        PinPadModel?: string;
        PinPadDeviceDescription?: string;
        ProfileDescription?: string;
        ProfileId?: string;
        RFIDDeviceTypeValue?: number;
        RFIDDeviceName?: string;
        RFIDDeviceDescription?: string;
        ScaleDeviceTypeValue?: number;
        ScaleDeviceName?: string;
        ScaleDeviceDescription?: string;
        ScaleManualInputAllowed?: boolean;
        ScaleTimeoutInSeconds?: number;
        SignatureCaptureDeviceTypeValue?: number;
        SignatureCaptureDeviceName?: string;
        SignatureCaptureMake?: string;
        SignatureCaptureModel?: string;
        SignatureCaptureDeviceDescription?: string;
        SignatureCaptureFormName?: string;
        PinPadAllowNfcPayment?: boolean;
        Printers?: HardwareProfilePrinter[];
        Scanners?: HardwareProfileScanner[];
        FiscalIntegrationTechnicalProfiles?: FiscalIntegrationTechnicalProfile[];
        CashDrawers?: HardwareProfileCashDrawer[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SupportedLanguage entity interface.
     */
    export interface SupportedLanguage {
        LanguageId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PaymentCard entity interface.
     */
    export interface PaymentCard {
        UseShippingAddress?: boolean;
        CardNumber?: string;
        CCID?: string;
        Track1?: string;
        Track2?: string;
        Track3?: string;
        VoiceAuthorizationCode?: string;
        EncryptedPin?: string;
        AdditionalSecurityData?: string;
        IsSwipe?: boolean;
        Phone?: string;
        Country?: string;
        House?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zip?: string;
        NameOnCard?: string;
        CardTypeId?: string;
        ExpirationMonth?: number;
        ExpirationYear?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CardPaymentAcceptSettings entity interface.
     */
    export interface CardPaymentAcceptSettings {
        HostPageOrigin?: string;
        AdaptorPath?: string;
        CardTokenizationEnabled?: boolean;
        CardPaymentEnabled?: boolean;
        PaymentAmount?: number;
        HideBillingAddress?: boolean;
        TenderTypeId?: string;
        Locale?: string;
        RequireShippingAddress?: boolean;
        }
    
    /**
     * CardPaymentAcceptPoint entity interface.
     */
    export interface CardPaymentAcceptPoint {
        AcceptPageUrl?: string;
        AcceptPageSubmitUrl?: string;
        MessageOrigin?: string;
        AcceptPageContent?: string;
        PaymentConnectorId?: string;
        NotReloadAcceptPageContentWhenAmountChanged?: boolean;
        }
    
    /**
     * CardPaymentAcceptResult entity interface.
     */
    export interface CardPaymentAcceptResult {
        TenderLine?: TenderLine;
        TokenizedPaymentCard?: TokenizedPaymentCard;
        PaymentSdkErrors?: PaymentError[];
        AdditionalContext?: string;
        AccessCode?: string;
        Settings?: RetrievePaymentResultSettings;
        Email?: string;
        }
    
    /**
     * ReasonCodeLine entity interface.
     */
    export interface ReasonCodeLine {
        LineId?: string;
        Amount?: number;
        Information?: string;
        InformationAmount?: number;
        InputTypeValue?: number;
        ItemTender?: string;
        LineNumber?: number;
        LineTypeValue?: number;
        ParentLineId?: string;
        ReasonCodeId?: string;
        StatementCode?: string;
        SubReasonCodeId?: string;
        SourceCode?: string;
        SourceCode2?: string;
        SourceCode3?: string;
        TransactionId?: string;
        CreatedDateTime?: Date;
        FiscalTransactionParentGuid?: string;
        IsChanged?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReasonSubCode entity interface.
     */
    export interface ReasonSubCode {
        TriggerCode?: string;
        AmountPercent: number;
        ReasonCodeId?: string;
        SubCodeId?: string;
        Description?: string;
        DescriptionTranslation?: string;
        TriggerFunctionTypeValue?: number;
        ProductId?: number;
        PriceTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Receipt entity interface.
     */
    export interface Receipt {
        TransactionId?: string;
        Header?: string;
        Body?: string;
        Footer?: string;
        Width?: number;
        ReceiptId?: string;
        LayoutId?: string;
        ReceiptTitle?: string;
        ReceiptTypeValue?: number;
        ReceiptTypeStrValue?: string;
        Printers?: Printer[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReceiptMask entity interface.
     */
    export interface ReceiptMask {
        FunctionalityProfileId?: string;
        IsIndependent: boolean;
        ReceiptTransactionTypeValue: number;
        RecordId: number;
        Mask?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SalesLine entity interface.
     */
    export interface SalesLine {
        StaffId?: string;
        LineId?: string;
        Description?: string;
        OriginLineId?: string;
        TaxOverrideCode?: string;
        IsPriceKeyedIn?: boolean;
        IsTaxOverideCodeTaxExempt?: boolean;
        ProductId?: number;
        Barcode?: string;
        BarcodeEmbeddedPrice?: number;
        PriceInBarcode?: boolean;
        EntryMethodTypeValue?: number;
        MasterProductId?: number;
        ListingId?: number;
        IsPriceOverridden?: boolean;
        OriginalPrice?: number;
        TotalAmount?: number;
        NetAmountWithoutTax?: number;
        DiscountAmount?: number;
        DiscountAmountWithoutTax?: number;
        NetPrice?: number;
        TotalDiscount?: number;
        TotalPercentageDiscount?: number;
        LineDiscount?: number;
        PeriodicDiscount?: number;
        LineManualDiscountPercentage?: number;
        LineManualDiscountAmount?: number;
        ShippingAddress?: Address;
        DeliveryMode?: string;
        Comment?: string;
        RequestedDeliveryDate?: Date;
        ConfirmedShipDate?: Date;
        PickupTimeslotStartDateTime?: Date;
        PickupTimeslotEndDateTime?: Date;
        InventoryLocationId?: string;
        InventorySiteId?: string;
        WarehouseLocation?: string;
        InventoryStatusId?: string;
        LicensePlate?: string;
        InventoryDimensionId?: string;
        InventoryTransactionId?: string;
        ItemType?: number;
        ReservationId?: string;
        LineNumber?: number;
        ReturnQuantity?: number;
        QuantityRemained?: number;
        QuantityShipped?: number;
        LineVersion?: number;
        StatusValue?: number;
        SalesStatusValue?: number;
        ProductSourceValue?: number;
        IsGiftCardLine?: boolean;
        GiftCardId?: string;
        GiftCardCurrencyCode?: string;
        GiftCardOperationValue?: number;
        GiftCardTypeValue?: number;
        IsInvoiceLine?: boolean;
        InvoiceId?: string;
        InvoiceAmount?: number;
        IsInvoiceSettled?: boolean;
        InvoiceTypeValue?: number;
        InvoicedSalesId?: string;
        IsVoided?: boolean;
        IsPriceLocked?: boolean;
        ChargeLines?: ChargeLine[];
        BasePrice?: number;
        AgreementPrice?: number;
        AdjustedPrice?: number;
        IsWarrantyLine?: boolean;
        WarrantableTransactionId?: string;
        WarrantableSalesId?: string;
        WarrantableLineNumber?: number;
        WarrantableSerialNumber?: string;
        ReturnTransactionId?: string;
        ReturnLineNumber?: number;
        ReturnInventTransId?: string;
        ReturnStore?: string;
        ReturnTerminalId?: string;
        ReturnChannelId?: number;
        FulfillmentStoreId?: string;
        SalesDate?: Date;
        QuantityInvoiced?: number;
        QuantityOrdered?: number;
        QuantityCanceled?: number;
        SavedQuantity?: number;
        IsSavedDiscount?: boolean;
        RecordId?: number;
        SerialNumber?: string;
        BatchId?: string;
        DeliveryModeChargeAmount?: number;
        UnitOfMeasureSymbol?: string;
        CatalogId?: number;
        ElectronicDeliveryEmailAddress?: string;
        ElectronicDeliveryEmailContent?: string;
        LoyaltyDiscountAmount?: number;
        LoyaltyPercentageDiscount?: number;
        TenderDiscountAmount?: number;
        TenderDiscountPercentage?: number;
        GiftCardBalance?: number;
        IsCustomerAccountDeposit?: boolean;
        Blocked?: boolean;
        Found?: boolean;
        DateToActivateItem?: Date;
        LinePercentageDiscount?: number;
        PeriodicPercentageDiscount?: number;
        QuantityDiscounted?: number;
        UnitQuantity?: number;
        UnitOfMeasureConversion?: UnitOfMeasureConversion;
        DiscountLines?: DiscountLine[];
        PriceLines?: PriceLine[];
        AttainablePriceLines?: PriceLine[];
        PeriodicDiscountPossibilities?: DiscountLine[];
        ReasonCodeLines?: ReasonCodeLine[];
        ReturnLabelProperties?: ReturnLabelContent;
        LineMultilineDiscOnItem?: string;
        RelatedDiscountedLineIds?: string[];
        LinkedParentLineId?: string;
        LineMultilineDiscOnItemValue?: number;
        WasChanged?: boolean;
        OriginalSalesOrderUnitOfMeasure?: string;
        InventOrderUnitOfMeasure?: string;
        TrackingId?: string;
        IsLoyaltyDiscountApplied?: boolean;
        CommissionSalesGroup?: string;
        IsCommissionSalesGroupOverriddenByCustomer?: boolean;
        CommissionSalesGroupSetByCashier?: string;
        QuantityNotProcessed?: number;
        QuantityReserved?: number;
        QuantityPicked?: number;
        QuantityPacked?: number;
        AttributeValues?: AttributeValueBase[];
        ThirdPartyGiftCardInfo?: ThirdPartyGiftCardInfo;
        QuantityReturnable?: number;
        LoyaltyRewardPointLines?: LoyaltyRewardPointLine[];
        ReturnLoyaltyRewardPointLines?: LoyaltyRewardPointLine[];
        FulfillmentStatus?: FulfillmentLineStatus;
        FulfillmentStatusValue?: number;
        DetailedLineStatusValue?: number;
        DetailedLineStatus?: DetailedLineStatus;
        LastReturnProcessedTime?: Date;
        SalesAgreementPrice?: number;
        SalesAgreementLineRecordId?: number;
        IsSalesAgreementSkipped?: boolean;
        ItemId?: string;
        Quantity?: number;
        Price?: number;
        ItemTaxGroupId?: string;
        SalesTaxGroupId?: string;
        OriginalSalesTaxGroupId?: string;
        OriginalItemTaxGroupId?: string;
        TaxAmount?: number;
        SalesOrderUnitOfMeasure?: string;
        NetAmount?: number;
        NetAmountPerUnit?: number;
        GrossAmount?: number;
        TaxLines?: TaxLine[];
        TaxMeasures?: TaxMeasure[];
        TaxAmountExemptInclusive?: number;
        TaxAmountInclusive?: number;
        TaxAmountExclusive?: number;
        NetAmountWithAllInclusiveTax?: number;
        BeginDateTime?: Date;
        EndDateTime?: Date;
        TaxRatePercent?: number;
        IsReturnByReceipt?: boolean;
        ReturnLineTaxAmount?: number;
        ReturnTaxLines?: TaxLine[];
        TaxExemptPriceInclusiveReductionAmount?: number;
        TaxExemptPriceInclusiveOriginalPrice?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SearchArea entity interface.
     */
    export interface SearchArea {
        Longitude?: number;
        Latitude?: number;
        Radius?: number;
        DistanceUnitValue?: number;
        }
    
    /**
     * ShiftAccountLine entity interface.
     */
    export interface ShiftAccountLine {
        AccountTypeValue?: number;
        AccountNumber?: string;
        Amount?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ShiftTenderLine entity interface.
     */
    export interface ShiftTenderLine {
        TenderTypeId?: string;
        TenderTypeName?: string;
        CardTypeId?: string;
        TenderCurrency?: string;
        CountingRequired?: boolean;
        StartingAmountOfStoreCurrency?: number;
        StartingAmountOfTenderCurrency?: number;
        FloatingEntryAmountOfStoreCurrency?: number;
        FloatingEntryAmountOfTenderCurrency?: number;
        SafeDropAmountOfStoreCurrency?: number;
        SafeDropAmountOfTenderCurrency?: number;
        BankDropAmountOfStoreCurrency?: number;
        BankDropAmountOfTenderCurrency?: number;
        RemoveTenderAmountOfStoreCurrency?: number;
        RemoveTenderAmountOfTenderCurrency?: number;
        DeclareTenderAmountOfStoreCurrency?: number;
        DeclareTenderAmountOfTenderCurrency?: number;
        TenderedAmountOfStoreCurrency?: number;
        TenderedAmountOfTenderCurrency?: number;
        ChangeAmountOfStoreCurrency?: number;
        ChangeAmountOfTenderCurrency?: number;
        Count?: number;
        Notes?: string;
        Overridden?: boolean;
        OverriddenFloatEntryAmountInStoreCurrency?: number;
        OverriddenFloatEntryAmountInTenderedCurrency?: number;
        OverriddenBankDropAmountInStoreCurrency?: number;
        OverriddenBankDropAmountInTenderedCurrency?: number;
        OverriddenChangeAmountInStoreCurrency?: number;
        OverriddenChangeAmountInTenderedCurrency?: number;
        OverriddenDeclaredTenderAmountInStoreCurrency?: number;
        OverriddenDeclaredTenderAmountInTenderedCurrency?: number;
        OverriddenRemovedTenderAmountInStoreCurrency?: number;
        OverriddenRemovedTenderAmountInTenderedCurrency?: number;
        OverriddenSafeDropAmountInStoreCurrency?: number;
        OverriddenSafeDropAmountInTenderedCurrency?: number;
        OverriddenStartingAmountInStoreCurrency?: number;
        OverriddenStartingAmountInTenderedCurrency?: number;
        OverriddenTenderedAmountInStoreCurrency?: number;
        OverriddenTenderedAmountInTenderedCurrency?: number;
        OverShortAmountOfTenderCurrency?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * StockCountJournalTransaction entity interface.
     */
    export interface StockCountJournalTransaction {
        JournalId?: string;
        RecordId?: number;
        OperationType?: number;
        ItemId?: string;
        DataAreaId?: string;
        ProductRecordId?: number;
        ItemName?: string;
        InventDimId?: string;
        Counted?: number;
        Quantity?: number;
        EstimatedOnHandQuantity?: number;
        OnHandCalculationDateTime?: Date;
        Unit?: string;
        UserId?: string;
        TerminalId?: string;
        CountedDate?: Date;
        Status?: number;
        InventBatchId?: string;
        WarehouseLocationId?: string;
        InventoryStatus?: string;
        LicensePlate?: string;
        WarehousePalletId?: string;
        InventSiteId?: string;
        InventLocationId?: string;
        ConfigId?: string;
        InventSizeId?: string;
        InventColorId?: string;
        InventStyleId?: string;
        InventSerialId?: string;
        TrackingGuid?: string;
        UpdatedInAx?: boolean;
        Message?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TaxLine entity interface.
     */
    export interface TaxLine {
        TaxGroup?: string;
        Percentage?: number;
        IsExempt?: boolean;
        TaxBasis?: number;
        IsIncludedInPrice?: boolean;
        SaleLineNumber?: number;
        StoreId?: string;
        TerminalId?: string;
        TransactionId?: string;
        TaxCode?: string;
        Amount?: number;
        AmountRefunded?: number;
        IsTaxGroupRounding?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TenderLine entity interface.
     */
    export interface TenderLine {
        StoreId?: string;
        TerminalId?: string;
        TransactionId?: string;
        InternalTransactionId?: string;
        RefundableAmount?: number;
        CaptureToken?: string;
        CardToken?: string;
        Authorization?: string;
        TransactionStatusValue?: number;
        IncomeExpenseAccountTypeValue?: number;
        MaskedCardNumber?: string;
        TenderDate?: Date;
        IsPreProcessed?: boolean;
        IsDeposit?: boolean;
        IsCustomerAccountFloorLimitUsed?: boolean;
        AuthorizationReferenceId?: string;
        IsIncrementalCaptureEnabled?: boolean;
        IsReauthorizationEnabled?: boolean;
        IncrementalOffsetAmount?: number;
        ChannelId?: number;
        IsLinkedRefund?: boolean;
        LinkedPaymentStore?: string;
        LinkedPaymentTerminalId?: string;
        LinkedPaymentTransactionId?: string;
        LinkedPaymentLineNumber?: number;
        LinkedPaymentCurrency?: string;
        RoundingDifference?: number;
        RemainingLinkedRefundAmount?: number;
        TenderLineId?: string;
        Amount?: number;
        CashBackAmount?: number;
        AmountInTenderedCurrency?: number;
        AmountInCompanyCurrency?: number;
        Currency?: string;
        ExchangeRate?: number;
        CompanyCurrencyExchangeRate?: number;
        TenderTypeId?: string;
        SignatureData?: string;
        ReasonCodeLines?: ReasonCodeLine[];
        LineNumber?: number;
        GiftCardId?: string;
        GiftCardPin?: string;
        GiftCardExpirationYear?: number;
        GiftCardExpirationMonth?: number;
        CreditMemoId?: string;
        CustomerId?: string;
        LoyaltyCardId?: string;
        CardTypeId?: string;
        IsChangeLine?: boolean;
        IsHistorical?: boolean;
        IsVoidable?: boolean;
        StatusValue?: number;
        VoidStatusValue?: number;
        AuthorizedAmount?: number;
        PaymentRefRecId?: number;
        CardPaymentAccountId?: string;
        ProcessingTypeValue?: number;
        CardProcessorStatusValue?: number;
        LinkedPaymentRefRecId?: number;
        IsPolicyBypassed?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TextValueTranslation entity interface.
     */
    export interface TextValueTranslation {
        Language?: string;
        Text?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * UnitOfMeasure entity interface.
     */
    export interface UnitOfMeasure {
        DecimalPrecision?: number;
        Symbol?: string;
        Description?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductUnitOfMeasure entity interface.
     */
    export interface ProductUnitOfMeasure extends UnitOfMeasure {
        UnitOfMeasureSourceValue?: number;
        ProductQuantityLimitRules?: ProductQuantityLimitRule;
        }
    
    /**
     * RecommendedElement entity interface.
     */
    export interface RecommendedElement {
        ElementId?: string;
        ElementTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * RecommendationCriteria entity interface.
     */
    export interface RecommendationCriteria {
        CustomerAccountNumber?: string;
        CatalogId?: number;
        ProductIds?: number[];
        CategoryIds?: number[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductListLine entity interface.
     */
    export interface ProductListLine {
        ProductListId?: string;
        LineId?: string;
        ProductId?: number;
        Quantity?: number;
        UnitOfMeasure?: string;
        CreatedDateTime?: Date;
        LastUpdated?: Date;
        DeletedDateTime?: Date;
        DataAreaId?: string;
        CatalogId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CommerceListLine entity interface.
     */
    export interface CommerceListLine {
        CommerceListId?: number;
        LineId?: number;
        CustomerId?: string;
        CustomerName?: string;
        ProductId?: number;
        Quantity?: number;
        UnitOfMeasure?: string;
        IsFavorite?: boolean;
        IsRecurring?: boolean;
        IsPrivate?: boolean;
        CreatedDateTime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CommerceListContributor entity interface.
     */
    export interface CommerceListContributor {
        RecordId?: number;
        CustomerId?: string;
        CustomerName?: string;
        InvitationId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CommerceListInvitation entity interface.
     */
    export interface CommerceListInvitation {
        RecordId?: number;
        Invitee?: string;
        IsSent?: boolean;
        LastRequestDateTime?: Date;
        LastSentDateTime?: Date;
        StatusValue?: number;
        Token?: string;
        InvitationTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SearchFilter entity interface.
     */
    export interface SearchFilter {
        Key?: string;
        FilterTypeValue: number;
        SearchValues?: SearchFilterValue[];
        }
    
    /**
     * SearchFilterValue entity interface.
     */
    export interface SearchFilterValue {
        Value?: CommercePropertyValue;
        }
    
    /**
     * TransactionSearchCriteria entity interface.
     */
    export interface TransactionSearchCriteria {
        TransactionIds?: string[];
        SalesId?: string;
        ReceiptId?: string;
        ChannelReferenceId?: string;
        CustomerAccountNumber?: string;
        CustomerFirstName?: string;
        CustomerLastName?: string;
        StoreId?: string;
        TerminalId?: string;
        ItemId?: string;
        Barcode?: string;
        SerialNumber?: string;
        StaffId?: string;
        StartDateTime?: Date;
        EndDateTime?: Date;
        ReceiptEmailAddress?: string;
        SearchIdentifiers?: string;
        SearchLocationTypeValue?: number;
        CustomFilters?: SearchFilter[];
        }
    
    /**
     * SalesOrderSearchCriteria entity interface.
     */
    export interface SalesOrderSearchCriteria {
        TransactionIds?: string[];
        SalesId?: string;
        ReceiptId?: string;
        ChannelReferenceId?: string;
        CustomerAccountNumber?: string;
        CustomerFirstName?: string;
        CustomerLastName?: string;
        StoreId?: string;
        TerminalId?: string;
        ItemId?: string;
        Barcode?: string;
        SerialNumber?: string;
        StaffId?: string;
        SearchTypeValue?: number;
        StartDateTime?: Date;
        EndDateTime?: Date;
        IncludeDetails?: boolean;
        ReceiptEmailAddress?: string;
        SearchIdentifiers?: string;
        SalesTransactionTypeValues?: number[];
        SearchLocationTypeValue?: number;
        TransactionStatusTypeValues?: number[];
        }
    
    /**
     * SearchStoreCriteria entity interface.
     */
    export interface SearchStoreCriteria {
        ChannelId?: number;
        StoreNumber?: string;
        InventoryLocationId?: string;
        ChannelTypeValue?: number;
        OnlineStoreCustomerTypeValue?: number;
        }
    
    /**
     * CustomerSearchCriteria entity interface.
     */
    export interface CustomerSearchCriteria {
        Keyword?: string;
        SearchOnlyCurrentCompany?: boolean;
        SearchLocationValue?: number;
        Refinements?: CustomerRefinerValue[];
        DataLevelValue?: number;
        }
    
    /**
     * ProductPrice entity interface.
     */
    export interface ProductPrice {
        ProductId?: number;
        ListingId?: number;
        BasePrice?: number;
        TradeAgreementPrice?: number;
        AdjustedPrice?: number;
        MaxVariantPrice?: number;
        MinVariantPrice?: number;
        CustomerContextualPrice?: number;
        DiscountAmount?: number;
        CurrencyCode?: string;
        ItemId?: string;
        InventoryDimensionId?: string;
        UnitOfMeasure?: string;
        ValidFrom?: Date;
        ProductLookupId?: number;
        ChannelId?: number;
        CatalogId?: number;
        DiscountLines?: DiscountLine[];
        SalesAgreementPrice?: number;
        PriceSourceTypeValue?: number;
        AttainablePriceLines?: PriceLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OrgUnitAvailability entity interface.
     */
    export interface OrgUnitAvailability {
        OrgUnitLocation?: OrgUnitLocation;
        ItemAvailabilities?: ItemAvailability[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductVariantPropertySet entity interface.
     */
    export interface ProductVariantPropertySet {
        VariantId?: number;
        ProductVariantPropertiesAsList?: ProductPropertyTranslation[];
        }
    
    /**
     * PurchaseOrderLine entity interface.
     */
    export interface PurchaseOrderLine {
        RecordId?: number;
        OrderId?: string;
        ProductRecordId?: number;
        ItemId?: string;
        ItemName?: string;
        InventDimId?: string;
        QuantityOrdered?: number;
        PurchaseQuantity?: number;
        PurchaseUnit?: string;
        PurchaseReceived?: number;
        PurchaseReceivedNow?: number;
        InventBatchId?: string;
        WMSLocationId?: string;
        WMSPalletId?: string;
        InventoryStatus?: string;
        LicensePlate?: string;
        InventSiteId?: string;
        InventLocationId?: string;
        ConfigId?: string;
        InventSerialId?: string;
        InventSizeId?: string;
        InventColorId?: string;
        InventStyleId?: string;
        IsCommitted?: boolean;
        Message?: string;
        UniqueIdentifier?: string;
        DeliveryMethod?: string;
        DataAreaId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TransferOrderLine entity interface.
     */
    export interface TransferOrderLine {
        RecordId?: number;
        OrderId?: string;
        ProductRecordId?: number;
        ItemId?: string;
        ItemName?: string;
        InventDimId?: string;
        QuantityTransferred?: number;
        QuantityShipped?: number;
        QuantityReceived?: number;
        QuantityShipNow?: number;
        QuantityReceiveNow?: number;
        QuantityRemainShip?: number;
        QuantityRemainReceive?: number;
        PurchaseUnit?: string;
        InventBatchId?: string;
        WMSLocationId?: string;
        WMSPalletId?: string;
        InventoryStatus?: string;
        LicensePlate?: string;
        InventSiteId?: string;
        InventLocationId?: string;
        ConfigId?: string;
        InventSerialId?: string;
        InventSizeId?: string;
        InventColorId?: string;
        InventStyleId?: string;
        IsCommitted?: boolean;
        Message?: string;
        Guid?: string;
        DeliveryMethod?: string;
        DataAreaId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TransferOrderJournal entity interface.
     */
    export interface TransferOrderJournal {
        OrderId?: string;
        VoucherId?: string;
        UpdatedByWorker?: string;
        InventLocationIdFrom?: string;
        InventLocationIdTo?: string;
        QuantityShipped?: number;
        PostingDate?: Date;
        DeliveryMode?: string;
        Comments?: string;
        JournalLines?: TransferOrderJournalLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PickingListLine entity interface.
     */
    export interface PickingListLine {
        RecordId?: number;
        OrderId?: string;
        ProductRecordId?: number;
        ItemId?: string;
        ItemName?: string;
        InventDimId?: string;
        QuantityOrdered?: number;
        PurchaseReceivedNow?: number;
        InventBatchId?: string;
        WMSLocationId?: string;
        WMSPalletId?: string;
        InventoryStatus?: string;
        LicensePlate?: string;
        InventSiteId?: string;
        InventLocationId?: string;
        ConfigId?: string;
        InventSerialId?: string;
        InventSizeId?: string;
        InventColorId?: string;
        InventStyleId?: string;
        IsCommitted?: boolean;
        Message?: string;
        Guid?: string;
        DeliveryMethod?: string;
        DataAreaId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Affiliation entity interface.
     */
    export interface Affiliation {
        RecordId?: number;
        AffiliationTypeValue?: number;
        Description?: string;
        Name?: string;
        IsHidden?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryInboundOutboundDocumentLinesSummary entity interface.
     */
    export interface InventoryInboundOutboundDocumentLinesSummary {
        InProgressQuantity?: number;
        TotalLineNumber?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentSerialNumberLinesSummary entity interface.
     */
    export interface InventoryDocumentSerialNumberLinesSummary {
        RegisteringQuantity?: number;
        RegisteredQuantity?: number;
        TotalLineNumber?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryInboundOutboundDocumentLine entity interface.
     */
    export interface InventoryInboundOutboundDocumentLine {
        WorkDocumentId?: string;
        LineId?: string;
        SourceDocumentRecordId?: number;
        SourceDocumentLineRecordId?: number;
        SourceDocumentTypeValue?: number;
        QuantityOrdered?: number;
        QuantityShipped?: number;
        QuantityReceived?: number;
        QuantityCancelled?: number;
        QuantityToUpdate?: number;
        LocationId?: string;
        ItemId?: string;
        ProductId?: number;
        ItemName?: string;
        ItemPrimaryImageUrl?: string;
        IsLocationActive?: boolean;
        IsLocationAllowBlankReceiptEnabled?: boolean;
        IsLocationBlankIssueAllowed?: boolean;
        ProductDimensions?: ProductDimension[];
        Note?: string;
        NoteModifiedByStaffId?: string;
        NoteModifiedDateTime?: Date;
        OperationResultMessage?: string;
        IsCloseLine?: boolean;
        OriginTypeValue?: number;
        UnitOfMeasure?: string;
        SourceDocumentLine?: InventoryInboundOutboundSourceDocumentLine;
        SerialNumberLines?: InventoryDocumentSerialNumberLine[];
        TrackingDimensionLines?: InventoryDocumentTrackingDimensionLine[];
        LongVersion?: number;
        ToLocationId?: string;
        AdjustmentTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryInboundOutboundSourceDocument entity interface.
     */
    export interface InventoryInboundOutboundSourceDocument {
        RecordId?: number;
        DocumentTypeValue?: number;
        DocumentId?: string;
        StatusValue?: number;
        ReceiveDate?: Date;
        ShipDate?: Date;
        Sender?: string;
        Receiver?: string;
        SenderDetails?: string;
        ReceiverDetails?: string;
        DeliveryMode?: string;
        TotalQuantityOrdered?: number;
        TotalQuantityShipped?: number;
        TotalQuantityReceived?: number;
        TotalQuantityCancelled?: number;
        DataAreaId?: string;
        Note?: string;
        TotalLines?: number;
        IsChangeAllowed?: boolean;
        NoteModifiedByStaffId?: string;
        NoteModifiedDateTime?: Date;
        DocumentTypeId?: string;
        Description?: string;
        StaffId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryInboundOutboundSourceDocumentLine entity interface.
     */
    export interface InventoryInboundOutboundSourceDocumentLine {
        DocumentRecordId?: number;
        DocumentTypeValue?: number;
        RecordId?: number;
        LineNumber?: number;
        ItemId?: string;
        ProductId?: number;
        QuantityOrdered?: number;
        QuantityShipped?: number;
        QuantityReceived?: number;
        QuantityCancelled?: number;
        LocationId?: string;
        OverDeliveryPercentage?: number;
        UnderDeliveryPercentage?: number;
        UnitId?: string;
        Receiver?: string;
        DataAreaId?: string;
        Note?: string;
        NoteModifiedByStaffId?: string;
        NoteModifiedDateTime?: Date;
        DocumentId?: string;
        ItemName?: string;
        ItemPrimaryImageUrl?: string;
        IsLocationActive?: boolean;
        IsLocationAllowBlankReceiptEnabled?: boolean;
        IsLocationBlankIssueAllowed?: boolean;
        HasSerialNumber?: boolean;
        IsSerialNumberBlankReceiptAllowed?: boolean;
        IsSerialNumberDuplicateCheckEnabled?: boolean;
        ProductDimensions?: ProductDimension[];
        SerialNumberLines?: InventoryDocumentSourceSerialNumberLine[];
        TrackingDimensionLines?: InventoryDocumentSourceTrackingDimensionLine[];
        StatusValue?: number;
        ToProductId?: number;
        ToLocationId?: string;
        InventoryDimensionId?: string;
        ToInventoryDimensionId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentLineFilterCriteria entity interface.
     */
    export interface InventoryDocumentLineFilterCriteria {
        ProductId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentUpdateLinesAction entity interface.
     */
    export interface InventoryDocumentUpdateLinesAction {
        Quantity?: number;
        ActionTypeValue?: number;
        LocationId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentLineOperationResultSettings entity interface.
     */
    export interface InventoryDocumentLineOperationResultSettings {
        ModeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentLineSearchCriteria entity interface.
     */
    export interface InventoryDocumentLineSearchCriteria {
        SourceDocumentId?: string;
        SourceDocumentTypeValue?: number;
        WorkDocumentId?: string;
        ProductId?: number;
        ItemIds?: string[];
        AvailableSerializedLineOnly?: boolean;
        DocumentLineIds?: string[];
        DocumentOperationTypeValue?: number;
        OperationTypeValue?: number;
        LocationId?: string;
        ToLocationId?: string;
        AdjustmentTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentSearchCriteria entity interface.
     */
    export interface InventoryDocumentSearchCriteria {
        DocumentId?: string;
        TransferFromWarehouse?: string;
        ShipFromWarehouse?: string;
        TransferToWarehouse?: string;
        Description?: string;
        DocumentTypeIds?: string[];
        DocumentStateValue?: number;
        DocumentTypeValues?: number[];
        CustomFilters?: SearchFilter[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentSerialNumberLineSearchCriteria entity interface.
     */
    export interface InventoryDocumentSerialNumberLineSearchCriteria {
        DocumentLineId?: string;
        SerialNumber?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentSerialNumberLineUpdateAction entity interface.
     */
    export interface InventoryDocumentSerialNumberLineUpdateAction {
        DocumentLineId?: string;
        LineId?: string;
        SerialNumber?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentSerialNumberLineResetAction entity interface.
     */
    export interface InventoryDocumentSerialNumberLineResetAction {
        DocumentLineId?: string;
        LineId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryInboundOutboundDocumentUpdateLinesByCriteriaResult entity interface.
     */
    export interface InventoryInboundOutboundDocumentUpdateLinesByCriteriaResult {
        UpdatedLines?: InventoryInboundOutboundDocumentLine[];
        TotalLinesUpdated?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * WarehouseLocationSearchCriteria entity interface.
     */
    export interface WarehouseLocationSearchCriteria {
        WarehouseIds?: string[];
        IsLocationProfileRequired?: boolean;
        SearchText?: string;
        }
    
    /**
     * InventoryDocumentSerialNumberLine entity interface.
     */
    export interface InventoryDocumentSerialNumberLine {
        WorkDocumentId?: string;
        WorkDocumentLineId?: string;
        SourceLineId?: string;
        LineId?: string;
        Quantity?: number;
        SerialNumber?: string;
        StatusValue?: number;
        ProductId?: number;
        ModifiedDateTime?: Date;
        SourceDocumentRecordId?: number;
        SourceDocumentTypeValue?: number;
        SourceDocumentLineRecordId?: number;
        SourceLine?: InventoryDocumentSourceSerialNumberLine;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentValidationCategoryResultsSummary entity interface.
     */
    export interface InventoryDocumentValidationCategoryResultsSummary {
        CategoryName?: string;
        SeverityValue?: number;
        TotalValidationResultCount?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentValidationResultSummary entity interface.
     */
    export interface InventoryDocumentValidationResultSummary {
        DocumentId?: string;
        DocumentVersion?: number;
        CategorySummaries?: InventoryDocumentValidationCategoryResultsSummary[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentValidationResultLine entity interface.
     */
    export interface InventoryDocumentValidationResultLine {
        DocumentValidationResultLineId?: string;
        CategoryName?: string;
        SeverityValue?: number;
        ErrorCode?: number;
        ErrorMessage?: string;
        DocumentId?: string;
        DocumentLongVersion?: number;
        DocumentLineId?: string;
        CreatedDateTime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentValidationResultSearchCriteria entity interface.
     */
    export interface InventoryDocumentValidationResultSearchCriteria {
        DocumentId?: string;
        DocumentVersion?: number;
        SeverityValue?: number;
        Categories?: string[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductDimensionValueInventoryAvailability entity interface.
     */
    export interface ProductDimensionValueInventoryAvailability {
        DimensionTypeValue?: number;
        DimensionValue?: ProductDimensionValue;
        ProductIds?: number[];
        TotalAvailableInventoryLevelLabel?: string;
        TotalAvailableInventoryLevelCode?: string;
        PhysicalAvailableInventoryLevelLabel?: string;
        PhysicalAvailableInventoryLevelCode?: string;
        }
    
    /**
     * UnitOfMeasureSearchCriteria entity interface.
     */
    export interface UnitOfMeasureSearchCriteria {
        IncludeQuantityLimitRules?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductDimension entity interface.
     */
    export interface ProductDimension {
        DimensionTypeValue: number;
        DimensionValue?: ProductDimensionValue;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductDimensionValue entity interface.
     */
    export interface ProductDimensionValue {
        RecordId: number;
        Value?: string;
        DimensionId?: string;
        ColorHexCode?: string;
        ImageUrl?: string;
        RefinerGroup?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductDimensionCombination entity interface.
     */
    export interface ProductDimensionCombination {
        ProductDimensions?: ProductDimension[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SearchRefiner entity interface.
     */
    export interface SearchRefiner {
        RecordId?: number;
        KeyName?: string;
        DataTypeValue?: number;
        RefinerTypeValue?: number;
        DisplayTemplateValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SearchRefinerValue entity interface.
     */
    export interface SearchRefinerValue {
        RefinerRecordId?: number;
        DataTypeValue?: number;
        LeftValueBoundString?: string;
        RightValueBoundString?: string;
        UnitText?: string;
        RowNumber?: number;
        Count?: number;
        LeftValueBoundLocalizedString?: string;
        RightValueBoundLocalizedString?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductRefiner entity interface.
     */
    export interface ProductRefiner extends SearchRefiner {
        SourceValue?: number;
        Values?: ProductRefinerValue[];
        IsDimension?: boolean;
        }
    
    /**
     * ProductRefinerValue entity interface.
     */
    export interface ProductRefinerValue extends SearchRefinerValue {
        RefinerSourceValue?: number;
        SwatchImageUrl?: string;
        SwatchColorHexCode?: string;
        }
    
    /**
     * ClientBookRefiner entity interface.
     */
    export interface ClientBookRefiner extends SearchRefiner {
        SourceValue?: number;
        Values?: ClientBookRefinerValue[];
        }
    
    /**
     * ClientBookRefinerValue entity interface.
     */
    export interface ClientBookRefinerValue extends SearchRefinerValue {
        RefinerSourceValue?: number;
        }
    
    /**
     * ProductRelationType entity interface.
     */
    export interface ProductRelationType {
        Name?: string;
        RecordId: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ComponentInSlotRelation entity interface.
     */
    export interface ComponentInSlotRelation {
        ComponentId: number;
        SlotId: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductRules entity interface.
     */
    export interface ProductRules {
        HasLinkedProducts: boolean;
        IsSerialized: boolean;
        IsActiveInSalesProcess: boolean;
        IsBlocked: boolean;
        DateOfBlocking: Date;
        DateToActivate: Date;
        DateToBlock: Date;
        DefaultUnitOfMeasure?: string;
        PriceKeyingRequirementValue: number;
        QuantityKeyingRequirementValue: number;
        MustKeyInComment: boolean;
        CanQuantityBecomeNegative: boolean;
        MustScaleItem: boolean;
        CanPriceBeZero: boolean;
        ProductId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * LocalizedString entity interface.
     */
    export interface LocalizedString {
        RecordId?: number;
        LanguageId?: string;
        TextId?: number;
        Text?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * LoyaltyCard entity interface.
     */
    export interface LoyaltyCard {
        CardNumber?: string;
        CardTenderTypeValue?: number;
        CustomerAccount?: string;
        LoyaltyGroups?: LoyaltyGroup[];
        RewardPoints?: LoyaltyRewardPoint[];
        LoyaltyEnrollmentDate?: Date;
        LoyaltyEnrollmentDateLocal?: Date;
        LoyaltyEnrollmentTime?: number;
        LoyaltyEnrollmentTimeLocal?: number;
        OmOperatingUnitId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductComponent entity interface.
     */
    export interface ProductComponent {
        ProductId: number;
        SlotId: number;
        Product?: SimpleProduct;
        AdditionalChargeForComponent?: number;
        Behavior?: ProductBehavior;
        Description?: string;
        Dimensions?: ProductDimension[];
        ItemId?: string;
        Name?: string;
        ProductTypeValue?: number;
        Quantity?: number;
        UnitOfMeasure?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SimpleProduct entity interface.
     */
    export interface SimpleProduct {
        RecordId: number;
        ItemId?: string;
        Name?: string;
        Description?: string;
        ProductTypeValue: number;
        DefaultUnitOfMeasure?: string;
        BasePrice: number;
        Price: number;
        AdjustedPrice: number;
        MasterProductId?: number;
        Components?: ProductComponent[];
        IsGiftCard?: boolean;
        ProductNumber?: string;
        Dimensions?: ProductDimension[];
        Behavior?: ProductBehavior;
        LinkedProducts?: SimpleLinkedProduct[];
        PrimaryImageUrl?: string;
        ItemTypeValue?: number;
        ItemServiceTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductBehavior entity interface.
     */
    export interface ProductBehavior {
        HasSerialNumber: boolean;
        IsDiscountAllowed: boolean;
        IsManualDiscountAllowed: boolean;
        IsKitDisassemblyAllowed: boolean;
        IsNegativeQuantityAllowed: boolean;
        IsReturnAllowed: boolean;
        IsSaleAtPhysicalStoresAllowed: boolean;
        IsZeroSalePriceAllowed: boolean;
        KeyInPriceValue: number;
        KeyInQuantityValue: number;
        MustKeyInComment: boolean;
        MustPrintIndividualShelfLabelsForVariants: boolean;
        MustPromptForSerialNumberOnlyAtSale: boolean;
        MustWeighProductAtSale: boolean;
        ValidFromDateForSaleAtPhysicalStores: Date;
        ValidToDateForSaleAtPhysicalStores: Date;
        IsStorageDimensionGroupLocationActive: boolean;
        IsStorageDimensionGroupLocationAllowBlankReceiptEnabled: boolean;
        AllowNegativePhysicalInventory: boolean;
        IsStockedProduct: boolean;
        IsBlankSerialNumberAllowed?: boolean;
        IsBlankSerialNumberReceiptAllowed?: boolean;
        IsSerialNumberControlEnabled?: boolean;
        IsStorageDimensionGroupLocationBlankIssueAllowed?: boolean;
        IsSerialNumberRequired?: boolean;
        DefaultQuantity?: number;
        MaximumQuantity?: number;
        MinimumQuantity?: number;
        MultipleOfQuantity?: number;
        InventoryLocationId?: string;
        IsSaleAtSelfCheckoutRegistersAllowed?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SimpleLinkedProduct entity interface.
     */
    export interface SimpleLinkedProduct {
        RecordId: number;
        ItemId?: string;
        Name?: string;
        Description?: string;
        ProductTypeValue: number;
        DefaultUnitOfMeasure?: string;
        BasePrice: number;
        Price: number;
        AdjustedPrice: number;
        Quantity: number;
        Behavior?: ProductBehavior;
        Dimensions?: ProductDimension[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductSearchResult entity interface.
     */
    export interface ProductSearchResult {
        ItemId?: string;
        Name?: string;
        Price: number;
        PrimaryImageUrl?: string;
        RecordId: number;
        ProductNumber?: string;
        TrackingId?: string;
        AverageRating?: number;
        TotalRatings?: number;
        Description?: string;
        BasePrice?: number;
        MinVariantPrice?: number;
        MaxVariantPrice?: number;
        DisplayOrder?: number;
        AttributeValues?: AttributeValue[];
        IsMasterProduct?: boolean;
        MasterProductId?: number;
        DefaultUnitOfMeasure?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SearchSuggestion entity interface.
     */
    export interface SearchSuggestion {
        Value?: string;
        Value2?: CommerceProperty;
        Value3?: CommerceProperty;
        Value4?: CommerceProperty;
        SuggestionType?: string;
        Id?: string;
        ImageUrl?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * LoyaltyPointRedemptionEstimate entity interface.
     */
    export interface LoyaltyPointRedemptionEstimate {
        MaxCurrencyValueOfLoyaltyPoints?: number;
        RewardPointToRedeemList?: LoyaltyRewardPointLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * LoyaltyGroup entity interface.
     */
    export interface LoyaltyGroup {
        Description?: string;
        Name?: string;
        RecordId: number;
        LoyaltyTiers?: LoyaltyTier[];
        LoyaltyCardTiers?: LoyaltyCardTier[];
        HighestActiveLoyaltyCardTier?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * LoyaltyTier entity interface.
     */
    export interface LoyaltyTier {
        Description?: string;
        RecordId: number;
        TierId?: string;
        TierLevel: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * LoyaltyCardTier entity interface.
     */
    export interface LoyaltyCardTier {
        RecordId: number;
        TierId?: string;
        LoyaltyTierRecordId: number;
        ValidFrom: Date;
        ValidTo: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * LoyaltyRewardPoint entity interface.
     */
    export interface LoyaltyRewardPoint {
        IsRedeemable: boolean;
        RewardPointCurrency?: string;
        RewardPointTypeValue: number;
        Description?: string;
        RewardPointId?: string;
        IssuedPoints?: number;
        UsedPoints?: number;
        ExpiredPoints?: number;
        ActivePoints?: number;
        PointsExpiringSoon?: number;
        UnvestedPoints?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * LoyaltyCardTransaction entity interface.
     */
    export interface LoyaltyCardTransaction {
        ChannelName?: string;
        EntryDateTime: Date;
        EntryTypeValue: number;
        ExpirationDate: Date;
        RewardPointAmountQuantity: number;
        TransactionId?: string;
        }
    
    /**
     * GiftCard entity interface.
     */
    export interface GiftCard {
        Id?: string;
        Balance?: number;
        BalanceCurrencyCode?: string;
        BalanceInCardCurrency?: number;
        CardCurrencyCode?: string;
        GiftCardIssueAmount?: number;
        GiftCardActiveFrom?: Date;
        GiftCardExpireDate?: Date;
        GiftCardHistoryDetails?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OperationPermission entity interface.
     */
    export interface OperationPermission {
        OperationName?: string;
        OperationId?: number;
        CheckUserAccess?: boolean;
        AllowAnonymousAccess?: boolean;
        AllowCustomerAccess?: boolean;
        AllowApplicationAccess?: boolean;
        IsEnabledForTaskManagement?: boolean;
        Permissions?: string[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * StateProvinceInfo entity interface.
     */
    export interface StateProvinceInfo {
        CountryRegionId?: string;
        StateId?: string;
        StateName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TransactionLog entity interface.
     */
    export interface TransactionLog extends Transaction {
        }
    
    /**
     * KitTransaction entity interface.
     */
    export interface KitTransaction extends TransactionLog {
        KitTransactionLines?: KitTransactionLine[];
        }
    
    /**
     * SalesTaxGroup entity interface.
     */
    export interface SalesTaxGroup {
        RecordId: number;
        TaxGroup?: string;
        TaxGroupName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductProperty entity interface.
     */
    export interface ProductProperty {
        ValueString?: string;
        UnitText?: string;
        PropertyTypeValue?: number;
        KeyName?: string;
        FriendlyName?: string;
        RecordId?: number;
        IsDimensionProperty?: boolean;
        AttributeValueId?: number;
        SwatchImageUrl?: string;
        SwatchColorHexCode?: string;
        GroupId?: number;
        GroupTypeValue?: number;
        GroupName?: string;
        ExtensionProperties?: CommerceProperty[];
        ProductId?: number;
        CatalogId?: number;
        }
    
    /**
     * ProductCompositionInformation entity interface.
     */
    export interface ProductCompositionInformation {
        VariantInformation?: ProductVariantInformation;
        KitDefinition?: KitDefinition;
        }
    
    /**
     * ProductVariantInformation entity interface.
     */
    export interface ProductVariantInformation {
        ActiveVariantProductId: number;
        Variants?: ProductVariant[];
        Dimensions?: ProductDimensionSet[];
        ItemId?: string;
        MasterProductId?: number;
        }
    
    /**
     * ProductChangeTrackingInformation entity interface.
     */
    export interface ProductChangeTrackingInformation {
        ModifiedDateTime: Date;
        ChangeActionValue?: number;
        RequestedActionValue?: number;
        }
    
    /**
     * ProductDimensionSet entity interface.
     */
    export interface ProductDimensionSet {
        DimensionKey?: string;
        DimensionValues?: ProductDimensionValueSet[];
        }
    
    /**
     * ProductDimensionValueSet entity interface.
     */
    export interface ProductDimensionValueSet {
        DimensionId?: string;
        DimensionValue?: string;
        VariantSet?: number[];
        Language?: string;
        SwatchImageUrl?: string;
        SwatchColorHexCode?: string;
        SwatchRefinerGroupValue?: string;
        SwatchRefinerGroupTranslation?: string;
        SwatchRefinerGroupImageUrl?: string;
        SwatchRefinerGroupColorHexCode?: string;
        }
    
    /**
     * RichMediaLocations entity interface.
     */
    export interface RichMediaLocations {
        Items?: RichMediaLocationsRichMediaLocation[];
        }
    
    /**
     * RichMediaLocationsRichMediaLocation entity interface.
     */
    export interface RichMediaLocationsRichMediaLocation {
        Url?: string;
        AltText?: string;
        IsSelfHosted?: boolean;
        IsDefault?: boolean;
        Priority?: number;
        }
    
    /**
     * KitDefinition entity interface.
     */
    export interface KitDefinition {
        DisassembleAtRegister: boolean;
        KitLineDefinitions?: KitLineDefinition[];
        KitLineProductToVariantMap?: ComponentKitVariantSet[];
        KitVariantToComponentMap?: KitVariantContent[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ComponentKitVariantSet entity interface.
     */
    export interface ComponentKitVariantSet {
        KitLineProductId: number;
        KitVariantIdList?: number[];
        }
    
    /**
     * KitLineDefinition entity interface.
     */
    export interface KitLineDefinition {
        ComponentProductId: number;
        KitLineIdentifier: number;
        SubstituteProductIds?: number[];
        ComponentProperties?: KitLineProductProperty[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * KitLineProductProperty entity interface.
     */
    export interface KitLineProductProperty {
        KitLineIdentifier: number;
        ProductId: number;
        Unit?: string;
        Quantity: number;
        Charge: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * KitComponentKey entity interface.
     */
    export interface KitComponentKey {
        KitLineIdentifier: number;
        DistinctProductId: number;
        }
    
    /**
     * KitVariantContent entity interface.
     */
    export interface KitVariantContent {
        KitVariantId: number;
        KitComponentKeyList?: KitComponentKey[];
        }
    
    /**
     * ProductLookupClause entity interface.
     */
    export interface ProductLookupClause {
        ItemId?: string;
        InventDimensionId?: string;
        Barcode?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductAssortmentInterval entity interface.
     */
    export interface ProductAssortmentInterval {
        ProductId?: number;
        ValidFrom?: Date;
        ValidTo?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OrgUnitLocation entity interface.
     */
    export interface OrgUnitLocation {
        Contacts?: OrgUnitContact[];
        ChannelId?: number;
        Latitude?: number;
        Longitude?: number;
        OrgUnitName?: string;
        OrgUnitNumber?: string;
        Address?: string;
        Street?: string;
        StreetNumber?: string;
        City?: string;
        DistrictName?: string;
        BuildingCompliment?: string;
        Postbox?: string;
        Zip?: string;
        County?: string;
        CountyName?: string;
        State?: string;
        StateName?: string;
        Country?: string;
        Distance?: number;
        InventoryLocationId?: string;
        InventorySiteId?: string;
        IsPickupLocation?: boolean;
        IsShippingLocation?: boolean;
        PostalAddressId?: number;
        OpenFrom?: number;
        OpenTo?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OrgUnitContact entity interface.
     */
    export interface OrgUnitContact {
        ChannelId: number;
        Locator?: string;
        LocatorExtension?: string;
        ContactTypeValue: number;
        IsPrimary: boolean;
        IsPrivate: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SalesLineDeliveryOption entity interface.
     */
    export interface SalesLineDeliveryOption {
        SalesLineId?: string;
        DeliveryOptions?: DeliveryOption[];
        }
    
    /**
     * DeliveryOption entity interface.
     */
    export interface DeliveryOption {
        ChargeGroup?: string;
        Code?: string;
        Description?: string;
        RecordId: number;
        DeliveryChargeLines?: DeliveryChargeLine[];
        TotalChargeAmount?: number;
        ShippingChargeAmount?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChannelDeliveryOption entity interface.
     */
    export interface ChannelDeliveryOption {
        ChannelId: number;
        DeliveryOptions?: DeliveryOption[];
        }
    
    /**
     * ChannelIdentity entity interface.
     */
    export interface ChannelIdentity {
        ChannelType: ExtensibleRetailChannelType;
        Name?: string;
        OperatingUnitNumber?: string;
        DataAreaId?: string;
        RecordId: number;
        InventoryLocationId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ExtensibleRetailChannelType entity interface.
     */
    export interface ExtensibleRetailChannelType extends ExtensibleEnumeration {
        }
    
    /**
     * ChannelProfileProperty entity interface.
     */
    export interface ChannelProfileProperty {
        Key: number;
        Value?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChannelConfiguration entity interface.
     */
    export interface ChannelConfiguration {
        RecordId: number;
        ChannelNaturalId?: string;
        MinimumDepositPercentage: number;
        QuoteExpirationDays: number;
        PickupDeliveryModeCode?: string;
        CarryoutDeliveryModeCode?: string;
        CancellationChargePercentage: number;
        InventLocation?: string;
        InventLocationDataAreaId?: string;
        BingMapsApiKey?: string;
        BingMapsEnabled: boolean;
        Currency?: string;
        CatalogDefaultImageTemplate?: string;
        CompanyCurrency?: string;
        PriceIncludesSalesTax: boolean;
        CountryRegionId?: string;
        ChannelCountryRegionISOCode?: string;
        DefaultLanguageId?: string;
        TimeZoneInfoId?: string;
        EmailDeliveryModeCode?: string;
        GiftCardItemId?: string;
        EnableProductRecommendations: boolean;
        RefundableShippingAmountWithoutApproval: number;
        RefundShippingCharges: boolean;
        ReceiptSettingsValue: number;
        CustomerAttributeGroupId: number;
        ClientBookAttributeGroupId: number;
        NotificationRefreshInterval: number;
        AllowExchangeOnReturnOrders?: boolean;
        FiscalRegistrationProcessId?: string;
        IsInventoryAutomaticValidationEnabled: boolean;
        HideSystemInventoryInStockCount: boolean;
        EnablePriceChangeTracking: boolean;
        ProfileProperties?: ChannelProfileProperty[];
        Properties?: ChannelProperty[];
        Languages?: ChannelLanguage[];
        UseAdvancedAutoCharges?: boolean;
        UseRTSForOnlineOrderCreation?: boolean;
        IsWarrantyAutoPromptEnabled?: boolean;
        EnableProductRatingsForRetailStores?: boolean;
        EnableFetchingPickingListsForPickingAndReceiving?: boolean;
        EnableReturnsForMultipleOrderInvoices?: boolean;
        EnableAnonymousOrderLookupByChannelReferenceId?: boolean;
        VoidSuspendedTransactionsOnCloseShift?: number;
        EnableOmniChannelPayments?: boolean;
        UseAdvancedCashManagement?: boolean;
        EnableFiscalRegistrationStorageBackup?: boolean;
        UseSalesReceiptAsDefaultReceiptTypeInJournal?: boolean;
        SalesOrderHeaderAttributeGroups?: number[];
        SalesOrderLinesAttributeGroups?: number[];
        CustomerAddressBooks?: StoreAddressBook[];
        EnableReturnPolicies?: boolean;
        InventAvailabilityCalculationMode?: string;
        IsPriceInclusiveTaxExemptCalculationEnabled?: boolean;
        EnableValidationOfSerialNumbersForInStoreReturns?: boolean;
        DisplayNonRetailOrdersInEcommerceOrderHistory?: boolean;
        EnableCopilotCustomerInsights?: boolean;
        EnableCopilotProductInsights?: boolean;
        EnableCopilotReportInsights?: boolean;
        EnableStoreCommerceCopilot?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChannelProperty entity interface.
     */
    export interface ChannelProperty {
        Name?: string;
        Value?: string;
        Channel?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChannelLanguage entity interface.
     */
    export interface ChannelLanguage {
        LanguageId?: string;
        IsDefault: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChannelDeliveryOptionConfiguration entity interface.
     */
    export interface ChannelDeliveryOptionConfiguration {
        PickupDeliveryModeCodes?: string[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * NonSalesTransaction entity interface.
     */
    export interface NonSalesTransaction extends Transaction {
        ReasonCodeLines?: ReasonCodeLine[];
        Amount?: number;
        ForeignCurrency?: string;
        TenderTypeId?: string;
        OpenDrawer?: boolean;
        DenominationDetails?: DenominationDetail[];
        }
    
    /**
     * DropAndDeclareTransaction entity interface.
     */
    export interface DropAndDeclareTransaction extends Transaction {
        TenderDetails?: TenderDetail[];
        ReasonCodeLines?: ReasonCodeLine[];
        OpenDrawer?: boolean;
        }
    
    /**
     * ProductSearchCriteria entity interface.
     */
    export interface ProductSearchCriteria {
        Ids?: number[];
        CategoryIds?: number[];
        IncludeProductsFromDescendantCategories?: boolean;
        SearchCondition?: string;
        SkipVariantExpansion?: boolean;
        IncludeAttributes?: boolean;
        Barcodes?: string[];
        ItemIds?: ProductLookupClause[];
        Refinement?: ProductRefinerValue[];
        CustomerAccountNumber?: string;
        RecommendationListId?: string;
        DownloadProductData?: boolean;
        Context?: ProjectionDomain;
        Language?: string;
        IsOnline?: boolean;
        DataLevelValue?: number;
        }
    
    /**
     * ChangedProductsSearchCriteria entity interface.
     */
    export interface ChangedProductsSearchCriteria {
        SynchronizationToken?: string;
        Context?: ProjectionDomain;
        AsListings?: boolean;
        Session?: ReadChangedProductsSession;
        DataLevelValue?: number;
        }
    
    /**
     * EmployeeActivitySearchCriteria entity interface.
     */
    export interface EmployeeActivitySearchCriteria {
        FromDateTimeOffset?: Date;
        ToDateTimeOffset?: Date;
        StoreNumber?: string;
        EmployeeActivityTypeValues?: number[];
        DataLevelValue?: number;
        }
    
    /**
     * SearchSuggestionCriteria entity interface.
     */
    export interface SearchSuggestionCriteria {
        ProductSearchCriteria?: ProductSearchCriteria;
        CustomerSearchCriteria?: CustomerSearchCriteria;
        SuggestionType?: string;
        HitPrefix?: string;
        HitSuffix?: string;
        }
    
    /**
     * OrderOriginator entity interface.
     */
    export interface OrderOriginator {
        TransactionId?: string;
        SalesId?: string;
        StaffId?: string;
        StaffName?: string;
        CustomerId?: string;
        CustomerName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OrderOriginatorSearchCriteria entity interface.
     */
    export interface OrderOriginatorSearchCriteria {
        TransactionIds?: string[];
        SalesIds?: string[];
        SearchLocationValue?: number;
        DataLevelValue?: number;
        }
    
    /**
     * SalesOrdersLookupCriteria entity interface.
     */
    export interface SalesOrdersLookupCriteria {
        SalesOrderLookups?: SalesOrderLookup[];
        }
    
    /**
     * CartLineDeliveryPreference entity interface.
     */
    export interface CartLineDeliveryPreference {
        LineId?: string;
        DeliveryPreferenceTypeValues?: number[];
        }
    
    /**
     * CartLinePromotion entity interface.
     */
    export interface CartLinePromotion {
        LineId?: string;
        Promotions?: string[];
        }
    
    /**
     * ProductVariant entity interface.
     */
    export interface ProductVariant {
        ItemId?: string;
        MasterProductId: number;
        InventoryDimensionId?: string;
        AdjustedPrice: number;
        BasePrice: number;
        Price: number;
        Color?: string;
        Style?: string;
        Size?: string;
        Configuration?: string;
        ColorId?: string;
        StyleId?: string;
        SizeId?: string;
        ConfigId?: string;
        VariantId?: string;
        Images?: RichMediaLocations[];
        DistinctProductVariantId?: number;
        ProductNumber?: string;
        PropertiesAsList?: ProductPropertyTranslation[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * HardwareProfilePrinter entity interface.
     */
    export interface HardwareProfilePrinter {
        ProfileId?: string;
        DeviceTypeValue?: number;
        DeviceName?: string;
        DeviceMake?: string;
        DeviceModel?: string;
        DeviceDescription?: string;
        CharacterSet?: number;
        ReceiptProfileId?: string;
        BinaryConversion?: boolean;
        DocInsertRemovalTimeout?: number;
        Logo?: string;
        LogoAlignment?: string;
        KeepConnectionOpen?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * HardwareProfileScanner entity interface.
     */
    export interface HardwareProfileScanner {
        ProfileId?: string;
        DeviceTypeValue?: number;
        DeviceName?: string;
        DeviceDescription?: string;
        DecodeData?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * HardwareProfileCashDrawer entity interface.
     */
    export interface HardwareProfileCashDrawer {
        ProfileId?: string;
        DeviceTypeValue?: number;
        DeviceName?: string;
        DeviceDescription?: string;
        DeviceMake?: string;
        DeviceModel?: string;
        IsSharedShiftDrawer?: boolean;
        DrawerKeepConnectionOpen?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TillLayout entity interface.
     */
    export interface TillLayout {
        CashChangerLayoutXml?: string;
        CustomerLayoutId?: string;
        CustomerLayoutXml?: string;
        Height?: number;
        LayoutId?: string;
        LayoutTypeValue?: number;
        LayoutXml?: string;
        LayoutXmlPortrait?: string;
        Name?: string;
        ReceiptId?: string;
        ReceiptItemsLayoutXml?: string;
        ReceiptPaymentLayoutXml?: string;
        TotalId?: string;
        TotalsLayoutXml?: string;
        Width?: number;
        RecordId?: number;
        StartScreen?: number;
        ButtonGridZones?: ButtonGridZone[];
        ImageZones?: ImageZone[];
        ReportZones?: ReportZone[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SalesInvoice entity interface.
     */
    export interface SalesInvoice {
        RecordId?: number;
        ChannelId?: number;
        Id?: string;
        SalesId?: string;
        SalesType?: string;
        InvoiceDate?: Date;
        DueDate?: Date;
        CurrencyCode?: string;
        InvoiceSubtotal?: number;
        TotalCharges?: number;
        TotalTaxAmount?: number;
        TotalLineDiscount?: number;
        TotalDiscount?: number;
        Amount?: number;
        AmountPaid?: number;
        AmountBalance?: number;
        Account?: string;
        Name?: string;
        TotalManualDiscountPercentage?: number;
        TotalManualDiscountAmount?: number;
        SalesInvoiceLine?: SalesInvoiceLine[];
        ChargeLines?: ChargeLine[];
        TenderLines?: TenderLine[];
        DeliveryModeChargeAmount?: number;
        OrderAccount?: string;
        OrderedByCustomerName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OrderInvoice entity interface.
     */
    export interface OrderInvoice {
        Id?: string;
        CustomerAccountNumber?: string;
        CustomerName?: string;
        InvoiceDate?: Date;
        TotalAmount?: number;
        AmountPaid?: number;
        AmountBalance?: number;
        InvoiceTypeValue?: number;
        CurrencyCode?: string;
        InvoiceDueDate?: Date;
        InvoicePaidStatusValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TaxOverride entity interface.
     */
    export interface TaxOverride {
        Code?: string;
        SourceTaxGroup?: string;
        DestinationTaxGroup?: string;
        SourceItemTaxGroup?: string;
        DestinationItemTaxGroup?: string;
        ChannelId?: number;
        AdditionalDescription?: string;
        Status?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TenderType entity interface.
     */
    export interface TenderType {
        Function: number;
        TenderTypeId?: string;
        Name?: string;
        OperationId?: number;
        OperationName?: string;
        ChangeTenderTypeId?: string;
        AboveMinimumChangeAmount?: number;
        AboveMinimumChangeTenderTypeId?: string;
        OpenDrawer?: boolean;
        UseSignatureCaptureDevice?: boolean;
        MinimumSignatureCaptureAmount?: number;
        IsOvertenderAllowed?: boolean;
        IsUndertenderAllowed?: boolean;
        MaximumOvertenderAmount?: number;
        MaximumUndertenderAmount?: number;
        MaximumAmountPerTransaction?: number;
        MaximumAmountPerLine?: number;
        MinimumAmountPerTransaction?: number;
        MinimumAmountPerLine?: number;
        RoundOff?: number;
        CountingRequired?: number;
        TakenToBank?: number;
        TakenToSafe?: number;
        ConnectorId?: string;
        GiftCardItem?: string;
        GiftCardCashoutOutThreshold?: number;
        ChangeLineOnReceipt?: string;
        HideCardInputDetails?: boolean;
        CashDrawerLimitEnabled?: boolean;
        CashDrawerLimit?: number;
        RestrictReturnsWithoutReceipt?: boolean;
        HasTenderDiscount?: boolean;
        DefaultCardTypeId?: string;
        UseForDeclareStartAmount?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReasonCode entity interface.
     */
    export interface ReasonCode {
        InputRequired: boolean;
        LinkedReasonCodeId?: string;
        MaximumLength: number;
        MaximumValue: number;
        MinimumLength: number;
        MinimumValue: number;
        OncePerTransaction: boolean;
        PrintInputNameOnReceipt: boolean;
        PrintInputToReceipt: boolean;
        PrintPromptToReceipt: boolean;
        Prompt?: string;
        RandomFactor: number;
        RetailUseReasonCode: boolean;
        ReasonCodeId?: string;
        Description?: string;
        InputTypeValue?: number;
        ActivityValue?: number;
        IsMultiLineText?: boolean;
        ReasonSubCodes?: ReasonSubCode[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReportDataSet entity interface.
     */
    export interface ReportDataSet {
        ReportId?: string;
        Parameters?: CommerceProperty[];
        Locale?: string;
        Output?: ReportRow[];
        HasTotalRow?: boolean;
        HasDisclaimer?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ZipCodeInfo entity interface.
     */
    export interface ZipCodeInfo {
        ZipPostalCode?: string;
        StreetName?: string;
        TimeZone?: number;
        CountryRegionId?: string;
        StateId?: string;
        CountyId?: string;
        CityName?: string;
        CityAlias?: string;
        District?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReasonCodeRequirement entity interface.
     */
    export interface ReasonCodeRequirement {
        ReasonCodeId?: string;
        SourceId?: string;
        TableRefTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * QueryResultSettings entity interface.
     */
    export interface QueryResultSettings {
        Paging?: PagingInfo;
        Sorting?: SortingInfo;
        }
    
    /**
     * SortingInfo entity interface.
     */
    export interface SortingInfo {
        Columns?: SortColumn[];
        }
    
    /**
     * SortColumn entity interface.
     */
    export interface SortColumn {
        ColumnName?: string;
        IsDescending?: boolean;
        }
    
    /**
     * PagingInfo entity interface.
     */
    export interface PagingInfo {
        NextPageToken?: string;
        Top?: number;
        Skip?: number;
        }
    
    /**
     * ProductPropertyTranslation entity interface.
     */
    export interface ProductPropertyTranslation {
        TranslationLanguage?: string;
        TranslatedProperties?: ProductProperty[];
        }
    
    /**
     * NumberSequenceSeedData entity interface.
     */
    export interface NumberSequenceSeedData {
        DataTypeValue?: number;
        DataValue?: number;
        LastTransactionDataValue?: number;
        LastTransactionCreatedDateTime?: Date;
        LastTransactionId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReceiptNumberResetInfo entity interface.
     */
    export interface ReceiptNumberResetInfo {
        ValidFrom?: Date;
        ValidTo?: Date;
        ResetDate?: Date;
        TypeValue?: number;
        Enabled?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * DeviceActivationResult entity interface.
     */
    export interface DeviceActivationResult {
        Device?: Device;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PurchaseHistory entity interface.
     */
    export interface PurchaseHistory {
        DatePurchased?: Date;
        ImageUrl?: string;
        ItemId?: string;
        ProductId?: number;
        ProductName?: string;
        ReceiptId?: string;
        SalesId?: string;
        ChannelId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PurchaseHistorySearchCriteria entity interface.
     */
    export interface PurchaseHistorySearchCriteria {
        StartDate?: Date;
        EndDate?: Date;
        CustomerAccountNumber?: string;
        ItemId?: string;
        ProductNameFilter?: string;
        ReceiptId?: string;
        }
    
    /**
     * Node entity interface.
     */
    export interface Node {
        ParentScopeId?: string;
        ParentSequence?: number;
        Id?: string;
        Sequence?: number;
        Description?: string;
        ScreenshotUri?: string;
        }
    
    /**
     * Line entity interface.
     */
    export interface Line {
        ChildrenIds?: number[];
        Id?: number;
        Name?: string;
        Description?: string;
        IsLinked?: boolean;
        LineMetadataId?: number;
        Artifacts?: ArtifactSummary[];
        MetadataPropertyValues?: MetadataPropertyValue[];
        }
    
    /**
     * MetadataText entity interface.
     */
    export interface MetadataText {
        Id?: string;
        Text?: string;
        }
    
    /**
     * MetadataHypertextLink entity interface.
     */
    export interface MetadataHypertextLink {
        Id?: string;
        DisplayName?: string;
        Url?: string;
        }
    
    /**
     * Scope entity interface.
     */
    export interface Scope extends Node {
        Name?: string;
        ScopeTypeValue: number;
        Children?: Node[];
        ActiveCount: number;
        IsForm?: boolean;
        }
    
    /**
     * Framework entity interface.
     */
    export interface Framework {
        Lines?: Line[];
        Id?: number;
        Name?: string;
        Access?: string;
        Hierarchy?: Line[];
        Publisher?: string;
        }
    
    /**
     * UserAction entity interface.
     */
    export interface UserAction extends Node {
        SystemGenerated?: boolean;
        GlobalId?: string;
        Annotations?: Annotation[];
        }
    
    /**
     * TaskUserAction entity interface.
     */
    export interface TaskUserAction extends UserAction {
        UserActionTypeValue: number;
        Name?: string;
        Comment?: string;
        TaskId?: string;
        }
    
    /**
     * FormUserAction entity interface.
     */
    export interface FormUserAction extends UserAction {
        FormId?: string;
        ControlLabel?: string;
        }
    
    /**
     * CommandUserAction entity interface.
     */
    export interface CommandUserAction extends FormUserAction {
        ReturnTypeValue: number;
        CommandName?: string;
        ControlName?: string;
        ControlType?: string;
        Arguments?: CommandArgument[];
        LabelId?: string;
        ReturnValue?: string;
        }
    
    /**
     * Annotation entity interface.
     */
    export interface Annotation {
        Description?: string;
        }
    
    /**
     * Recording entity interface.
     */
    export interface Recording {
        Scopes?: Scope[];
        FormContextEntries?: FormContextDictionaryEntry[];
        RootScope?: Scope;
        Name?: string;
        Description?: string;
        }
    
    /**
     * FormContextDictionaryEntry entity interface.
     */
    export interface FormContextDictionaryEntry {
        FormId?: string;
        FormContext?: FormContext;
        }
    
    /**
     * ProductVariantResolutionContext entity interface.
     */
    export interface ProductVariantResolutionContext {
        }
    
    /**
     * ProductVariantResolutionOnKitSelectionContext entity interface.
     */
    export interface ProductVariantResolutionOnKitSelectionContext extends ProductVariantResolutionContext {
        SelectedComponents?: ComponentInSlotRelation[];
        SlotId?: number;
        }
    
    /**
     * WarehouseLocation entity interface.
     */
    export interface WarehouseLocation {
        LocationId?: string;
        IsLicensePlateControlled: boolean;
        ProfileId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FiscalTransaction entity interface.
     */
    export interface FiscalTransaction {
        CreatedDateTime?: Date;
        StoreId?: string;
        TerminalId?: string;
        TransactionId?: string;
        TransDateTime?: Date;
        LineNumber?: number;
        RegisterResponse?: string;
        ReceiptCopy?: boolean;
        RecordGUID?: string;
        RegisterStoreId?: string;
        RegisterTerminalId?: string;
        StaffId?: string;
        RegistrationStatusValue?: number;
        RegistrationProcessId?: string;
        ConnectorGroup?: string;
        ConnectorName?: string;
        ConnectorFunctionalityProfileId?: string;
        RegisterInfo?: string;
        DocumentNumber?: string;
        RegistrationTypeValue?: number;
        ServiceName?: string;
        CountryRegionIsoCode?: string;
        TenderLineAdjustments?: FiscalTransactionTenderLineAdjustment[];
        SalesLineAdjustments?: FiscalTransactionSalesLineAdjustment[];
        ReasonCodeLines?: ReasonCodeLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FulfillmentLine entity interface.
     */
    export interface FulfillmentLine {
        SalesId?: string;
        SalesPersonStoreId?: string;
        SalesPersonId?: string;
        SalesPersonFirstName?: string;
        SalesPersonLastName?: string;
        SalesLineNumber?: number;
        ReceiptId?: string;
        ChannelReferenceId?: string;
        CustomerId?: string;
        CustomerName?: string;
        EmailAddress?: string;
        DeliveryModeCode?: string;
        DocumentStatusValue?: number;
        FulfillmentDeliveryType?: FulfillmentLineDeliveryType;
        DeliveryTypeValue?: number;
        QuantityOrdered?: number;
        QuantityNotProcessed?: number;
        QuantityReserved?: number;
        QuantityPicked?: number;
        QuantityPacked?: number;
        QuantityInvoiced?: number;
        QuantityNotInvoiced?: number;
        QuantityNotPacked?: number;
        QuantityNotPicked?: number;
        StoreInventoryTotalQuantity?: number;
        StoreInventoryReservedQuantity?: number;
        StoreInventoryOrderedQuantity?: number;
        ItemId?: string;
        ProductId?: number;
        ProductVariant?: string;
        ItemName?: string;
        SerialNumber?: string;
        FulfillmentStatus?: FulfillmentLineStatus;
        FulfillmentStatusValue?: number;
        UnitOfMeasureSymbol?: string;
        RequestedShipDate?: Date;
        RequestedDeliveryDate?: Date;
        RequestedReceiptDate?: Date;
        PickupTimeslotStartDateTime?: Date;
        PickupTimeslotEndDateTime?: Date;
        CreatedDate?: Date;
        TotalAmount?: number;
        Balance?: number;
        ShippingAddress?: Address;
        DetailedOrderStatusValue?: number;
        DetailedLineStatusValue?: number;
        ChannelTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FulfillmentLineSearchCriteria entity interface.
     */
    export interface FulfillmentLineSearchCriteria {
        CustomerId?: string;
        CustomerName?: string;
        EmailAddress?: string;
        SalesId?: string;
        OrderCreatedStartDate?: Date;
        OrderCreatedEndDate?: Date;
        ReceiptId?: string;
        StoreId?: string;
        ChannelReferenceId?: string;
        RequestedReceiptStartDate?: Date;
        RequestedReceiptEndDate?: Date;
        RequestedDeliveryStartDate?: Date;
        RequestedDeliveryEndDate?: Date;
        FulfillmentStatusValues?: number[];
        DeliveryModeCode?: string;
        WarehouseId?: string;
        LoyaltyCardNumber?: string;
        CustomerPhoneNumber?: string;
        DeliveryTypeValue?: number;
        CustomFilters?: SearchFilter[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Comment entity interface.
     */
    export interface Comment {
        RecordId?: number;
        AuthorStaffId?: string;
        AuthorName?: string;
        Text?: string;
        CreatedDateTime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AddressPurpose entity interface.
     */
    export interface AddressPurpose {
        RecordId: number;
        AddressType: number;
        Name?: string;
        Description?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * DeliveryChargeLine entity interface.
     */
    export interface DeliveryChargeLine {
        ChargeCode?: string;
        CurrencyCode?: string;
        CalculatedAmount: number;
        Description?: string;
        IsRefundable: boolean;
        IsShipping: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ExtensionPackageDefinition entity interface.
     */
    export interface ExtensionPackageDefinition {
        Name?: string;
        Publisher?: string;
        IsEnabled: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReturnPolicy entity interface.
     */
    export interface ReturnPolicy {
        RecordId: number;
        TenderTypePolicies?: TenderTypePolicy[];
        IsManagerOverrideEnabled: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TenderTypeAmount entity interface.
     */
    export interface TenderTypeAmount {
        TenderTypeId?: string;
        Amount: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FeatureState entity interface.
     */
    export interface FeatureState {
        Name?: string;
        IsEnabled?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Warranty entity interface.
     */
    export interface Warranty extends SimpleProduct {
        DurationUnitValue?: number;
        Duration?: number;
        ApplicablePriceRangeBaseTypeValue?: number;
        ApplicablePriceRangeMin?: number;
        ApplicablePriceRangeMax?: number;
        }
    
    /**
     * RecallInvoicedSalesLineLookup entity interface.
     */
    export interface RecallInvoicedSalesLineLookup {
        InvoicedLineId: number;
        Quantity: number;
        SerialNumber?: string;
        IgnoreSerialNumberMismatch: boolean;
        ReasonCodeLines?: ReasonCodeLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * WarrantyGroup entity interface.
     */
    export interface WarrantyGroup {
        Warranties?: Warranty[];
        RecordId?: number;
        GroupName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductWarrantiesMapping entity interface.
     */
    export interface ProductWarrantiesMapping {
        WarrantyGroups?: WarrantyGroup[];
        WarrantableProductId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FulfillmentLineContextualOperationsMap entity interface.
     */
    export interface FulfillmentLineContextualOperationsMap {
        FulfillmentLine?: FulfillmentLine;
        ApplicableOperationsValues?: number[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * UserAlert entity interface.
     */
    export interface UserAlert {
        AlertSourceIdValue?: number;
        LocalizedMessage?: string;
        IsBlocking?: boolean;
        }
    
    /**
     * CartLineUserAlerts entity interface.
     */
    export interface CartLineUserAlerts {
        LineIndex?: number;
        LineNumber?: number;
        UserAlerts?: UserAlert[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FulfillmentLineUserAlerts entity interface.
     */
    export interface FulfillmentLineUserAlerts {
        SalesId?: string;
        SalesLineNumber?: number;
        UserAlerts?: UserAlert[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * BusinessPartnerProspect entity interface.
     */
    export interface BusinessPartnerProspect {
        FirstName?: string;
        LastName?: string;
        CompanyName?: string;
        Address?: Address;
        JobTitle?: string;
        Department?: string;
        CompanySize?: number;
        Comments?: string;
        LastOperationId?: string;
        ProspectTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChannelSearchCriteria entity interface.
     */
    export interface ChannelSearchCriteria {
        SearchLocationValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * BusinessPartnerOperation entity interface.
     */
    export interface BusinessPartnerOperation {
        TypeValue?: number;
        StatusValue?: number;
        Value?: string;
        Description?: string;
        CreatedDateTime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * BusinessPartnerOperationRequest entity interface.
     */
    export interface BusinessPartnerOperationRequest {
        TypeValue?: number;
        StatusValue?: number;
        CreatedDateTime?: Date;
        Details?: BusinessPartnerOperationRequestDetails;
        UserId?: string;
        UserFirstName?: string;
        UserLastName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReceiptTypesByFormatType entity interface.
     */
    export interface ReceiptTypesByFormatType {
        ReceiptOutputFormatType?: ReceiptOutputFormatType;
        ReceiptTypesValues?: number[];
        }
    
    /**
     * InventoryJournalNameSearchCriteria entity interface.
     */
    export interface InventoryJournalNameSearchCriteria {
        JournalNameIds?: string[];
        DocumentTypeValues?: number[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AssortedProductIdentity entity interface.
     */
    export interface AssortedProductIdentity {
        ProductId?: number;
        IsRemoteProduct?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductExistenceId entity interface.
     */
    export interface ProductExistenceId {
        ProductId?: number;
        LanguageId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductExistenceCriteria entity interface.
     */
    export interface ProductExistenceCriteria {
        ChannelId?: number;
        CatalogId?: number;
        Ids?: ProductExistenceId[];
        }
    
    /**
     * CountryRegion entity interface.
     */
    export interface CountryRegion {
        CountryRegionId?: string;
        IsoCode?: string;
        ShortName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * BusinessVerticalsIndia entity interface.
     */
    export interface BusinessVerticalsIndia {
        RecId: number;
        Name?: string;
        EntityCode?: string;
        Description?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AddressTaxInformationIndia entity interface.
     */
    export interface AddressTaxInformationIndia {
        RecId?: number;
        Name?: string;
        RegistrationLocation?: number;
        Tin?: number;
        Gstin?: number;
        TinRegistrationNumber?: TaxRegistrationNumberIndia;
        GstinRegistrationNumber?: TaxRegistrationNumberIndia;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerTaxInformation entity interface.
     */
    export interface CustomerTaxInformation {
        CustomerId?: string;
        DataAreaId?: string;
        IsForeign?: boolean;
        IsPreferential?: boolean;
        NatureOfAssessee?: string;
        PanNumber?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TaxRegistrationNumberIndia entity interface.
     */
    export interface TaxRegistrationNumberIndia {
        RecId?: number;
        RegistrationNumber?: string;
        RegistrationType?: number;
        TaxType?: number;
        Type?: number;
        BusinessVerticals?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChecklistTask entity interface.
     */
    export interface ChecklistTask {
        Version?: string;
        InstructionsVersion?: string;
        AssignedToPersonnelNumbers?: string[];
        AssignedToExternalSubId?: string;
        Id?: string;
        Name?: string;
        Description?: string;
        DueDateTime?: Date;
        DeepLinkTypeValue?: number;
        DeepLink?: string;
        DeepLinkPosOperationName?: string;
        ContactPersonPersonnelNumber?: string;
        Instructions?: string;
        StatusValue?: number;
        CompletionDateTime?: Date;
        ResolvedByPersonnelNumber?: string;
        ChecklistId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * MediaLocation entity interface.
     */
    export interface MediaLocation {
        Uri?: string;
        AltText?: string;
        IsDefault?: boolean;
        IsSelfHosted?: boolean;
        Priority?: number;
        IsAdditionalMedia?: boolean;
        MediaTypeValue?: number;
        DisplayOrder?: number;
        MediaPurpose?: string;
        IsApplicableForChildEntities?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * EmployeeActivity entity interface.
     */
    export interface EmployeeActivity {
        StaffId?: string;
        StaffName?: string;
        Activity?: string;
        ActivityDateTimeOffset?: Date;
        StoreNumber?: string;
        EmployeeActivityTypeValue?: number;
        BreakCategory?: string;
        RecordId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerRefiner entity interface.
     */
    export interface CustomerRefiner extends SearchRefiner {
        SourceValue?: number;
        Values?: CustomerRefinerValue[];
        }
    
    /**
     * TokenizedPaymentCard entity interface.
     */
    export interface TokenizedPaymentCard {
        IsSwipe?: boolean;
        TenderType?: string;
        CardTokenInfo?: CardTokenInfo;
        Phone?: string;
        Country?: string;
        House?: string;
        Address1?: string;
        Address2?: string;
        City?: string;
        State?: string;
        Zip?: string;
        NameOnCard?: string;
        CardTypeId?: string;
        ExpirationMonth?: number;
        ExpirationYear?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductDimensionAvailabilitySearchCriteria entity interface.
     */
    export interface ProductDimensionAvailabilitySearchCriteria {
        RequestedDimensionTypeValue?: number;
        RequestedDimensionTypeValues?: number[];
        MatchingDimensionValues?: ProductDimension[];
        DefaultWarehouseOnly?: boolean;
        FilterByChannelFulfillmentGroup?: boolean;
        DeliveryModeTypeFilterValue?: number;
        CatalogId?: number;
        InventoryAccuracyValue?: number;
        }
    
    /**
     * LineShippingAddress entity interface.
     */
    export interface LineShippingAddress {
        LineId?: string;
        ShippingAddress?: Address;
        }
    
    /**
     * CartDeliveryPreferences entity interface.
     */
    export interface CartDeliveryPreferences {
        HeaderDeliveryPreferenceTypeValues?: number[];
        CartLineDeliveryPreferences?: CartLineDeliveryPreference[];
        }
    
    /**
     * LineDeliverySpecification entity interface.
     */
    export interface LineDeliverySpecification {
        LineId?: string;
        DeliverySpecification?: DeliverySpecification;
        }
    
    /**
     * DeliverySpecification entity interface.
     */
    export interface DeliverySpecification {
        DeliveryModeId?: string;
        DeliveryPreferenceTypeValue?: number;
        DeliveryAddress?: Address;
        RequestedDeliveryDate?: Date;
        PickUpStoreId?: string;
        PickupTimeslotStartDateTime?: Date;
        PickupTimeslotEndDateTime?: Date;
        ElectronicDeliveryEmailAddress?: string;
        ElectronicDeliveryEmailContent?: string;
        ShipFromStoreId?: string;
        ShipFromWarehouseId?: string;
        }
    
    /**
     * OrderSearchCriteria entity interface.
     */
    export interface OrderSearchCriteria {
        CustomerAccountNumber?: string;
        CustomerName?: string;
        EmailAddress?: string;
        LoyaltyCardNumber?: string;
        CustomerPhoneNumber?: string;
        SalesId?: string;
        ReceiptId?: string;
        OrderStatusValues?: number[];
        DocumentStatusValues?: number[];
        StartDateTime?: Date;
        EndDateTime?: Date;
        ChannelReferenceId?: string;
        StoreId?: string;
        OrderType?: number;
        CustomFilters?: SearchFilter[];
        FulfillmentTypeValues?: number[];
        DeliveryMode?: string;
        PickupStartDate?: Date;
        PickupEndDate?: Date;
        PickupTimeslotStartTime?: number;
        PickupTimeslotEndTime?: number;
        BusinessPartnerId?: string;
        ChannelIds?: number[];
        CustomerRequisition?: string;
        SearchOnlyRetailOrders?: boolean;
        }
    
    /**
     * ChecklistSearchCriteria entity interface.
     */
    export interface ChecklistSearchCriteria {
        ChannelId?: number;
        PersonnelNumber?: string;
        ChecklistIds?: string[];
        StatusValues?: number[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TaskSearchCriteria entity interface.
     */
    export interface TaskSearchCriteria {
        ChannelId?: number;
        PersonnelNumber?: string;
        TaskIds?: string[];
        StatusValues?: number[];
        FilterMyTasks: boolean;
        FilterOverdueTasks: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChecklistTaskTeamsIntegrationConfiguration entity interface.
     */
    export interface ChecklistTaskTeamsIntegrationConfiguration {
        IsEnabled?: boolean;
        MicrosoftGraphResource?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReturnCartLine entity interface.
     */
    export interface ReturnCartLine {
        Description?: string;
        ItemId?: string;
        ProductId?: number;
        Quantity?: number;
        ReturnLineNumber?: number;
        ReturnTransactionId?: string;
        SerialNumber?: string;
        IgnoreSerialNumberMismatch?: boolean;
        ReasonCodeLines?: ReasonCodeLine[];
        Price?: number;
        IsPriceKeyedIn?: boolean;
        }
    
    /**
     * TenderDiscountLine entity interface.
     */
    export interface TenderDiscountLine {
        DiscountAmount?: number;
        PaymentAmount?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReceiptRetrievalCriteria entity interface.
     */
    export interface ReceiptRetrievalCriteria {
        IsCopy?: boolean;
        IsRemoteTransaction?: boolean;
        IsPreview?: boolean;
        QueryBySalesId?: boolean;
        ReceiptTypeValue?: number;
        ShiftId?: number;
        ShiftTerminalId?: string;
        HardwareProfileId?: string;
        }
    
    /**
     * CartSearchCriteria entity interface.
     */
    export interface CartSearchCriteria {
        CartId?: string;
        ExpectedCartVersion?: number;
        CustomerAccountNumber?: string;
        IncludeAnonymous?: boolean;
        SuspendedOnly?: boolean;
        CartTypeValue?: number;
        LastModifiedDateTimeFrom?: Date;
        LastModifiedDateTimeTo?: Date;
        }
    
    /**
     * RetrievePaymentResultSettings entity interface.
     */
    export interface RetrievePaymentResultSettings {
        ReturnUrl?: string;
        PaymentConnectorId?: string;
        }
    
    /**
     * SearchReceiptCriteria entity interface.
     */
    export interface SearchReceiptCriteria {
        TransactionId?: string;
        ReceiptTypeValue?: number;
        ReceiptTypesByFormatTypeCollection?: ReceiptTypesByFormatType[];
        IsCopy?: boolean;
        GiftReceiptLineNumbers?: number[];
        }
    
    /**
     * ElectronicAddress entity interface.
     */
    export interface ElectronicAddress {
        AddressTypeValue?: number;
        ExtensibleEAddressType?: ExtensibleElectronicAddressType;
        Address?: string;
        }
    
    /**
     * ChannelReferenceLookupCriteria entity interface.
     */
    export interface ChannelReferenceLookupCriteria {
        ChannelReferenceId?: string;
        SearchLocationValue?: number;
        ChannelReferenceAdditionalLookupCriteria?: ChannelReferenceAdditionalLookupCriteria[];
        }
    
    /**
     * FulfillmentLineParameter entity interface.
     */
    export interface FulfillmentLineParameter {
        SalesId?: string;
        SalesLineNumber?: number;
        Quantity?: number;
        SerialNumber?: string;
        InvoiceDate?: Date;
        PackingDate?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ShipFulfillmentLine entity interface.
     */
    export interface ShipFulfillmentLine extends FulfillmentLineParameter {
        ProductId?: number;
        }
    
    /**
     * RejectFulfillmentLine entity interface.
     */
    export interface RejectFulfillmentLine extends FulfillmentLineParameter {
        RejectedQuantity?: number;
        InfoCodeId?: string;
        SubInfoCodeId?: string;
        }
    
    /**
     * ReadChangedProductsSession entity interface.
     */
    export interface ReadChangedProductsSession {
        Id?: string;
        TotalNumberOfProducts?: number;
        NumberOfProductsRead?: number;
        NumberOfProductsReadInCurrentPage?: number;
        NextSynchronizationToken?: string;
        IsInitialSync?: boolean;
        }
    
    /**
     * DeletedListingsResult entity interface.
     */
    export interface DeletedListingsResult {
        HasMorePublishedListings?: boolean;
        DeletedListings?: ListingIdentity[];
        }
    
    /**
     * ProductRating entity interface.
     */
    export interface ProductRating {
        ProductId?: number;
        AverageRating?: number;
        TotalRatings?: number;
        RatingDistribution?: ProductRatingCount[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductDeliveryOptions entity interface.
     */
    export interface ProductDeliveryOptions {
        ProductId?: number;
        DeliveryOptions?: DeliveryOption[];
        }
    
    /**
     * ListingPublishStatus entity interface.
     */
    export interface ListingPublishStatus {
        PublishStatusValue?: number;
        ListingModifiedDateTime?: Date;
        ChannelListingId?: string;
        ChannelId?: number;
        CatalogId?: number;
        ProductId?: number;
        LanguageId?: string;
        AppliedActionValue?: number;
        StatusMessage?: string;
        Tag?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * MediaLocationSearchCriteria entity interface.
     */
    export interface MediaLocationSearchCriteria {
        ProductId: number;
        ChannelId: number;
        CatalogId: number;
        MediaUsageTypeValue: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OrgUnitLocationSearchCriteria entity interface.
     */
    export interface OrgUnitLocationSearchCriteria {
        OrgUnitNumber?: string;
        OrgUnitName?: string;
        InventoryLocationIds?: string[];
        DeliveryModeTypeFilterValue?: number;
        }
    
    /**
     * StoreHours entity interface.
     */
    export interface StoreHours {
        RegularStoreHours?: RegularStoreHours;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * RecallOrderSearchCriteria entity interface.
     */
    export interface RecallOrderSearchCriteria {
        TransactionId?: string;
        Id?: string;
        SearchLocationValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CartPromotions entity interface.
     */
    export interface CartPromotions {
        HeaderPromotions?: string[];
        CartLinePromotions?: CartLinePromotion[];
        }
    
    /**
     * CartPromotionLine entity interface.
     */
    export interface CartPromotionLine {
        LineId?: string;
        Promotion?: Promotion;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ItemUnit entity interface.
     */
    export interface ItemUnit {
        ItemId?: string;
        VariantInventoryDimensionId?: string;
        Product?: number;
        DistinctProductVariant?: number;
        UnitOfMeasure?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductAvailableQuantity entity interface.
     */
    export interface ProductAvailableQuantity {
        ProductId?: number;
        AvailableQuantity?: number;
        UnitOfMeasure?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OrgUnitAvailabilitySearchCriteria entity interface.
     */
    export interface OrgUnitAvailabilitySearchCriteria {
        OrgUnitName?: string;
        OrgUnitNumber?: string;
        }
    
    /**
     * AffiliationSearchCriteria entity interface.
     */
    export interface AffiliationSearchCriteria {
        FilterTypeValue?: number;
        AffiliationTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InvoiceSearchCriteria entity interface.
     */
    export interface InvoiceSearchCriteria {
        BusinessPartnerId?: string;
        CustomerId?: string;
        InvoiceIds?: string[];
        InvoiceTypeValues?: number[];
        InvoicePaidStatusValues?: number[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InvoiceDetailsSearchCriteria entity interface.
     */
    export interface InvoiceDetailsSearchCriteria {
        InvoiceId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InvoicedSalesLinesSearchCriteria entity interface.
     */
    export interface InvoicedSalesLinesSearchCriteria {
        SalesIds?: string[];
        InvoiceIds?: string[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PickAndPackSalesLineParameter entity interface.
     */
    export interface PickAndPackSalesLineParameter {
        SalesLineNumber?: number;
        Quantity?: number;
        }
    
    /**
     * ProductListSearchCriteria entity interface.
     */
    export interface ProductListSearchCriteria {
        CustomerId?: string;
        ProductListId?: string;
        ProductListType?: string;
        }
    
    /**
     * ProjectionDomain entity interface.
     */
    export interface ProjectionDomain {
        ChannelId?: number;
        CatalogId?: number;
        }
    
    /**
     * AffiliationLoyaltyTier entity interface.
     */
    export interface AffiliationLoyaltyTier {
        AffiliationId?: number;
        LoyaltyTierId?: number;
        AffiliationTypeValue?: number;
        ReasonCodeLines?: ReasonCodeLine[];
        CustomerId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PriceLookupContext entity interface.
     */
    export interface PriceLookupContext {
        HeaderContext?: PriceLookupHeaderContext;
        LineContexts?: PriceLookupLineContext[];
        }
    
    /**
     * ProductPromotion entity interface.
     */
    export interface ProductPromotion {
        ProductId?: number;
        ProductDiscounts?: Promotion[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ClientBookCustomerSearchCriteria entity interface.
     */
    export interface ClientBookCustomerSearchCriteria {
        FilterByCurrentEmployee?: boolean;
        Refinement?: ClientBookRefinerValue[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ClientBookCustomer entity interface.
     */
    export interface ClientBookCustomer {
        CustomerId?: string;
        Name?: string;
        Phone?: string;
        Email?: string;
        StaffId?: string;
        ImageUris?: MediaLocation[];
        Attributes?: CustomerAttribute[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ClientBookChanges entity interface.
     */
    export interface ClientBookChanges {
        Changes?: ClientBookChange[];
        }
    
    /**
     * ChargeCode entity interface.
     */
    export interface ChargeCode {
        Code?: string;
        ModuleTypeValue?: number;
        Description?: string;
        ItemTaxGroupId?: string;
        IsRefundable?: boolean;
        IsShipping?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PaymentMerchantInformation entity interface.
     */
    export interface PaymentMerchantInformation {
        PaymentConnectorPropertiesXml?: string;
        MerchantPropertiesHashValue?: string;
        ServiceAccountId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * StoreSafe entity interface.
     */
    export interface StoreSafe {
        SafeNumber?: string;
        Name?: string;
        StoreNumber?: string;
        SafeBalance?: number;
        LastUpdatedTime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentReceiptSearchCriteria entity interface.
     */
    export interface InventoryDocumentReceiptSearchCriteria {
        SourceDocumentId?: string;
        SourceDocumentTypeValue?: number;
        WorkDocumentId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentSourceDocumentLineCommitRecordSearchCriteria entity interface.
     */
    export interface InventoryDocumentSourceDocumentLineCommitRecordSearchCriteria {
        SourceDocumentRecordId?: number;
        SourceDocumentTypeValue?: number;
        SourceDocumentLineRecordId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentSourceDocumentLineCommitRecord entity interface.
     */
    export interface InventoryDocumentSourceDocumentLineCommitRecord {
        WorkDocumentId?: string;
        LineId?: string;
        SourceDocumentRecordId?: number;
        SourceDocumentTypeValue?: number;
        SourceDocumentLineRecordId?: number;
        StaffId?: string;
        UpdateNowQuantity?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CreateHardwareStationTokenResult entity interface.
     */
    export interface CreateHardwareStationTokenResult {
        HardwareStationToken?: string;
        PairingKey?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ValidateHardwareStationTokenResult entity interface.
     */
    export interface ValidateHardwareStationTokenResult {
        PairingKey?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * MediaBlob entity interface.
     */
    export interface MediaBlob {
        MediaType?: string;
        Content?: string;
        IsDefault?: boolean;
        AltText?: string;
        PictureId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OnlineChannel entity interface.
     */
    export interface OnlineChannel {
        OnlineStoreCustomerTypeValue?: number;
        OnlineChannelName?: string;
        CurrencyCode?: string;
        OnlineStoreAzureB2CProfile?: number;
        CountryRegions?: CountryRegion[];
        EventNotificationProfileId?: string;
        RecordId?: number;
        OMOperatingUnitNumber?: string;
        OrgUnitTypeValue?: number;
        Name?: string;
        DefaultCustomerAccount?: string;
        CategoryHierarchyId?: number;
        InventoryLocationId?: string;
        ChannelProfile?: ChannelProfile;
        ChannelProperties?: ChannelProperty[];
        ChannelLanguages?: ChannelLanguage[];
        Contacts?: OrgUnitContact[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TerminalDataDownloadRequestInfo entity interface.
     */
    export interface TerminalDataDownloadRequestInfo {
        TerminalId?: string;
        RequiresDataInitialization?: boolean;
        HasBeenInitializedBefore?: boolean;
        }
    
    /**
     * DataDownloadParameters entity interface.
     */
    export interface DataDownloadParameters {
        DownloadInterval?: number;
        DownloadSessions?: DownloadSession[];
        FeatureControlList?: RetailSharedConfigurationParameter[];
        DataStore?: CDXDataStore;
        }
    
    /**
     * TerminalDataUploadRequestInfo entity interface.
     */
    export interface TerminalDataUploadRequestInfo {
        TerminalId?: string;
        }
    
    /**
     * DataUploadParameters entity interface.
     */
    export interface DataUploadParameters {
        UploadInterval?: number;
        UploadJobPackageRequests?: UploadJobPackageRequest[];
        FeatureControlList?: RetailSharedConfigurationParameter[];
        DataStore?: CDXDataStore;
        }
    
    /**
     * DownloadSession entity interface.
     */
    export interface DownloadSession {
        Id?: number;
        JobId?: string;
        JobDescription?: string;
        FileSize?: number;
        RowsAffected?: number;
        Checksum?: string;
        DateDownloaded?: string;
        DateRequested?: string;
        DataStoreName?: string;
        StatusValue?: number;
        Message?: string;
        DownloadLink?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OfflineTerminalState entity interface.
     */
    export interface OfflineTerminalState {
        TerminalId?: string;
        State?: string;
        }
    
    /**
     * LoyaltyRewardPointActivity entity interface.
     */
    export interface LoyaltyRewardPointActivity {
        ActivityDate?: Date;
        LoyaltyRewardPointTimelineEntryType?: string;
        ExtensibleLoyaltyRewardPointActivityEntryTypeValue?: number;
        LoyaltyPoints?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CurrencyRequest entity interface.
     */
    export interface CurrencyRequest {
        AmountToConvert?: number;
        CurrencyCode?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * HardwareStationProfile entity interface.
     */
    export interface HardwareStationProfile {
        RecordId?: number;
        HardwareStationId?: string;
        HardwareStationTypeValue?: number;
        HardwareProfileId?: string;
        HardwareStationName?: string;
        HardwareStationDescription?: string;
        HardwareStationUrl?: string;
        HardwareStationHostName?: string;
        HardwareStationEftTerminalId?: string;
        HardwareConfigurations?: HardwareConfigurations;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * LoyaltyCardSearchCriteria entity interface.
     */
    export interface LoyaltyCardSearchCriteria {
        ChannelId: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * NameValuePair entity interface.
     */
    export interface NameValuePair {
        Name?: string;
        Value?: string;
        }
    
    /**
     * LinkToExistingCustomerResult entity interface.
     */
    export interface LinkToExistingCustomerResult {
        EmailAddress?: string;
        ExternalIdentityProvider?: string;
        ExternalIdentityLinkRecordId?: number;
        }
    
    /**
     * OfflineSyncStatsLine entity interface.
     */
    export interface OfflineSyncStatsLine {
        IsUploadJob?: boolean;
        JobDescription?: string;
        LastSyncDateTime?: Date;
        Status?: string;
        FileSize?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * StorageAccessToken entity interface.
     */
    export interface StorageAccessToken {
        Url?: string;
        SasKey?: string;
        }
    
    /**
     * TaskGuidesSearchResult entity interface.
     */
    export interface TaskGuidesSearchResult {
        Lines?: Line[];
        FrameworkPublisherName?: string;
        FrameworkName?: string;
        }
    
    /**
     * AuditEvent entity interface.
     */
    export interface AuditEvent {
        EventId?: number;
        EventIdString?: string;
        Channel?: number;
        Store?: string;
        Terminal?: string;
        UploadTypeValue?: number;
        EventTypeValue?: number;
        EventDateTime?: Date;
        DurationInMilliseconds?: number;
        Source?: string;
        EventMessage?: string;
        LogLevel?: string;
        LogLevelValue?: number;
        Staff?: string;
        ShiftId?: number;
        ClosedShiftId?: number;
        ReferenceId?: number;
        RefChannel?: number;
        RefStore?: string;
        RefTerminal?: string;
        RefTransactionId?: string;
        AuditEventTypeValue?: number;
        FiscalTransactions?: AuditEventFiscalTransaction[];
        FiscalRegistrationLines?: AuditEventFiscalRegistrationLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ItemAvailability entity interface.
     */
    export interface ItemAvailability {
        ItemId?: string;
        VariantInventoryDimensionId?: string;
        InventoryLocationId?: string;
        ProductId?: number;
        AvailableQuantity?: number;
        OrderedSum?: number;
        PhysicalReserved?: number;
        UnitOfMeasure?: string;
        InventoryUnitOfMeasure?: string;
        InventoryUnitOfMeasureDescription?: string;
        ProductDimensions?: ProductDimension[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryAvailableToPromise entity interface.
     */
    export interface InventoryAvailableToPromise extends ItemAvailability {
        Date?: string;
        }
    
    /**
     * NotificationItem entity interface.
     */
    export interface NotificationItem {
        Action?: number;
        ActionName?: string;
        NotificationDetails?: NotificationDetail[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FiscalIntegrationDocumentRetrievalCriteria entity interface.
     */
    export interface FiscalIntegrationDocumentRetrievalCriteria {
        TransactionId?: string;
        IsRemoteTransaction?: boolean;
        QueryBySalesId?: boolean;
        FiscalRegistrationEventTypeValue?: number;
        ShiftId?: number;
        ShiftTerminalId?: string;
        DocumentContext?: FiscalIntegrationDocumentContext;
        }
    
    /**
     * FiscalIntegrationDocument entity interface.
     */
    export interface FiscalIntegrationDocument {
        Document?: string;
        DocumentGenerationResultTypeValue?: number;
        FiscalConnectorTechnicalProfile?: FiscalIntegrationTechnicalProfile;
        DocumentAdjustment?: FiscalIntegrationDocumentAdjustment;
        SequentialSignatureDataContext?: FiscalIntegrationSignatureDataContext;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FiscalIntegrationRegistrationResult entity interface.
     */
    export interface FiscalIntegrationRegistrationResult {
        TransactionID?: string;
        AuditEventId?: string;
        Response?: string;
        SubmittedDocument?: string;
        RegisterInfo?: string;
        RegistrationStatusValue?: number;
        FiscalRegistrationEventTypeValue?: number;
        DocumentAdjustment?: FiscalIntegrationDocumentAdjustment;
        ReasonCodeLines?: ReasonCodeLine[];
        SequentialSignatureData?: FiscalIntegrationSequentialSignatureData;
        }
    
    /**
     * FiscalIntegrationRegistrationProcess entity interface.
     */
    export interface FiscalIntegrationRegistrationProcess {
        RecordId?: number;
        RegistrationProcessId?: string;
        Description?: string;
        ModeValue?: number;
        RegistrationProcessLines?: FiscalIntegrationRegistrationProcessLine[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FiscalIntegrationSupportedEvents entity interface.
     */
    export interface FiscalIntegrationSupportedEvents {
        FunctionalityProfileGroupId?: string;
        SupportedFiscalEventTypes?: number[];
        SupportedNonFiscalEventTypes?: number[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FiscalIntegrationTechnicalProfile entity interface.
     */
    export interface FiscalIntegrationTechnicalProfile {
        ProfileId?: string;
        Description?: string;
        ConnectorName?: string;
        ConnectorTypeValue?: number;
        ConnectorLocationValue?: number;
        TechnicalProfile?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FiscalIntegrationFiscalRegistrationProcessSummary entity interface.
     */
    export interface FiscalIntegrationFiscalRegistrationProcessSummary {
        RegistrationProcessId?: string;
        FiscalRegistrationProcessSummaryLines?: FiscalIntegrationFiscalRegistrationProcessSummaryLine[];
        ErrorCode?: number;
        }
    
    /**
     * FiscalIntegrationTechnicalProfileSearchCriteria entity interface.
     */
    export interface FiscalIntegrationTechnicalProfileSearchCriteria {
        ExcludeOptionalProcessLines?: boolean;
        FunctionalityProfileGroupIds?: string[];
        }
    
    /**
     * FiscalIntegrationServiceInfo entity interface.
     */
    export interface FiscalIntegrationServiceInfo {
        ServiceName?: string;
        ServiceProperties?: string;
        }
    
    /**
     * FiscalIntegrationServiceStatus entity interface.
     */
    export interface FiscalIntegrationServiceStatus {
        IsReady?: boolean;
        }
    
    /**
     * FiscalIntegrationServiceCommunicationResult entity interface.
     */
    export interface FiscalIntegrationServiceCommunicationResult {
        Response?: string;
        CommunicationResultTypeValue?: number;
        FailureDetails?: FiscalIntegrationServiceFailureDetails;
        FiscalIntegrationServiceInfo?: string;
        UserNotificationMessage?: string;
        }
    
    /**
     * FiscalIntegrationSequentialSignatureData entity interface.
     */
    export interface FiscalIntegrationSequentialSignatureData {
        LastRegisterResponse?: string;
        SequenceKey?: string;
        IsOffline?: boolean;
        SequentialNumber?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * DiscountsSearchCriteria entity interface.
     */
    export interface DiscountsSearchCriteria {
        ChannelId?: number;
        Keyword?: string;
        IsDiscountCodeRequired?: boolean;
        StartDate?: Date;
        EndDate?: Date;
        IncludeDisabledDiscount?: boolean;
        ExcludeTenderDiscount?: boolean;
        DiscountOfferTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Promotion entity interface.
     */
    export interface Promotion {
        OfferId?: string;
        OfferName?: string;
        PeriodicDiscountTypeValue?: number;
        IsDiscountCodeRequired?: boolean;
        ValidationPeriodId?: string;
        AdditionalRestrictions?: string;
        Description?: string;
        ValidFromDate?: Date;
        ValidToDate?: Date;
        ValidationPeriod?: ValidationPeriod;
        CouponCodes?: string[];
        DateValidationTypeValue?: number;
        AreCouponsActiveOnSameDate?: boolean;
        AreCouponsExpiredOnSameDate?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CategoryPathLookup entity interface.
     */
    export interface CategoryPathLookup {
        ProductId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CategoryPathResult entity interface.
     */
    export interface CategoryPathResult {
        ProductId?: number;
        CategoryPath?: CategoryPath[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PickupTimeslotAvailabilitySearchCriteria entity interface.
     */
    export interface PickupTimeslotAvailabilitySearchCriteria {
        DeliveryModeCode?: string;
        StoreId?: string;
        StartDate?: Date;
        EndDate?: Date;
        SearchOptionValue?: number;
        }
    
    /**
     * PickupTimeslotAvailability entity interface.
     */
    export interface PickupTimeslotAvailability {
        AvailableCapacity?: number;
        StartDateTime?: Date;
        EndDateTime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CheckInForOrderPickupConfirmation entity interface.
     */
    export interface CheckInForOrderPickupConfirmation {
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SalesOrderConfirmedShipDateChange entity interface.
     */
    export interface SalesOrderConfirmedShipDateChange {
        SalesId?: string;
        ConfirmedShipDate?: Date;
        LineChanges?: SalesLineConfirmedShipDateChange[];
        }
    
    /**
     * OrderCancellationResult entity interface.
     */
    export interface OrderCancellationResult {
        DocumentOperationCommitResultValue?: number;
        DocumentOperationCommitResultCodeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * VendorSearchCriteria entity interface.
     */
    export interface VendorSearchCriteria {
        SearchText?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Vendor entity interface.
     */
    export interface Vendor {
        RecordId?: number;
        AccountNumber?: string;
        PartyId?: number;
        DataAreaId?: string;
        Name?: string;
        NameAlias?: string;
        PartyNumber?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * VendorValidationResult entity interface.
     */
    export interface VendorValidationResult {
        Message?: string;
        VendorValidationResultLevelValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CopilotResponse entity interface.
     */
    export interface CopilotResponse {
        Content?: string;
        Disclaimer?: string;
        LastRefreshDatetime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * OnlineChannelAzureB2CConfiguration entity interface.
     */
    export interface OnlineChannelAzureB2CConfiguration {
        Name?: string;
        Description?: string;
        TenantName?: string;
        SignInSignupPolicyId?: string;
        PasswordResetPolicyId?: string;
        SignUpPolicyId?: string;
        EditProfilePolicyId?: string;
        LoginDomainName?: string;
        Scope?: string;
        ApplicationId?: string;
        ApplicationSecret?: string;
        IsDefault?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ExtensionProfile entity interface.
     */
    export interface ExtensionProfile {
        ExtensionServiceUrl?: string;
        AttachedServices?: AttachedService[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChannelInventoryConfiguration entity interface.
     */
    export interface ChannelInventoryConfiguration {
        RecordId?: number;
        ChannelId?: string;
        AllowTransferOrderOverDelivery?: boolean;
        AllowTransferOrderUnderDelivery?: boolean;
        UserLocationProfileId?: string;
        InventoryProductAttributeRecordId?: number;
        InventoryOutOfStockAttributeValueText?: string;
        ProductAvailabilitySortableAttributeRecordId?: number;
        SkipQuantityInputWhenScanBarcode?: boolean;
        UseInventoryVisibilityServiceAsDataSource?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChannelMerchandisingConfiguration entity interface.
     */
    export interface ChannelMerchandisingConfiguration {
        RecordId?: number;
        ChannelId?: string;
        EnableMultipleUnitsOfMeasure?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChannelPurchaseConfiguration entity interface.
     */
    export interface ChannelPurchaseConfiguration {
        RecordId?: number;
        ChannelId?: string;
        AllowOverDelivery?: boolean;
        AllowSubDelivery?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryJournalName entity interface.
     */
    export interface InventoryJournalName {
        RecordId?: number;
        JournalNameId?: string;
        InventoryJournalTypeValue?: number;
        Description?: string;
        DefaultAdjustmentTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ShiftRetrievalCriteria entity interface.
     */
    export interface ShiftRetrievalCriteria {
        ShiftStatusValue?: number;
        FilterByUserRole?: boolean;
        IncludeAllShiftsForStore?: boolean;
        }
    
    /**
     * UserDefinedSecretCertificateResult entity interface.
     */
    export interface UserDefinedSecretCertificateResult {
        CertificateData?: string;
        }
    
    /**
     * TerminalInfo entity interface.
     */
    export interface TerminalInfo {
        TerminalId?: string;
        DeviceNumber?: string;
        Name?: string;
        DeviceType?: number;
        ActivationStatusValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerTimelineItemTypeMap entity interface.
     */
    export interface CustomerTimelineItemTypeMap {
        EntityType?: string;
        Types?: CustomerTimelineItemType[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerTimelineRefiner entity interface.
     */
    export interface CustomerTimelineRefiner {
        RefinedResultsCount?: number;
        EntityType?: string;
        TypeId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerTitle entity interface.
     */
    export interface CustomerTitle {
        Text?: string;
        RecordId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductWarehouse entity interface.
     */
    export interface ProductWarehouse {
        ProductId?: number;
        InventLocationId?: string;
        DataAreaId?: string;
        UnitOfMeasure?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductWarehouseInventoryInformation entity interface.
     */
    export interface ProductWarehouseInventoryInformation {
        ProductWarehouseInventoryAvailabilities?: ProductWarehouseInventoryAvailability[];
        AggregatedProductInventoryAvailabilities?: ProductInventoryAvailability[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductWarehouseQuantity entity interface.
     */
    export interface ProductWarehouseQuantity {
        ProductId?: number;
        InventoryLocationId?: string;
        PhysicalInventory?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * UpdateProductWarehouseAvailabilityResult entity interface.
     */
    export interface UpdateProductWarehouseAvailabilityResult {
        SuccessfulUpdates?: InventoryQuantity[];
        FailedUpdates?: InventoryQuantity[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryAvailabilitySearchCriteria entity interface.
     */
    export interface InventoryAvailabilitySearchCriteria {
        ProductIds?: number[];
        DefaultWarehouseOnly?: boolean;
        SearchArea?: SearchArea;
        FilterByChannelFulfillmentGroup?: boolean;
        DeliveryModeTypeFilterValue?: number;
        QuantityUnitTypeValue?: number;
        ProductUnits?: ProductUnit[];
        DataLevelValue?: number;
        }
    
    /**
     * ExtensibleEnumerationContainer entity interface.
     */
    export interface ExtensibleEnumerationContainer {
        TypeName?: string;
        ExtensibleEnumerations?: ExtensibleEnumeration[];
        }
    
    /**
     * PackingSlipData entity interface.
     */
    export interface PackingSlipData {
        PackingSlipId?: string;
        CreatedDateTime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CartConfiguration entity interface.
     */
    export interface CartConfiguration {
        ValidateDefaultOrderSettingsPerLine?: boolean;
        IgnoreOrderSettings?: boolean;
        MaxQuantityPerItem?: number;
        AllowedMinimumDaysForRequestDelivery?: number;
        AllowedMaximumDaysForRequestDelivery?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * EmailReceiptSettings entity interface.
     */
    export interface EmailReceiptSettings {
        ReceiptTypeValue?: number;
        EmailBehaviorValue?: number;
        ReceiptTitle?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FiscalIntegrationComplianceResult entity interface.
     */
    export interface FiscalIntegrationComplianceResult {
        ErrorMessages?: string[];
        }
    
    /**
     * OrgUnitAddress entity interface.
     */
    export interface OrgUnitAddress extends Address {
        }
    
    /**
     * WarehouseDetails entity interface.
     */
    export interface WarehouseDetails extends Address {
        InventoryLocationId?: string;
        InventorySiteId?: string;
        Latitude?: number;
        Longitude?: number;
        }
    
    /**
     * AttributeSwatch entity interface.
     */
    export interface AttributeSwatch {
        SwatchValue?: string;
        SwatchImageUrl?: string;
        SwatchColorHexCode?: string;
        IsDefault?: boolean;
        ProductImageUrls?: string[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AttributeBooleanValue entity interface.
     */
    export interface AttributeBooleanValue extends AttributeValueBase {
        Value?: boolean;
        }
    
    /**
     * AttributeCurrencyValue entity interface.
     */
    export interface AttributeCurrencyValue extends AttributeValueBase {
        CurrencyValue?: number;
        CurrencyCode?: string;
        }
    
    /**
     * AttributeDateTimeOffsetValue entity interface.
     */
    export interface AttributeDateTimeOffsetValue extends AttributeValueBase {
        Value?: Date;
        }
    
    /**
     * AttributeFloatValue entity interface.
     */
    export interface AttributeFloatValue extends AttributeValueBase {
        Value?: number;
        UnitSymbol?: string;
        }
    
    /**
     * AttributeIntValue entity interface.
     */
    export interface AttributeIntValue extends AttributeValueBase {
        Value?: number;
        UnitSymbol?: string;
        }
    
    /**
     * AttributeMediaLocationValue entity interface.
     */
    export interface AttributeMediaLocationValue extends AttributeValueBase {
        Value?: MediaLocation[];
        }
    
    /**
     * AttributeTextValue entity interface.
     */
    export interface AttributeTextValue extends AttributeValueBase {
        RecId?: number;
        TextValue?: string;
        TextValueTranslations?: TextValueTranslation[];
        }
    
    /**
     * ButtonGridButton entity interface.
     */
    export interface ButtonGridButton {
        Action?: number;
        ActionProperty?: string;
        BackColorAsARGB?: ARGBColor;
        BorderColorAsARGB?: ARGBColor;
        Column?: number;
        ColumnSpan?: number;
        DisplayText?: string;
        FontColorAsARGB?: ARGBColor;
        ButtonId?: number;
        Row?: number;
        RowSpan?: number;
        UseCustomLookAndFeel?: boolean;
        PictureId?: number;
        PictureAsBase64?: string;
        FontStyle?: number;
        FontSize?: number;
        EnableCustomFontForPOS?: boolean;
        HideButtonText?: boolean;
        Tooltip?: string;
        EnableLiveContent?: boolean;
        NotificationContentAlignment?: number;
        ImageAlignment?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ARGBColor entity interface.
     */
    export interface ARGBColor {
        A?: number;
        R?: number;
        G?: number;
        B?: number;
        }
    
    /**
     * PriceLine entity interface.
     */
    export interface PriceLine {
        RecordId?: number;
        Value?: number;
        PriceMethod?: string;
        OriginId?: string;
        PriceChangedByExtensions?: boolean;
        SaleLineNumber?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TradeAgreementPriceLine entity interface.
     */
    export interface TradeAgreementPriceLine extends PriceLine {
        }
    
    /**
     * AttributePricingTradeAgreementPriceLine entity interface.
     */
    export interface AttributePricingTradeAgreementPriceLine extends TradeAgreementPriceLine {
        CanApplyPriceAdjustments?: boolean;
        PricingPriorityNumber?: number;
        }
    
    /**
     * SalesAgreementPriceLine entity interface.
     */
    export interface SalesAgreementPriceLine extends PriceLine {
        SalesAgreementName?: string;
        UnitPrice?: number;
        DiscountAmount?: number;
        DiscountPercent?: number;
        SalesAgreementLineTypeValue?: number;
        PriceUnit?: number;
        EffectiveDate?: Date;
        ExpirationDate?: Date;
        CommittedQuantity?: number;
        RemainingQuantity?: number;
        CommittedAmount?: number;
        RemainingAmount?: number;
        }
    
    /**
     * PriceAdjustmentPriceLine entity interface.
     */
    export interface PriceAdjustmentPriceLine extends PriceLine {
        IsCompoundable?: boolean;
        Concurrency?: string;
        }
    
    /**
     * AttributePricingAdjustmentPriceLine entity interface.
     */
    export interface AttributePricingAdjustmentPriceLine extends PriceAdjustmentPriceLine {
        CanCompoundOnAdjustedPrice?: boolean;
        PricingPriorityNumber?: number;
        AdjustedAmount?: number;
        }
    
    /**
     * ManualPriceLine entity interface.
     */
    export interface ManualPriceLine extends PriceLine {
        ManualPrice?: number;
        UnitOfMeasureSymbol?: string;
        ManualPriceEntryTypeValue?: number;
        }
    
    /**
     * BasePriceLine entity interface.
     */
    export interface BasePriceLine extends PriceLine {
        }
    
    /**
     * ExtensiblePeriodicDiscountOfferType entity interface.
     */
    export interface ExtensiblePeriodicDiscountOfferType extends ExtensibleEnumeration {
        }
    
    /**
     * ChargeLineOverride entity interface.
     */
    export interface ChargeLineOverride {
        OriginalAmount?: number;
        OverrideAmount?: number;
        OverrideReasonDescription?: string;
        OverrideDateTime?: Date;
        UserId?: string;
        }
    
    /**
     * TaxLineGTE entity interface.
     */
    export interface TaxLineGTE extends TaxLine {
        TaxComponent?: string;
        }
    
    /**
     * TaxMeasure entity interface.
     */
    export interface TaxMeasure {
        Path?: string;
        Value?: number;
        DataAreaId?: string;
        SaleLineNumber?: number;
        StoreId?: string;
        TerminalId?: string;
        TransactionId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * DetailedLineStatus entity interface.
     */
    export interface DetailedLineStatus extends ExtensibleEnumeration {
        }
    
    /**
     * CardTokenInfo entity interface.
     */
    export interface CardTokenInfo {
        CardToken?: string;
        UniqueCardId?: string;
        ServiceAccountId?: string;
        MaskedCardNumber?: string;
        }
    
    /**
     * DataverseTenderLine entity interface.
     */
    export interface DataverseTenderLine extends TenderLine {
        }
    
    /**
     * PaymentError entity interface.
     */
    export interface PaymentError {
        Code?: string;
        Message?: string;
        IsLocalized?: boolean;
        }
    
    /**
     * ProductAttributeMetadataFlags entity interface.
     */
    export interface ProductAttributeMetadataFlags {
        IsSearchable?: boolean;
        IsRetrievable?: boolean;
        IsQueryable?: boolean;
        IsRefinable?: boolean;
        IsSortable?: boolean;
        IsMultiValue?: boolean;
        IsTokenNormalization?: boolean;
        IsCompleteMatch?: boolean;
        }
    
    /**
     * UnitOfMeasureConversion entity interface.
     */
    export interface UnitOfMeasureConversion {
        ItemId?: string;
        FromUnitOfMeasureId?: string;
        ToUnitOfMeasureId?: string;
        FromUnitOfMeasureSymbol?: string;
        ToUnitOfMeasureSymbol?: string;
        IsBackward?: boolean;
        RecordId?: number;
        ProductRecordId?: number;
        Factor?: number;
        Numerator?: number;
        Denominator?: number;
        InnerOffset?: number;
        OuterOffset?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReturnLabelContent entity interface.
     */
    export interface ReturnLabelContent {
        ReturnLocationText?: string;
        ReturnWarehouseText?: string;
        ReturnReasonText?: string;
        ReturnPalleteText?: string;
        ItemId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * LoyaltyRewardPointLine entity interface.
     */
    export interface LoyaltyRewardPointLine {
        TransactionId?: string;
        SaleLineNumber?: number;
        LoyaltyGroupRecordId?: number;
        LoyaltyCardNumber?: string;
        CustomerAccount?: string;
        EntryDate?: Date;
        EntryTime?: number;
        EntryTypeValue?: number;
        ExpirationDate?: Date;
        LineNumber?: number;
        LoyaltyTierRecordId?: number;
        RewardPointRecordId?: number;
        RewardPointAmountQuantity?: number;
        RewardPointId?: string;
        RewardPointIsRedeemable?: boolean;
        RewardPointType?: string;
        RewardPointCurrency?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TrackingInfo entity interface.
     */
    export interface TrackingInfo {
        TrackingNumber?: string;
        ServiceType?: string;
        PackageWeight?: Weight;
        ShippedOnDate?: Date;
        Status?: string;
        DeliveredOnDate?: Date;
        EstimatedDeliveryDate?: Date;
        TrackingUrl?: string;
        PackagingType?: string;
        DestinationAddress?: Address;
        OriginAddress?: Address;
        ShipmentProgress?: ShipmentProgress[];
        ShippingCharge?: number;
        }
    
    /**
     * Weight entity interface.
     */
    export interface Weight {
        Value?: number;
        Unit?: string;
        }
    
    /**
     * ShipmentProgress entity interface.
     */
    export interface ShipmentProgress {
        Location?: Address;
        DateTime?: Date;
        Activity?: string;
        }
    
    /**
     * ShiftKey entity interface.
     */
    export interface ShiftKey {
        ShiftTerminalId?: string;
        ShiftId?: number;
        Store?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * LocalizedText entity interface.
     */
    export interface LocalizedText {
        RecordId?: number;
        LanguageId?: string;
        TextId?: string;
        Text?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AddressFormattingInfo entity interface.
     */
    export interface AddressFormattingInfo {
        AddressComponentNameValue?: number;
        LineNumber?: number;
        IsDataEntryOnly?: boolean;
        NewLine?: boolean;
        Expand?: boolean;
        Inactive?: boolean;
        Special?: boolean;
        NumberOfSpaces?: number;
        Separator?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * HardwareConfigurations entity interface.
     */
    export interface HardwareConfigurations {
        CashDrawerConfigurations?: HardwareConfiguration[];
        PrinterConfigurations?: HardwareConfiguration[];
        PinPadConfiguration?: HardwareConfiguration;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * HardwareConfiguration entity interface.
     */
    export interface HardwareConfiguration {
        RecordId?: number;
        HardwareStationRecordId?: number;
        TerminalId?: string;
        DeviceName?: string;
        IPAddress?: string;
        Port?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Printer entity interface.
     */
    export interface Printer {
        Name?: string;
        PrinterType?: number;
        Terminal?: number;
        PrintBehaviorValue?: number;
        ReceiptLayoutId?: string;
        HardwareProfileId?: string;
        ReceiptType?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductQuantityLimitRule entity interface.
     */
    export interface ProductQuantityLimitRule {
        DefaultQuantity?: number;
        MaximumQuantity?: number;
        MinimumQuantity?: number;
        MultipleOfQuantity?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerRefinerValue entity interface.
     */
    export interface CustomerRefinerValue extends SearchRefinerValue {
        RefinerSourceValue?: number;
        }
    
    /**
     * TransferOrderJournalLine entity interface.
     */
    export interface TransferOrderJournalLine {
        ItemId?: string;
        ItemName?: string;
        InventDimId?: string;
        TotalQuantityShipped?: number;
        QuantityShipped?: number;
        TransferQuantity?: number;
        UnitId?: string;
        ConfigId?: string;
        InventSizeId?: string;
        InventColorId?: string;
        InventStyleId?: string;
        ConfigValue?: string;
        SizeValue?: string;
        ColorValue?: string;
        StyleValue?: string;
        DeliveryMethod?: string;
        Barcode?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentSourceSerialNumberLine entity interface.
     */
    export interface InventoryDocumentSourceSerialNumberLine {
        SourceDocumentTypeValue?: number;
        SourceDocumentId?: string;
        DocumentLineRecordId?: number;
        InventTransRecordId?: number;
        LineId?: string;
        Quantity?: number;
        SerialNumber?: string;
        StatusValue?: number;
        ProductId?: number;
        DataAreaId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentSourceTrackingDimensionLine entity interface.
     */
    export interface InventoryDocumentSourceTrackingDimensionLine {
        SourceDocumentTypeValue?: number;
        SourceDocumentId?: string;
        DocumentLineRecordId?: number;
        InventTransRecordId?: number;
        LineId?: string;
        Quantity?: number;
        SerialNumber?: string;
        BatchNumber?: string;
        StatusValue?: number;
        ProductId?: number;
        DataAreaId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryDocumentTrackingDimensionLine entity interface.
     */
    export interface InventoryDocumentTrackingDimensionLine {
        WorkDocumentId?: string;
        WorkDocumentLineId?: string;
        SourceLineId?: string;
        LineId?: string;
        Quantity?: number;
        SerialNumber?: string;
        BatchNumber?: string;
        StatusValue?: number;
        ProductId?: number;
        ModifiedDateTime?: Date;
        SourceDocumentRecordId?: number;
        SourceDocumentTypeValue?: number;
        SourceDocumentLineRecordId?: number;
        SourceLine?: InventoryDocumentSourceTrackingDimensionLine;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * KitTransactionLine entity interface.
     */
    export interface KitTransactionLine {
        ItemId?: string;
        Quantity?: number;
        InventoryDimensionId?: string;
        ProductId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * StoreAddressBook entity interface.
     */
    export interface StoreAddressBook {
        AddressBookId?: number;
        StoreId?: number;
        AddressBookTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TenderDetail entity interface.
     */
    export interface TenderDetail {
        LineNumber?: number;
        Amount?: number;
        AmountInForeignCurrency?: number;
        ForeignCurrencyExchangeRate?: number;
        ForeignCurrency?: string;
        BankBagNumber?: string;
        TenderTypeId?: string;
        TenderRecount?: number;
        DenominationDetails?: DenominationDetail[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * DenominationDetail entity interface.
     */
    export interface DenominationDetail {
        Type?: number;
        Currency?: string;
        DenominationAmount?: number;
        QuantityDeclared?: number;
        AmountDeclared?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SalesOrderLookup entity interface.
     */
    export interface SalesOrderLookup {
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SalesOrderLookupByTransactionId entity interface.
     */
    export interface SalesOrderLookupByTransactionId extends SalesOrderLookup {
        TransactionId?: string;
        ChannelId?: number;
        StoreId?: string;
        TerminalId?: string;
        }
    
    /**
     * SalesOrderLookupBySalesId entity interface.
     */
    export interface SalesOrderLookupBySalesId extends SalesOrderLookup {
        SalesId?: string;
        }
    
    /**
     * ButtonGridZone entity interface.
     */
    export interface ButtonGridZone {
        ButtonGridId?: string;
        ZoneId?: string;
        ZoneName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ImageZone entity interface.
     */
    export interface ImageZone {
        PictureId?: number;
        PictureAsBase64?: string;
        ZoneId?: string;
        ZoneName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReportZone entity interface.
     */
    export interface ReportZone {
        ReportRecordId?: number;
        ZoneId?: string;
        ZoneName?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SalesInvoiceLine entity interface.
     */
    export interface SalesInvoiceLine {
        RecordId?: number;
        ItemId?: string;
        ProductId?: number;
        ProductName?: string;
        InventDimensionId?: string;
        InventTransactionId?: string;
        Quantity?: number;
        Price?: number;
        DiscountPercent?: number;
        DiscountAmount?: number;
        BatchId?: string;
        NetAmount?: number;
        Site?: string;
        Warehouse?: string;
        SerialId?: string;
        ColorId?: string;
        SizeId?: string;
        StyleId?: string;
        ConfigId?: string;
        ColorName?: string;
        SizeName?: string;
        StyleName?: string;
        ConfigName?: string;
        SalesTaxGroup?: string;
        ItemTaxGroup?: string;
        SalesMarkup?: number;
        TotalDiscount?: number;
        TotalPercentageDiscount?: number;
        LineDiscount?: number;
        PeriodicDiscount?: number;
        PeriodicPercentageDiscount?: number;
        LineManualDiscountPercentage?: number;
        LineManualDiscountAmount?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ReportRow entity interface.
     */
    export interface ReportRow {
        RowData?: CommerceProperty[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FormAnnotation entity interface.
     */
    export interface FormAnnotation extends Annotation {
        MenuItemLabel?: string;
        MenuItemName?: string;
        MenuItemType?: string;
        }
    
    /**
     * TaskGuideAnnotation entity interface.
     */
    export interface TaskGuideAnnotation extends Annotation {
        RecordingValueType?: string;
        Title?: string;
        ExampleText?: string;
        Hidden?: boolean;
        GlobalId?: string;
        }
    
    /**
     * CommandArgument entity interface.
     */
    export interface CommandArgument {
        Value?: string;
        IsReference?: boolean;
        }
    
    /**
     * PropertyUserAction entity interface.
     */
    export interface PropertyUserAction extends FormUserAction {
        Value?: string;
        ValueLabel?: string;
        PropertyName?: string;
        ControlName?: string;
        ControlType?: string;
        UserActionType?: string;
        IsReference?: boolean;
        LabelId?: string;
        }
    
    /**
     * InfoUserAction entity interface.
     */
    export interface InfoUserAction extends UserAction {
        FormId?: string;
        ControlLabel?: string;
        ControlLabelId?: string;
        ControlName?: string;
        Text?: string;
        Notes?: string;
        }
    
    /**
     * MenuItemUserAction entity interface.
     */
    export interface MenuItemUserAction extends UserAction {
        MenuItemName?: string;
        MenuItemType?: string;
        NavigationPath?: string[];
        }
    
    /**
     * ValidationUserAction entity interface.
     */
    export interface ValidationUserAction extends UserAction {
        Name?: string;
        Comment?: string;
        }
    
    /**
     * ArtifactSummary entity interface.
     */
    export interface ArtifactSummary {
        ArtifactType?: string;
        LanguageTags?: string[];
        }
    
    /**
     * MetadataPropertyValue entity interface.
     */
    export interface MetadataPropertyValue {
        PropertyId?: string;
        SingleValue?: string;
        MultiValue?: MetadataText[];
        Tags?: string[];
        ComboBox?: string;
        MultiSelect?: string[];
        Links?: MetadataHypertextLink[];
        }
    
    /**
     * FormContext entity interface.
     */
    export interface FormContext {
        FormID?: string;
        FormName?: string;
        RecordingName?: string;
        HasMetadata?: boolean;
        Sequence?: number;
        Annotations?: Annotation[];
        }
    
    /**
     * ExtensibleFiscalRegistrationType entity interface.
     */
    export interface ExtensibleFiscalRegistrationType extends ExtensibleEnumeration {
        }
    
    /**
     * FiscalTransactionTenderLineAdjustment entity interface.
     */
    export interface FiscalTransactionTenderLineAdjustment {
        TenderLineNumber?: number;
        AdjustmentAmount?: number;
        RecordGuid?: string;
        TransactionId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FiscalTransactionSalesLineAdjustment entity interface.
     */
    export interface FiscalTransactionSalesLineAdjustment {
        SalesLineNumber?: number;
        Exclude?: boolean;
        RecordGuid?: string;
        TransactionId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * DetailedOrderStatus entity interface.
     */
    export interface DetailedOrderStatus extends ExtensibleEnumeration {
        }
    
    /**
     * LineValidationResult entity interface.
     */
    export interface LineValidationResult {
        LineId?: string;
        ValidationFailures?: DataValidationFailure[];
        }
    
    /**
     * SalesAffiliationLoyaltyTier entity interface.
     */
    export interface SalesAffiliationLoyaltyTier extends AffiliationLoyaltyTier {
        TransactionId?: string;
        ChannelId?: number;
        TerminalId?: string;
        ReceiptId?: string;
        StaffId?: string;
        }
    
    /**
     * TaxViewLine entity interface.
     */
    export interface TaxViewLine {
        TaxId?: string;
        TaxAmount?: number;
        }
    
    /**
     * Coupon entity interface.
     */
    export interface Coupon {
        CodeId?: string;
        Code?: string;
        DiscountOfferId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerAccountDepositLine entity interface.
     */
    export interface CustomerAccountDepositLine {
        Amount?: number;
        CustomerAccount?: string;
        Comment?: string;
        StoreNumber?: string;
        Terminal?: string;
        Shift?: string;
        TransactionStatusValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * Note entity interface.
     */
    export interface Note {
        Title?: string;
        Description?: string;
        StaffId?: string;
        RestrictionValue?: number;
        DocuRefRecId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CustomerAttribute entity interface.
     */
    export interface CustomerAttribute {
        AttributeValue?: CommercePropertyValue;
        Units?: string;
        RecordId?: number;
        Name?: string;
        KeyName?: string;
        DataTypeValue?: number;
        Attribute?: number;
        NameTranslations?: TextValueTranslation[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ContactInfo entity interface.
     */
    export interface ContactInfo {
        AddressTypeValue?: number;
        RecordId?: number;
        PartyLocationRecordId?: number;
        PartyRecordId?: number;
        PartyNumber?: string;
        Description?: string;
        Value?: string;
        ValueExtension?: string;
        LogisticsLocationId?: string;
        LogisticsLocationRecordId?: number;
        ParentLocation?: number;
        IsPrimary?: boolean;
        IsMobilePhone?: boolean;
        IsPrivate?: boolean;
        IsOptedInMarketing?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryQuantities entity interface.
     */
    export interface InventoryQuantities {
        UnitOfMeasure?: string;
        QuantityNotProcessed?: number;
        QuantityReserved?: number;
        QuantityPicked?: number;
        QuantityPacked?: number;
        QuantityInvoiced?: number;
        QuantityOrdered?: number;
        QuantityCanceled?: number;
        QuantityReturned?: number;
        }
    
    /**
     * DeliveryInformation entity interface.
     */
    export interface DeliveryInformation {
        DeliveryMode?: string;
        DeliveryAddress?: Address;
        DeliveryDate?: Date;
        PickupTimeslotStartDateTime?: Date;
        PickupTimeslotEndDateTime?: Date;
        }
    
    /**
     * ShiftTaxLine entity interface.
     */
    export interface ShiftTaxLine {
        TaxCode?: string;
        TaxAmount?: number;
        TaxRate?: number;
        NetAmount?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * TaxRegistration entity interface.
     */
    export interface TaxRegistration {
        RecordId?: number;
        Name?: string;
        CountryRegionId?: string;
        IsRegistrationNumberUnique?: boolean;
        IsPrimaryAddressRestricted?: boolean;
        TypeApplicabilityRuleRecordId?: number;
        TypeValue?: number;
        Description?: string;
        DirPartyLocationRecordId?: number;
        RegistrationNumber?: string;
        ValidFrom?: Date;
        ValidTo?: Date;
        Issuer?: string;
        IssueDate?: Date;
        Section?: string;
        DirectoryPartyRecordId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChannelTaxRegistration entity interface.
     */
    export interface ChannelTaxRegistration extends TaxRegistration {
        ChannelId?: number;
        }
    
    /**
     * LinkedProduct entity interface.
     */
    export interface LinkedProduct {
        ProductRecordId?: number;
        LinkedProductRecordId?: number;
        Quantity?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * DisplayOrderInCategory entity interface.
     */
    export interface DisplayOrderInCategory {
        CategoryRecordId?: number;
        DisplayOrder?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * RelatedProduct entity interface.
     */
    export interface RelatedProduct {
        ProductRecordId?: number;
        RelatedProductRecordId?: number;
        CatalogId?: number;
        RelationName?: string;
        IsExcludedRelation?: boolean;
        IsDirectRelation?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * KitComponent entity interface.
     */
    export interface KitComponent {
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ChannelReferenceAdditionalLookupCriteria entity interface.
     */
    export interface ChannelReferenceAdditionalLookupCriteria {
        OrderLookupAdditionalCriteriaTypeValue?: number;
        OrderLookupAdditionalCriteriaTypeParameterValue?: string;
        }
    
    /**
     * UserAlertFulfillmentLineParameter entity interface.
     */
    export interface UserAlertFulfillmentLineParameter extends FulfillmentLineParameter {
        ItemId?: string;
        ProductId?: number;
        UnitOfMeasure?: string;
        SerialNumberInLatestFulfillmentTransaction?: string;
        LatestFulfillmentTransactionOperationTypeValue?: number;
        }
    
    /**
     * ListingIdentity entity interface.
     */
    export interface ListingIdentity {
        ProductId?: number;
        LanguageId?: string;
        CatalogId?: number;
        Tag?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductRatingCount entity interface.
     */
    export interface ProductRatingCount {
        Rating?: number;
        Count?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * RegularStoreHours entity interface.
     */
    export interface RegularStoreHours {
        MondayOpenTime?: number;
        MondayCloseTime?: number;
        IsClosedOnMonday?: boolean;
        TuesdayOpenTime?: number;
        TuesdayCloseTime?: number;
        IsClosedOnTuesday?: boolean;
        WednesdayOpenTime?: number;
        WednesdayCloseTime?: number;
        IsClosedOnWednesday?: boolean;
        ThursdayOpenTime?: number;
        ThursdayCloseTime?: number;
        IsClosedOnThursday?: boolean;
        FridayOpenTime?: number;
        FridayCloseTime?: number;
        IsClosedOnFriday?: boolean;
        SaturdayOpenTime?: number;
        SaturdayCloseTime?: number;
        IsClosedOnSaturday?: boolean;
        SundayOpenTime?: number;
        SundayCloseTime?: number;
        IsClosedOnSunday?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ValidationPeriod entity interface.
     */
    export interface ValidationPeriod {
        RecordId?: number;
        PeriodId?: string;
        Description?: string;
        ValidFrom?: Date;
        ValidTo?: Date;
        StartingTime?: number;
        EndingTime?: number;
        IsTimeBounded?: number;
        MondayStartingTime?: number;
        MondayEndingTime?: number;
        IsMondayTimeBounded?: number;
        TuesdayStartingTime?: number;
        TuesdayEndingTime?: number;
        IsTuesdayTimeBounded?: number;
        WednesdayStartingTime?: number;
        WednesdayEndingTime?: number;
        IsWednesdayTimeBounded?: number;
        ThursdayStartingTime?: number;
        ThursdayEndingTime?: number;
        IsThursdayTimeBounded?: number;
        FridayStartingTime?: number;
        FridayEndingTime?: number;
        IsFridayTimeBounded?: number;
        SaturdayStartingTime?: number;
        SaturdayEndingTime?: number;
        IsSaturdayTimeBounded?: number;
        SundayStartingTime?: number;
        SundayEndingTime?: number;
        IsSundayTimeBounded?: number;
        IsEndTimeAfterMidnight?: number;
        IsMondayEndTimeAfterMidnight?: number;
        IsTuesdayEndTimeAfterMidnight?: number;
        IsWednesdayEndTimeAfterMidnight?: number;
        IsThursdayEndTimeAfterMidnight?: number;
        IsFridayEndTimeAfterMidnight?: number;
        IsSaturdayEndTimeAfterMidnight?: number;
        IsSundayEndTimeAfterMidnight?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * PriceLookupHeaderContext entity interface.
     */
    export interface PriceLookupHeaderContext {
        CustomerAccountNumber?: string;
        AffiliationLoyaltyTierLines?: AffiliationLoyaltyTier[];
        SalesOrderProperties?: AttributeValueBase[];
        ChannelId?: number;
        }
    
    /**
     * PriceLookupLineContext entity interface.
     */
    export interface PriceLookupLineContext {
        ProductRecordId?: number;
        UnitOfMeasureSymbol?: string;
        InventorySiteId?: string;
        InventoryLocationId?: string;
        DeliveryMode?: string;
        CatalogId?: number;
        SalesLineProperties?: AttributeValueBase[];
        }
    
    /**
     * ClientBookChange entity interface.
     */
    export interface ClientBookChange {
        FromStaffId?: string;
        ToStaffId?: string;
        CustomerId?: string;
        }
    
    /**
     * ChannelProfile entity interface.
     */
    export interface ChannelProfile {
        ProfileProperties?: ChannelProfileProperty[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * RetailSharedConfigurationParameter entity interface.
     */
    export interface RetailSharedConfigurationParameter {
        RecordId?: number;
        Name?: string;
        Value?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CDXDataStore entity interface.
     */
    export interface CDXDataStore {
        Name?: string;
        RecId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * UploadJobPackageRequest entity interface.
     */
    export interface UploadJobPackageRequest {
        JobId?: string;
        RerunUploadSessionId?: number;
        TargetStorage?: string;
        UploadJobDefintion?: string;
        UploadUrl?: string;
        }
    
    /**
     * ExtensibleAuditEventType entity interface.
     */
    export interface ExtensibleAuditEventType extends ExtensibleEnumeration {
        }
    
    /**
     * AuditEventFiscalTransaction entity interface.
     */
    export interface AuditEventFiscalTransaction {
        EventId?: number;
        LineNumber?: number;
        RegisterResponse?: string;
        Store?: string;
        TransDateTime?: Date;
        Terminal?: string;
        UploadType?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AuditEventFiscalRegistrationLine entity interface.
     */
    export interface AuditEventFiscalRegistrationLine {
        EventId?: number;
        RegisterResponse?: string;
        StoreId?: string;
        TransactionDateTime?: Date;
        TerminalId?: string;
        UploadType?: string;
        UploadTypeValue?: number;
        StaffId?: string;
        RecordGuid?: string;
        RegistrationStatusValue?: number;
        RegistrationProcessId?: string;
        ConnectorGroup?: string;
        ConnectorName?: string;
        ConnectorFunctionalityProfileId?: string;
        RegisterInfo?: string;
        CreatedDateTime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * NotificationDetail entity interface.
     */
    export interface NotificationDetail {
        ActionProperty?: string;
        ItemCount?: number;
        DisplayText?: string;
        IsNew?: boolean;
        LastUpdatedDateTimeStr?: string;
        IsSuccess?: boolean;
        IsLiveContentOnly?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FiscalIntegrationDocumentContext entity interface.
     */
    export interface FiscalIntegrationDocumentContext {
        AuditEvent?: AuditEvent;
        SignatureData?: FiscalIntegrationSequentialSignatureData[];
        }
    
    /**
     * FiscalIntegrationDocumentAdjustment entity interface.
     */
    export interface FiscalIntegrationDocumentAdjustment {
        TenderLineAdjustments?: FiscalTransactionTenderLineAdjustment[];
        SalesLineAdjustments?: FiscalTransactionSalesLineAdjustment[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FiscalIntegrationSignatureDataContext entity interface.
     */
    export interface FiscalIntegrationSignatureDataContext {
        SequentialSignatureKey?: string;
        SequentialNumber?: number;
        }
    
    /**
     * FiscalIntegrationRegistrationProcessLine entity interface.
     */
    export interface FiscalIntegrationRegistrationProcessLine {
        RegistrationProcessId?: string;
        SequenceNumber?: number;
        Priority?: number;
        ConnectorTypeValue?: number;
        FunctionalityProfileGroupId?: string;
        AllowSkip?: boolean;
        AllowMarkAsRegistered?: boolean;
        AllowPostpone?: boolean;
        Optional?: boolean;
        RegistrationSettings?: FiscalIntegrationRegistrationSettings;
        SupportedFiscalEventTypes?: number[];
        SupportedNonFiscalEventTypes?: number[];
        SequentialKeys?: string[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * FiscalIntegrationRegistrationSettings entity interface.
     */
    export interface FiscalIntegrationRegistrationSettings {
        SkipReasonCode?: string;
        MarkAsRegisteredReasonCode?: string;
        PostponeReasonCode?: string;
        }
    
    /**
     * FiscalIntegrationFiscalRegistrationProcessSummaryLine entity interface.
     */
    export interface FiscalIntegrationFiscalRegistrationProcessSummaryLine {
        RegistrationProcessLine?: FiscalIntegrationRegistrationProcessLine;
        ConnectorName?: string;
        ConnectorTypeValue?: number;
        ConnectorLocationValue?: number;
        ConnectionProperties?: FiscalIntegrationConfigurationProperty[];
        ErrorCode?: number;
        }
    
    /**
     * FiscalIntegrationConfigurationProperty entity interface.
     */
    export interface FiscalIntegrationConfigurationProperty {
        LabelName?: string;
        Value?: string;
        }
    
    /**
     * FiscalIntegrationServiceFailureDetails entity interface.
     */
    export interface FiscalIntegrationServiceFailureDetails {
        FailureTypeValue?: number;
        IsRetryAllowed?: boolean;
        ErrorCode?: string;
        ErrorMessage?: string;
        }
    
    /**
     * CategoryPath entity interface.
     */
    export interface CategoryPath {
        Segments?: CategoryPathSegment[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * CategoryPathSegment entity interface.
     */
    export interface CategoryPathSegment {
        CategoryName?: string;
        CategoryId?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * SalesLineConfirmedShipDateChange entity interface.
     */
    export interface SalesLineConfirmedShipDateChange {
        LineNumber?: number;
        ConfirmedShipDate?: Date;
        }
    
    /**
     * AttachedService entity interface.
     */
    export interface AttachedService {
        BaseUrl?: string;
        ServiceId?: string;
        StatusValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ExtensibleInventoryJournalType entity interface.
     */
    export interface ExtensibleInventoryJournalType extends ExtensibleEnumeration {
        }
    
    /**
     * CustomerTimelineItemType entity interface.
     */
    export interface CustomerTimelineItemType {
        Description?: string;
        TypeId?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductWarehouseInventoryAvailability entity interface.
     */
    export interface ProductWarehouseInventoryAvailability {
        ProductId?: number;
        InventLocationId?: string;
        DataAreaId?: string;
        PhysicalInventory?: number;
        PhysicalReserved?: number;
        TotalAvailable?: number;
        TotalAvailableInventoryLevelLabel?: string;
        TotalAvailableInventoryLevelCode?: string;
        OrderedInTotal?: number;
        PhysicalAvailable?: number;
        PhysicalAvailableInventoryLevelLabel?: string;
        PhysicalAvailableInventoryLevelCode?: string;
        LastInventoryTransactionId?: number;
        UnpostedOnlineOrderedQuantity?: number;
        UnpostedFulfilledQuantity?: number;
        IsInventoryAvailabilityQuantityReturned?: boolean;
        UnprocessedQuantity?: number;
        QuantityUnitTypeValue?: number;
        UnitOfMeasure?: string;
        MaximumPurchasablePhysicalAvailableQuantity?: number;
        MaximumPurchasableTotalAvailableQuantity?: number;
        SumUncountedTransactions?: number;
        IgnoreQuantityUnitType?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * QuantityUnitType entity interface.
     */
    export interface QuantityUnitType extends ExtensibleEnumeration {
        }
    
    /**
     * ProductInventoryAvailability entity interface.
     */
    export interface ProductInventoryAvailability {
        ProductId?: number;
        DataAreaId?: string;
        TotalAvailableQuantity?: number;
        TotalAvailableInventoryLevelLabel?: string;
        TotalAvailableInventoryLevelCode?: string;
        PhysicalAvailableQuantity?: number;
        PhysicalAvailableInventoryLevelLabel?: string;
        PhysicalAvailableInventoryLevelCode?: string;
        QuantityUnitTypeValue?: number;
        UnitOfMeasure?: string;
        MaximumPurchasablePhysicalAvailableQuantity?: number;
        MaximumPurchasableTotalAvailableQuantity?: number;
        IgnoreQuantityUnitType?: boolean;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * InventoryQuantity entity interface.
     */
    export interface InventoryQuantity {
        ProductId: number;
        ItemId?: string;
        DataAreaId?: string;
        ColorId?: string;
        SizeId?: string;
        StyleId?: string;
        ConfigurationId?: string;
        InventoryLocationId?: string;
        InventorySiteId?: string;
        TotalAvailable: number;
        PhysicalAvailable: number;
        PhysicalInventory: number;
        PhysicalReserved: number;
        OrderedInTotal: number;
        }
    
    /**
     * ProductUnit entity interface.
     */
    export interface ProductUnit {
        ProductId?: number;
        UnitOfMeasure?: string;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ParameterSet entity interface.
     */
    export interface ParameterSet {
        }
    
    /**
     * CartLineValidationResults entity interface.
     */
    export interface CartLineValidationResults {
        ValidationResultsByLineId?: CartLineValidationResultsByLineId;
        ValidationFailuresByCartLines?: LineDataValidationFailure[];
        }
    
    /**
     * CommerceException entity interface.
     */
    export interface CommerceException {
        LocalizedMessage?: string;
        ErrorResourceId?: string;
        }
    
    /**
     * DataValidationException entity interface.
     */
    export interface DataValidationException extends CommerceException {
        ValidationResults?: DataValidationFailure[];
        }
    
    /**
     * MissingRequiredReasonCodeException entity interface.
     */
    export interface MissingRequiredReasonCodeException extends DataValidationException {
        RequiredReasonCodes?: ReasonCode[];
        TransactionRequiredReasonCodeIds?: string[];
        ReasonCodeRequirements?: ReasonCodeRequirement[];
        }
    
    /**
     * SecurityException entity interface.
     */
    export interface SecurityException extends CommerceException {
        }
    
    /**
     * DeviceAuthenticationException entity interface.
     */
    export interface DeviceAuthenticationException extends SecurityException {
        }
    
    /**
     * HeadquarterTransactionServiceException entity interface.
     */
    export interface HeadquarterTransactionServiceException extends CommerceException {
        }
    
    /**
     * UserAuthenticationException entity interface.
     */
    export interface UserAuthenticationException extends SecurityException {
        }
    
    /**
     * UserAuthorizationException entity interface.
     */
    export interface UserAuthorizationException extends SecurityException {
        }
    
    /**
     * FeatureNotSupportedException entity interface.
     */
    export interface FeatureNotSupportedException extends CommerceException {
        }
    
    /**
     * CartValidationException entity interface.
     */
    export interface CartValidationException extends DataValidationException {
        }
    
    /**
     * TenderValidationException entity interface.
     */
    export interface TenderValidationException extends DataValidationException {
        TenderTypeId?: string;
        }
    
    /**
     * CommerceDataExchangeException entity interface.
     */
    export interface CommerceDataExchangeException extends CommerceException {
        }
    
    /**
     * ExtensibleEnumerationException entity interface.
     */
    export interface ExtensibleEnumerationException extends CommerceException {
        }
    
    /**
     * TaskManagementException entity interface.
     */
    export interface TaskManagementException extends CommerceException {
        TaskManagementErrors?: TaskManagementError[];
        }
    
    /**
     * TaskManagementServerException entity interface.
     */
    export interface TaskManagementServerException extends TaskManagementException {
        }
    
    /**
     * TaskManagementClientException entity interface.
     */
    export interface TaskManagementClientException extends TaskManagementException {
        }
    
    /**
     * RemoteServiceNotAvailableException entity interface.
     */
    export interface RemoteServiceNotAvailableException extends CommerceException {
        }
    
    /**
     * PaymentException entity interface.
     */
    export interface PaymentException extends CommerceException {
        AdditionalContext?: string;
        PaymentSdkErrors?: PaymentError[];
        }
    
    /**
     * DataValidationFailure entity interface.
     */
    export interface DataValidationFailure {
        ErrorContext?: string;
        ErrorResourceId?: string;
        MemberNames?: string[];
        LocalizedMessage?: string;
        }
    
    /**
     * ItemDiscontinuedException entity interface.
     */
    export interface ItemDiscontinuedException extends CommerceException {
        RemovedUnavailableItemIds?: string;
        }
    
    /**
     * InventoryDocumentLockedByOtherTerminalException entity interface.
     */
    export interface InventoryDocumentLockedByOtherTerminalException extends DataValidationException {
        WorkingTerminalId?: string;
        CurrentTerminalId?: string;
        }
    
    /**
     * InventoryDocumentExceedMaximumQuantityException entity interface.
     */
    export interface InventoryDocumentExceedMaximumQuantityException extends DataValidationException {
        MaximumQuantity: number;
        AllowOverDelivery: boolean;
        }
    
    /**
     * ProductPricingConfigurationException entity interface.
     */
    export interface ProductPricingConfigurationException extends CommerceException {
        ProductPricingConfigurationErrors?: ProductPricingConfigurationError[];
        }
    
    /**
     * CartLineValidationResultsByLineId entity interface.
     */
    export interface CartLineValidationResultsByLineId {
        LineIdToProductBehaviorMap?: KeyValuePair_2OfString_ProductBehavior[];
        ValidationResultsPairs?: LineValidationResult[];
        }
    
    /**
     * CommerceRuntimeCompositionException entity interface.
     */
    export interface CommerceRuntimeCompositionException extends CommerceException {
        }
    
    /**
     * ChecklistTaskValidationException entity interface.
     */
    export interface ChecklistTaskValidationException extends DataValidationException {
        }
    
    /**
     * InsufficientCredentialLengthException entity interface.
     */
    export interface InsufficientCredentialLengthException extends DataValidationException {
        ActualLength?: number;
        MinLength?: number;
        }
    
    /**
     * ExtensibleEnumerationCacheException entity interface.
     */
    export interface ExtensibleEnumerationCacheException extends CommerceException {
        }
    
    /**
     * ExtensionConfigurationException entity interface.
     */
    export interface ExtensionConfigurationException extends CommerceException {
        }
    
    /**
     * StaffPasswordExpiredException entity interface.
     */
    export interface StaffPasswordExpiredException extends UserAuthenticationException {
        StaffId?: string;
        }
    
    /**
     * ChannelConfigurationNotFoundException entity interface.
     */
    export interface ChannelConfigurationNotFoundException extends CommerceException {
        }
    
    /**
     * CopilotServiceException entity interface.
     */
    export interface CopilotServiceException extends CommerceException {
        }
    
    /**
     * PaymentConfigurationException entity interface.
     */
    export interface PaymentConfigurationException extends CommerceException {
        PaymentConfigurationSdkErrors?: string[];
        }
    
    /**
     * SecretConfigurationNotFoundException entity interface.
     */
    export interface SecretConfigurationNotFoundException extends CommerceException {
        }
    
    /**
     * TenderTypePolicy entity interface.
     */
    export interface TenderTypePolicy {
        OriginalTenderType?: string;
        AllowedReturnTenderTypes?: string[];
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * AccountStatementRequest entity interface.
     */
    export interface AccountStatementRequest {
        RequestedUserId?: string;
        IsForFullOrganization?: boolean;
        FromDate?: Date;
        ToDate?: Date;
        RequestingUserEmail?: string;
        DeliveryTypeValue?: number;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * BusinessPartnerOperationRequestDetails entity interface.
     */
    export interface BusinessPartnerOperationRequestDetails {
        InvoiceId?: string;
        AccountStatementStartDateTime?: Date;
        AccountStatementEndDateTime?: Date;
        ExtensionProperties?: CommerceProperty[];
        }
    
    /**
     * ProductPricingConfigurationError entity interface.
     */
    export interface ProductPricingConfigurationError {
        ProductId?: string;
        ErrorResourceId?: string;
        }
    
    /**
     * TaskManagementError entity interface.
     */
    export interface TaskManagementError {
        ErrorResourceId?: string;
        LocalizedMessage?: string;
        TaskId?: string;
        }
    
    /**
     * LineDataValidationFailure entity interface.
     */
    export interface LineDataValidationFailure {
        DataValidationFailure?: DataValidationFailure;
        LineIndex?: number;
        }
    
    /**
     * WrongEndpointException entity interface.
     */
    export interface WrongEndpointException extends CommerceException {
        RedirectUri?: string;
        }
    
    /**
     * BadRequestException entity interface.
     */
    export interface BadRequestException extends CommerceException {
        }
    
    /**
     * ChargeTaxMeasure entity interface.
     */
    export interface ChargeTaxMeasure extends TaxMeasure {
        MarkupLineNumber?: number;
        }
    
    /**
     * KeyValuePair_2OfString_ProductBehavior entity interface.
     */
    export interface KeyValuePair_2OfString_ProductBehavior {
        }
    
    /**
     * CompilationFailedException entity interface.
     */
    export interface CompilationFailedException extends CommerceException {
        }
    
    /**
     * FranceExtensibleAuditEventType entity interface.
     */
    export interface FranceExtensibleAuditEventType extends ExtensibleAuditEventType {
        }
    
    /**
     * AustriaExtensibleAuditEventType entity interface.
     */
    export interface AustriaExtensibleAuditEventType extends ExtensibleAuditEventType {
        }
    
