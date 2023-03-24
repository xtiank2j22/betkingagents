var locale = {
    account: {
        activate: {
            activated: 'Account Activated!',
            activatedLogin: 'Your account has been successfully activated and can now be used to log in to the site',
            errorMessage: 'Error message',
            activationInstruction: {
                partOne: "If you copied and pasted the link, please make sure that you didn't miss part of it. Otherwise you can",
                partTwo:
                    "to resend the activation link again. Please make sure that you check the spam folder if you don't receive the mail after a while. If you still cannot activate your account, please"
            },
            contactCustomerSupport: 'to contact customer support.',
            resendActivationEmail: 'Resend Activation Email ',
            activationEmailSent: 'Activation Email Sent Successfully',
            resendSuccessDescription:
                "The email was sent to your mailbox. You should be rinvalideceiving the mail shortly. Please make sure that you check the spam folder if you don't receive the mail after a while. If you still cannot activate your account, please",
            failedToSendActivationEmail: 'Failed to Send Activation Email.',
            resendFailDescription: {
                partOne: 'The activation email could not be sent. Please contact support support by',
                partTwo: 'clicking here',
                partThree: 'and report the following error :'
            }
        },
        balance: {
            title: 'Balances',
            viewBalances: 'View Balances',
            credit: 'Credit',
            availableAmount: 'Available Amount',
            availableCredit: 'Available Credit',
            withdrawableBalance: 'Withdrawable Balance',
            totalBalance: 'Total Balance',
            yourBalance: 'Your Balance',
            whyNotAllDisc: 'Why can`t I withdraw my whole balance?',
        },
        bonus: {
            title: 'Bonuses',
            description: 'Boost your winnings with our fantastic bonuses',
            type: {
                activeBonus: 'Your Active Bonuses',
                inactiveBonus: 'Inactive Bonuses',
                previousBonus: 'Your Previous Bonuses',
                missedBonus: 'Bonuses you missed out on',
                pausedBonus: 'Paused Bonuses'
            },
            yourProgress: 'Your Progress',
            progress: 'Progress',
            expires: 'Expires',
            activate: 'Activate',
            moreInfo: 'More Info',
            activationMessages: {
                welcome: {
                    partOne: "By activating the bonus, you will get 100% of your first deposit in the bonus wallet. You will only be able to withdraw these funds when you meet the bonus wagering requirements. Read more",
                    partTwo: "Also, note that the bonus is valid for 30 days from the date of activation.",
                    cta: "here"
                },
                other: {
                    partOne: "Activate Bonus?",
                    partTwo: "Read the bonus rules",
                    cta: "here"
                }
            },
            noBonus: {
                activeBonus: 'No active bonuses available',
                inactiveBonus: 'No inactive bonuses available',
                previousBonus: 'No previous bonuses available',
                missedBonus: 'No bonuses available',
                pausedBonus: 'No paused bonuses available'
            },
            singleBonusType: {
                activeBonus: 'Active',
                inactiveBonus: 'Inactive',
                previousBonus: 'Previous',
                missedBonus: 'Missed',
                pausedBonus: 'Paused'
            },
            pauseBonus: 'Pause Bonus',
            resumeBonus: 'Resume Bonus',
            bonusPaused: 'Bonus has been paused',
            bonusUnpaused: 'Bonus has been resumed',
            bonusInfoMessage: 'To withdraw from your bonus amount, you need to first meet your wagering requirements below.',
            transferNotPossible: "Wagering requirement not met! Bonus balance is ZERO . You can no longer transfer from your bonus to main Wallet",
            bankVerification: {
                title: 'Verification',
                header: 'Verify your account details',
                content: 'For your safety, we’ll need to verify your identity before you can claim the welcome bonus.',
                helperText: 'Please ensure your bank account information matches the first and last name provided for your BetKing account.',
                bankName: 'Bank Name',
                bankNamePlaceholder: 'Select a Bank Name',
                bankAccountNumber: 'Bank Account Number*',
                bankAccountNumberInvalid: 'Bank account number is invalid',
                fieldRequired: 'This field is required',
                buttonText: 'Next',
            },
            kycFormUnavailable: 'KYC verification form is currently unavailable. Please try again or contact support.',
        },
        viewSession: {
            from: 'Date From',
            to: 'Date To',
            noResults: 'No results for current search parameters.',
            noResultsTitle: 'No Results to display'
        },
        betSearch: {
            latestThousand: 'Only the latest 1000 records are returned. Please narrow down the filtering options',
            ticket: "Ticket",
            gametype: 'Game Type',
            couponDetails: 'Coupon Details Sports',
            couponDetailsGeneric: 'Coupon Details',
            couponDetailsVirtuals: 'Coupon Details Virtuals',
            couponDetailsLottery: 'Ticket Details Lottery',
            onlineCode: 'Online Code',
            eventId: 'Event ID',
            from: 'Date From',
            to: 'Date To',
            noUsers: 'No Users',
            allUsers: 'All Users',
            couponCode: 'Coupon Code',
            outcome: 'Outcome',
            outcomeOptions: {
                winnings: 'Winnings',
                losers: 'Lost',
                inProgress: 'In progress',
                cancelled: 'Cancelled',
                placed: 'Placed'
            },
            couponStatus: {
                won: 'Won',
                partialWon: 'Partially won',
                lost: 'Lost',
                running: 'Running',
                voided: 'Voided',
                cancelled: 'Cancelled',
                evaluation: 'Evaluation',
                cashout: 'Cashout',
                promotion: 'Promotion'
            },
            couponTypes: {
                Unknown: '',
                '1': 'Single',
                '2': 'Multiple',
                '3': 'System'
            },
            filterBySettlement: 'Filter by Settlement Date',
            coupon: 'Coupon',
            dateOfResult: 'Date Of Result',
            amount: 'Amount',
            result: 'Result',
            winning: 'Winning',
            paid: 'Paid',
            betType: 'Bet Type',
            singMultDetails: 'Single/multiple Details',
            combinationDetails: 'System Details',
            positive: 'Winning',
            negative: 'Lost',
            potentialWin: 'Potential Winnings',
            potentialWinNoBonus: 'Potential Winnings (no Bonus)',
            maxBonus: 'Max. Bonus Applied',
            maxPotentialWin: 'Max. Potential Winnings',
            event: 'Event',
            type: 'Type',
            odds: 'Odds',
            betDetails: 'Bet Details',
            running: 'Running',
            cancelled: 'Cancelled',
            systemEvaluation: 'Evaluation',
            refused: 'Refused',
            userEvaluation: 'User Evaluation',
            reopened: 'ReOpened',
            unknown: 'Unknown',
            listOfEvents: 'Event List',
            legendRunning: 'Running',
            legendGreen: 'Won',
            legendRed: 'Lost',
            legendBrown: "Cashout",
            legendBlue: 'Void',
            legendRunning: "Running",
            legendBlueGreen: '½ Won / ½ Void',
            legendBlueRed: '½ Lost / ½ Void',
            invalidCouponCode: 'Error: Invalid coupon code',
            noBetSearchResults: 'No results for current search parameters.',
            noResultsTitle: 'No Results to display',
            betPaid: 'Bet Paid Successfully!',
            cancelledPayment: 'Payment cancelled Successfully!',
            purchasedShares: 'Purchased Shares',
            markup: 'Markup',
            cancelPayment: 'Cancel Payment',
            payPayment: 'Pay',
            settlePayment: 'Mark As Paid',
            settledPayment: 'Paid',
            rebetExpired: 'All events in selected coupon are expired.',
            rebetNotFound: 'Coupon was not found.',
            unableToRebet: 'Unable to rebet this coupon.',
            couponDate: 'Coupon Date',
            couponStatusId: 'Result',
            stake: 'Amount',
            won: 'Winning',
            wonTaxed: 'Tax on Winnings',
            userName: 'UserName',
            remark: 'Remark',
            remarkDate: 'Remark Date',
            pricePerShares: 'Price per 1%',
            availableShares: '% Available',
            copyToClipboard: 'Copy to Clipboard',
            lottery: {
                ticketCode: "Ticket Code",
                ticketDetails: "Ticket Details",
                selectionDetails: "Selections",
                totalWonAmount: "Total Won Amount",
                playedOn: "Played on",
                status: 'Status',
                draw: 'Draw',
                selectionId: "Selection ID",
                drawNo: "Draw No.",
                drawDate: "Draw Date & Time",
                selectionMain: "Selection (Main Numbers)",
                powerball: "(Powerball)",
                combinations: "Comb.",
                quickPick: "QP",
                noResults: "Not drawn yet"
            },
        },
        cashier: {
            titles: {
                '0MF': 'Sports (Main Account)',
                '150F': 'Betsoft Wallet',
                '15F': 'EspressoGames Wallet',
                '60F': 'Evolution Wallet',
                '35F': 'HiveGames Wallet',
                '195F': 'HivePoker Wallet',
                '30F': 'MediaLiveGames Wallet',
                '20F': 'Netent Wallet',
                '220F': 'GoldenBet Wallet',
                '5F': 'Patagonia Wallet'
            },
            instructions: {
                '2F': 'The sports account is used to place bets on our Sportsbook, Bet on Live sports events and play on the Virtual Games in our Games section.',
                '150F': 'This is the cashier used to play on Betsoft',
                '20F': 'This is the cashier used to play on Netent',
                '15F': 'This is the cashier used to play on the EspressoGames in our Casino Section and the Queen Casino Games in our games section.',
                '60F': 'This is the the cashier used to play casino online on the Jack Live Casino.',
                '220F': 'This is the cashier used to play on Goldenbet games.',
                '35F': 'This is the cashier used to play New Casino games in our Casino section.',
                '195F': 'This is the cashier used to play New Casino poker in our Poker section.',
                '30F': 'This is the cashier used to play on MediaLiveGames.',
                '5F': 'This is the cashier used to play on Patagonia.'
            },
            statements: {
                period: 'Period',
                manual: 'Manual',
                currentWeek: 'Current week',
                currentMonth: 'Current month',
                yesterday: 'Yesterday',
                lastWeek: 'Last week',
                lastMonth: 'Last month',
                reportDisclaimer: '<strong>Important Notice:</strong> This report has been updated to match West African Time and records are from 12:00am - 11:59pm daily. </br></br>',
                reportTitle: '* Please note, when filtering specific transaction types, the balance shown is equivalent to the balance as at the time of the transaction displayed.'
            },
            quickcashier: 'Quick Cashier',
            selectFrom: 'Select Account to Transfer From',
            selectTo: 'Select Account to Transfer To',
            transferNow: 'Transfer between Accounts',
            transferFrom: 'Transfer funds from  ',
            enterAmount: 'Enter Amount:  €',
            Transfer: 'Transfer',
            successfullTransfer: ' was successfully transferred ',
            amountNotValid: 'Invalid amount'
        },
        password: {
            title: 'Password',
            unableToChange: 'Unable to change password: ',
            numberNotFound: 'User does not exist, please register to place bet',
            emailSent: 'Reset Password instructions sent',
            changePassword: 'Change Password',
            currentPassword: 'Current Password',
            newPassword: 'New Password',
            passChanged: 'Password Changed',
            createNewPassword: 'to create new password!',
            sendPassword: 'Send me the password by e-mail',
            resetPassword: 'Reset your password',
            passMin: "Password must be between 6 to 15 characters long",
            passMax: "Password must be between 6 to 15 characters long",
            passDontMatch: 'Passwords Invalid or Do Not Match',
            confirmPassword: 'Confirm Password',
            updatePassButton: 'Update Password',
            forgotPassword: 'Forgot Password?',
            forgotPasswordTxt: 'Please enter the username you used to register your account with:',
            forgotPasswordTxtStep1: "",
            forgotPasswordTxtStep2: "",
            forgotPasswordTxtStep3: "",
            nameAnnotation: "Name entered must match bank account information for payout.",
            passwordAnnotation: 'Your password should be between 6 and 15 characters long, and must not contain spaces.'
        },
        phoneNumber: {
            updatePhoneNumberButton: "Update Phone Number",
            currentPhoneNumber: "Current Phone Number",
            newPhoneNumber: "New Phone Number",
            note: "If you change your phone number, you will be asked to verify and input a verification code sent to the new number.",
            alreadyRegisteredSalutation: "Your Highness,",
            alreadyRegisteredPart1: "The number",
            alreadyRegisteredPart2: "is already registered on another account. If you choose to proceed, all other accounts associated with this phone number will become inactive.",
            alreadyRegisteredLocked: "Your phone number is verified against another account. Update and verify your account to continue.",
            alreadyRegisteredGracePeriod: "Your phone number is yet to be confirmed. Update or Validate your phone number to access your account.",
            verifyNumber: "Verify the number above",
            verifyDifferentAccount: "Verify a different account",
            phoneNumberUpdated: "Phone number Updated",
            internationalCode: "Int. Code"
        },
        paymentMethods: {
            inputErrorType: {
                depositAmountShouldBeAbove: 'Deposit amount should be above ',
                depositAmountExceedsTheMaxLimitOf: 'Deposit amount exceeds the maximum limit of ',
                withdrawalAmountShouldBeAbove: 'Withdrawal amount should be above ',
                withdrawalAmountExceedsTheMaxLimitOf: 'Withdrawal amount exceeds the maximum limit of ',
            },
            transactionRequestNProgWithTransferCodeMsg: {
                title: 'TRANSACTION REQUEST IN PROGRESS',
                youCodeIs: 'Your bill reference number is',
                visitCbeShop: 'Visit any CBE agent shop with this code or dial *847# on your phone choose 5 and then 2.',
                enterCodeNComplete: 'Enter the Paybill code "220179" and your reference number above and your CBE wallet PIN to complete the transaction.',
            },
            mobileWalletOn: 'Mobile Wallet on',
            rejectedPopupTitle: "Sorry, you can't proceed with your withdrawal due to the following reason(s):",
            rejectedErrorType: {
                WithdrawalOfDepositAutoWithdrawalCheck: 'Withdrawable balance exceeded',
                KYCStatusCheck: 'KYC',
                BankTransferDetailsAutoWithdrawalCheck: 'Name Mismatch',
                DailyAttemptAutoWithdrawalCheck: 'Daily withdrawal limit exceeded',
            },
            paymentGeneralErrorCodes: {
                AMOLE_WITHDRAW_AMOUNT_ABOVE_LIMIT: 'Withdrawal amount below minimum limit',
                AMOLE_WITHDRAW_AMOUNT_BELOW_LIMIT: 'Withdrawal amount above maximum limit',
                AMOLE_WITHDRAW_MOBILE_NOT_FOUND: 'Something went wrong. Mobile was not found.',
                AMOLE_WITHDRAW_NOT_ENABLED: 'Withdrawal not enabled',
                CBE_DEPOSIT_NOT_ENABLED: 'Deposit not enabled',
                CBE_WITHDRAWAL_NOT_ENABLED: 'Withdrawal not enabled',
                CBE_WITHDRAW_AMOUNT_ABOVE_LIMIT: 'Withdrawal amount exceeds the maximum limit of {MaximumLimit}',
                CBE_WITHDRAW_AMOUNT_BELOW_LIMIT: 'Withdrawal amount should be above {MinimumLimit}',
                CBE_DEPOSIT_AMOUNT_ABOVE_LIMIT: 'Deposit amount exceeds the maximum limit of {MaximumLimit}',
                CBE_DEPOSIT_AMOUNT_BELOW_LIMIT: 'Deposit amount should be above {MinimumLimit}',
                CBE_USR_NF: 'Something went wrong. User was not found.',
                CBE_INVALID_AMOUNT: 'The amount entered is invalid',
                CBE_TX_DAILY_DEPOSIT_LIMIT_EXCEEDED: 'Your daily deposit amount exceeds the transaction limit of {MaximumDailyLimit}',
                CBE_TX_DAILY_DEPOSIT_ATTEMPTS_EXCEEDED: 'Only {MaximumAttempts} deposit attempts allowed in a day',
                CBE_TX_DAILY_WITHDRAWAL_LIMIT_EXCEEDED: 'Your daily withdrawal amount exceeds the transaction limit of {MaximumDailyLimit}',
                CBE_TX_DAILY_WITHDRAWAL_ATTEMPTS_EXCEEDED: 'Only {MaximumAttempts} withdrawal attempts allowed in a day',
                Liability_WithdrawalMaxLimit: 'Maximum withrdawal limit is : {MaximumWithdrawalLimit}, Cannot withdraw an amount of {TransactionAmount}',
                Liability_WithdrawalNotAllowed: 'Withdrawal not allowed because your current liability is {CurrentScore}',
                FN_USER_ACCOUNT_NOT_ENOUGH_BALANCE: 'You do not have enough funds to perform this transaction',
                FIN_WRONG_USER: 'Bank account does not belong to this user',
                FIN_BANK_ACCOUNT_DISABLED: 'Bank account is not marked as enabled',
                FIN_BANK_ACCOUNT_DETAILS_NOT_FOUND: 'Bank account details not found',
                INTERSWITCH_WITHDRAW_NOT_ENABLED: 'Withdrawal method not enabled',
                INTERSWITCH_INVALID_AMOUNT: 'The amount to Withdraw has to be between {MinimumLimit} and {MaximumLimit}',
                ZENITHBANK_WITHDRAWAL_NOT_ENABLED: 'Withdrawal not enabled',
                ZENITHBANK_WITHDRAWAL_AMOUNT_BELOW_LIMIT: 'Withdrawal amount below minimum limit',
                ZENITHBANK_WITHDRAWAL_AMOUNT_ABOVE_LIMIT: 'Withdrawal amount above maximum limit',
                INTERSWITCH_WITHDRAWAL_FAILED: 'Something went wrong. Please try again.',
                ZENITHBANK_WITHDRAWAL_FAILED: 'Something went wrong. Please try again.',
                AW_AUDIT_TX_ERR: 'Something went wrong. Please try again.',
                INTERNAL_SERVER_ERROR: 'Something went wrong. Please try again.',
                HARD_CHECK_AW_EXCEPTION: 'Sorry, you can’t currently proceed with your withdrawal due to the following reason(s):',
                TELEBIRR_SERVICE_ERROR: 'TeleBirr is down and not serving any requests.',
                TELEBIRR_DEPOSIT_ERROR: 'Deposit error happened while creating a transaction in our system.',
                TELEBIRR_DEPOSIT_NOT_ENABLED: 'Deposit request was rejected during validation phase.',
                TELEBIRR_DEPOSIT_AMOUNT_ABOVE_LIMIT: 'Deposit amount exceeds the maximum limit. ',
                TELEBIRR_DEPOSIT_AMOUNT_BELOW_LIMIT: 'Deposit amount is less than the minimum limit.',
                TELEBIRR_DEPOSIT_AMOUNT_MORE_THAN_TWO_DECIMAL_DIGITS: 'Deposit amount has more than 2 digits after decimal.',
                TELEBIRR_DEPOSIT_REDIRECT_URL_INVALID: 'Redirect Url in the deposit request is invalid.',
                paystack: {
                    PAYSTACK_NOT_ENABLED: 'This payment provider is currently suspended. Please try again later.',
                    PAYSTACK_USERID_IS_REQUIRED: 'Unable to process transaction due to missing data.',
                    PAYSTACK_AMOUNT_LESS_THAN_OR_EQUAL_TO_ZERO: 'Invalid deposit amount.',
                    PAYSTACK_DEPOSIT_AMOUNT_BELOW_LIMIT: 'Deposit amount is below the minimum amount required.',
                    PAYSTACK_DEPOSIT_AMOUNT_ABOVE_LIMIT: 'Deposit amount is above the maximum amount allowed.',
                    PAYSTACK_DEPOSITED_PM_MISMATCH: "The payment provider you're trying to deposit with is different from the one that's linked to your account.",
                    PAYSTACK_DEPOSITED_PM_STILL_IN_PENDING: "There's a pending transaction from a different payment provider that's still being processed. Please try again later.",
                    PAYSTACK_DEPOSIT_AUTH_CREDIT_CARD_UPDATE_FAILED: 'An error occurred while saving credit card details. Please try again.',
                    PAYSTACK_NOT_RESOLVE_ACCOUNT_NUMBER: "The payment provider you're trying to withdraw with is different from the one that's linked to your account.",
                    PAYSTACK_MOBILE_NUMBER_IS_MISSING: 'Unable to process withdraw due to missing data.',
                    PAYSTACK_WITHDRAW_AMOUNT_BELOW_LIMIT: 'Withdraw amount is below the minimum amount required.',
                    PAYSTACK_WITHDRAW_AMOUNT_ABOVE_LIMIT: 'Withdraw amount is above the maximum amount allowed.',
                    PAYSTACK_INVALID_PAYMENT_METHOD: 'You have not done any deposits yet. Please do one before withdraw.',
                    PAYSTACK_DEFAULT: 'An error has occurred. Please try again.'
                },
            },
            registeredPhoneNumber: 'Registered Phone number',
            pinVerification: 'PIN number must consist of only numbers',
            pin4digitsVerification: 'PIN number must be 4 digits',
            invalidPin: 'Invalid Pin',
            creditCardVerification: 'Credit card must be 15-19 digits',
            creditCardOnlyNumbers: 'Credit card must consist of only numbers',
            creditCardInvalid: 'Credit card invalid',
            year: 'Year',
            month: 'Month',
            expirationMonthRequired: 'Expiration month required',
            expirationYearRequired: 'Expiration year required',
            pendingApprovals: {
                title: 'Pending Approvals',
                disc: 'You currently have the following withdrawal awaithing your approval',
                cancelBtn: 'Cancel Withdrawal',
                completeBtn: 'Complete Withdrawal',
                pinDisc: 'Please enter the PIN sent to your phone',
                pinInputLabel: 'Please enter the One-Time PIN sent to your phone:',
                withId: 'with ID: ',
                send: 'SEND',
                successWithdrawal: "It’s on the way! Payment should hit your account within 24hours. Keep Kinging!",
                pendingWithdrawalSuccess: 'Pending withdrawal successfully cancelled',
                transactionSuccessful: 'Transaction Successful',
            },
            completeUserDataBeforeWithdrawal: 'In order to be able to withdraw funds from your {{brandName}} account, we kindly ask you to complete the full registration process.',
            amole: {
                depositSuccess: 'Success <br> Your deposit request is being processed.',
                amoleWithdrawal: 'Amole Withdrawal',
            },
            epg: {
                title: 'Credit & Debit Card ',
                epgInstructionsDeposit: {
                    partOne: 'Please enter the € amount you would like to deposit into your {{brandName}} account and click Accept.',
                    partTwo:
                        'Please note, that only players from following countries will be able to withdraw their funds directly to Mastercard / Maestro cards: Andorra, Belgium, Cyprus, Gibraltar, Hungary, Ireland. Latvia, Malta, Romania, Slovak Republic, Switzerland, Austria, Bulgaria, Czech Republic, Estonia, Germany, Iceland, Italy, Luxembourg, Monaco, Norway, San Marino, Slovenia and Sweden. Mastercard withdrawals to other countries are not possible due to local banks restrictions. Customers depositing by Mastercard / Maestro from not mentioned countries will need to create an additional payment option in order to withdraw their funds (VISA card, bank account, Bitcoin, and others.) Please contact support@pokershares.com if you require more information.'
                },
                successWithdrawalMessage: 'Your withdrawal was requested succesfully and will be processed within 48 hours.'
            },
            dummyDeposit: {
                title: 'Dummy Payment Vendor'
            },
            ecopayz: {
                title: 'EcoPayz',
                ecopayzInstructionsDeposit: {
                    partOne: 'EcoPayz is an payment solution that enables you to transfer funds into a EcoPayz account instantly.'
                }
            },
            neteller: {
                title: 'Neteller',
                netellerInstructionsDeposit: {
                    partOne:
                        "NETELLER is an e- wallet payment solution that enables you to transfer funds into a 'virtual' NETELLER account, and then transfer funds to your account instantly.",
                    partTwo: 'To fund your account using NETELLER or by any other method available through NETELLER simply create a NETELLER account by visiting',
                    partThree: 'http://www.neteller.com',
                    partFour: 'Kindly note that due to security reasons the NETELLER account holder and the system account bearer ought to be the same individual.',
                    partFive: 'Only one NETELLER account can be registered against a system account.'
                },
                netellerLabel: 'Email Address or Account ID',
                netellerSecurityLabel: 'Secure ID or Authentication Code',
                netellerRegisterLabel: 'Create NETELLER Account',
                netellerNotRegistered: 'Please register before perform a withdrawal'
            },
            astroPayBoletoSkrill: {
                title: 'AstroPay Boleto and Cash',
                astroPayBoletoInstDeposit: {
                    partOne: 'Deposit funds using Boleto or Cash powered by Astorpay.',
                    partTwo:
                        'Kindly note that due to security reasons the Astorpay account holder and the {{brandName}} account bearer ought to be the same individual. It is important to note that the same email address registered on {{brandName}}.com account is to be used when registering a Astorpay account.',
                    partThree: 'Only one AstroPay account can be registered against a {{brandName}}.com account.'
                }
            },
            skrill: {
                title: 'SKRILL',
                cdCardInstructionsDeposit: {
                    partOne: 'Pay by VISA, PostePay, CartaSi, Visa Electron, MasterCard. Also available: Maestro, Switch & Solo.',
                    partTwo:
                        'Visa and MasterCard are globally recognized brands with the latest payment and security technology. Feel safer than ever depositing online. It is Quick and easy to Deposit funds to your account by just entering the Credit / Debit Card details needed in order to process your transaction.',
                    partThree:
                        'These transactions are subject to a limit of 5,000 € per transaction. If you want to deposit more you have to split the amount on multiple transactions. Credit / Debit Card Transactions are not accepted from certain countries. A Credit / Debit Card registered with this account, can only be registered once and cannot be associated with any other account.',
                    partFour:
                        "This account's holder and Credit / Debit Card bearer ought to be the same individual. Please note that deposit limits apply and the said limits will be increased upon presentation of the ",
                    partFive: 'required documentation.',
                    partSix:
                        ' Kindly note that transactions may be processed either as a Purchase or as a Cash Advance. Please be aware that when a transaction is processed as a Cash Advance, bank charges may apply.'
                }
            },
            paypointCard: {
                payPointTitle: 'Credit / Debit Card',
                payPointInstructionsDeposit: {
                    partOne: 'Pay by VISA, PostePay, CartaSi, Visa Electron, MasterCard. Also available: Maestro, Switch & Solo.',
                    partTwo:
                        'Visa and MasterCard are globally recognized brands with the latest payment and security technology. Feel safer than ever depositing online. It is Quick and easy to Deposit funds to your {{brandName}} account by just entering the Credit / Debit Card details needed in order to process your transaction.',
                    partThree: ' Transactions on your Credit / Debit Card Statement will appear as www.{{brandName}}.com 0035621388891 or POS {{brandName}} St. Julians',
                    partFour:
                        'These transactions are subject to a limit of 5,000 €/£/$/S&#8355; per transaction. If you want to deposit more you have to split the amount on multiple transactions. Credit / Debit Card Transactions are not accepted from certain countries. A Credit / Debit Card registered with a {{brandName}} account, can only be registered once and cannot be associated with any other {{brandName}} account.',
                    partFive:
                        'The {{brandName}} account holder and Credit / Debit Card bearer ought to be the same individual. Please note that deposit limits apply and the said limits will be increased upon presentation of the ',
                    partSix: 'required documentation.'
                }
            },
            apco: {
                apcoCC: 'Credit / Debit Card',
                astroPayBeneficiaryId: 'Beneficiary ID',
                astroPayBankName: 'Bank Name',
                astroPayBankAccount: 'Bank Account No.',
                astroPayIBAN: 'IBAN',
                astroPayBoletoBancarioTitle: 'Astropay Boleto',
                astroPayBankTransferTitle: 'Astropay bank transfer',
                astroPayWithdrawalTitle: 'Astropay withdrawal',
                averyCDCardInstructionsDeposit: {
                    partOne: 'Pay by VISA, PostePay, CartaSi, Visa Electron, MasterCard. Also available: Maestro, Switch & Solo.',
                    partTwo:
                        'Visa and MasterCard are globally recognized brands with the latest payment and security technology. Feel safer than ever depositing online. It is Quick and easy to Deposit funds to your account by just entering the Credit / Debit Card details needed in order to process your transaction.',
                    partThree: 'Transactions on your Credit / Debit Card Statement will appear as {{companyName}} Ltd.',
                    partFour:
                        'These transactions are subject to a limit of 5,000 € per transaction. If you want to deposit more you have to split the amount on multiple transactions. Credit / Debit Card Transactions are not accepted from certain countries. A Credit / Debit Card registered with this account, can only be registered once and cannot be associated with any other account.',
                    partFive:
                        "This account's holder and Credit / Debit Card bearer ought to be the same individual. Please note that deposit limits apply and the said limits will be increased upon presentation of the ",
                    partSix: 'required documentation.',
                    partSeven:
                        ' Kindly note that transactions may be processed either as a Purchase or as a Cash Advance. Please be aware that when a transaction is processed as a Cash Advance, bank charges may apply.',
                    partEight: 'Visa and Mastercard payments on this site are handled by {{companyName}} Ltd. on behalf of {{companyName}} B.V.'
                },
                averyNetellerInstructionsDeposit: {
                    partOne:
                        "NETELLER is an e- wallet payment solution that enables you to transfer funds into a 'virtual' NETELLER account, and then transfer funds to your account instantly.",
                    partTwo: 'To fund your account using NETELLER or by any other method available through NETELLER simply create a NETELLER account by visiting',
                    partThree: ' http://www.neteller.com',
                    partFour: 'Kindly note that due to security reasons the NETELLER account holder and the system account bearer ought to be the same individual.',
                    partFive: 'Only one NETELLER account can be registered against a system account.'
                },
                averySkrillInstructionsDeposit: {
                    partOne:
                        "Send and receive money via your email address! Skrill is an e-wallet payment solution that enables you to transfer funds into a 'virtual' Skrill account, and then transfer funds to your account – instantly.",
                    partTwo:
                        'To fund your account using Skrill or by any other method powered by Skrill simply click on the Skrill option and register. For further information about payment and withdrawal methods supported by Skrill please visit ',
                    partThree: 'http://www.Skrill.com',
                    partFour:
                        'Kindly note that due to security reasons the Skrill account holder and the website account bearer ought to be the same individual. It is important to note that the same email address registered on this account is to be used when registering a Skrill account.',
                    partFive: 'Only one Skrill account can be registered against this account.'
                },
                astroPayCashPaymentInstructionsDeposit: 'Cash Payments are safe, easy, and fast for customers to send and receive payments online.',
                astroPayBoletoBancarioInstructionsDeposit:
                    'When you choose to pay via Invoice (boletos), you will be redirected to a payment page corresponding to the country/region specified in your billing details where you will be prompted to enter your billing details before being redirected to the respective Invoice page.',
                astroPayBankTransferInstructionsDeposit:
                    "Bank Transfers allow you to submit your payment via online banking, wire transfers, phone banking, or visiting the bank to complete payment in person using cash. <br/><br/>After authorizing the transaction at your bank's website, you will be returned to our site where your order will be marked as Pending while we wait for payment confirmation. <br/><br/>For more information",
                astroPayCardInstructionsDeposit:
                    'AstroPay Card is a virtual, pre-paid card in Latin America that is accepted by hundreds of online retailers. Simply register, choose the value of your card, and pay using convenient, local options.'
            },
            paysafe: {
                title: 'PaysafeCard',
                instructionsDeposit: {
                    partOne:
                        'Online cash payments, without bank account or credit card? Get your paysafecard now and pay online as if you’re using cash. paysafecard is prepaid cash for the Internet.',
                    partTwo: 'And it’s as easy as this:',
                    partThree: 'paysafecard is available from thousands of sales outlets worldwide. Find a sales outlet near you: ',
                    partFour: 'http://www.paysafecard.com/pos',
                    partFive:
                        'Get your paysafecard worth 10, 25, 50 or 75 €/£/$/S&#8355;. When buying a paysafecard you get a 16-digit PIN printout that you can enter atthe web shop of your choice. It’s very easy – no personal data or bank account details are required.',
                    partSix:
                        "To pay for larger amounts, you can easily combine up to ten paysafecards. Just click on 'Enter more PINs!'. That’s also how you can use up your remaining credit.",
                    partSeven: 'For more info, please go to ',
                    partEight: 'http://www.paysafecard.com.'
                }
            },
            bankTransfer: {
                title: 'Bank Transfer',
                instructionsDeposit: {
                    partOne:
                        '<b> Deposits made by Bank Transfer</b> </br> the oldest way to make a payment to your online casino account.</br>Its a “tried and tested” and very safe payment method but also quite devious and it takes a couple of days before the deposited money has arrived on your account. </br>therefor you will still be able to play.</br >',
                    partTwo:
                        '</br>the Single Euro Payments Area, or SEPA. </br>This initiative has ensured that merchants in a wide range of European nations are able to take direct debit payments from consumers quickly and securely,making it easier for people to make deposits at Internet casinos.'
                },
                subInstructions: 'For your deposit to complete you need to verify an id and phone number in your Coinbase account.',
                payableTo: 'Payabale to',
                swift: 'SWIFT-BIC',
                description: 'Payable to {{brandName}} Ltd.:',
                accountNumber: 'Account Number'
            },
            gTCollections: {
                title: 'GT Collections',
                shortDescription: 'No fee is associated for deposits with this payment type.<br/>If your transaction is approved your account will be credited instantly.',
                depositInstructions: {
                    '0': '<b>How to Deposit using the GT Bank Online.</b>',
                    '1': ' ',
                    '2': 'No fee is associated for deposits with this payment type.<br/>If your transaction is approved your account will be credited instantly.',
                    '3': '<b>Step1</b>  Go to www.gtbank.com.',
                    '4': '<b>Step2</b>  Go to GTBank\'s Internet Banking page and click on"Login".',
                    '5': '<b>Step3</b>  The page will be directed to the GTBank Internet Banking site. Click on the login button seen at the left.',
                    '6':
                        '<b>Step4</b>  You must fill in your personal GTB login details. Enter your 11-digit GTBank User ID. Then, use the keypad on the website to enter your password by clicking on each corresponding number. Finally, click on the green button to contine.',
                    '7': '<b>Step5</b>  Click on green button called "Proceed to Internet Banking",  the site will now direct you to your Internet Banking homepage.',
                    '8': '<b>Step6</b>  Look up for "Payments & Collections" from the drop-down menu. And also check for "Other Payments".',
                    '9': '<b>Step7</b>  Move down slowly to find and select "{{companyName}}". And the select "Make New Payments".',
                    '10':
                        '<b>Step8</b>  At this point you will be directed to a page where you will need to input your Unique {{brandName}}  UserID and sure amount you would like to deposit. Your personal {{brandName}}  UserID can be seen at the top right corner of our website when you login to your {{brandName}} account.',
                    '11':
                        '<b>Step9</b>  You will need to verify your details. Confirm any bank charges, select which account you want to pay from, answer your secret question and don’t forget to also enter your token code lastly.',
                    '12': '<b>Step10</b>  After your payment is successful; your formal transaction receipt will then be shown.',
                    '13': ' ',
                    '14': '<b>OR</b>',
                    '15': ' ',
                    '16': '<b>Step1</b>  Go to www.gtbank.com.',
                    '17': '<b>Step2</b>  Look at the bottom page. Select or click on "GTCollections".',
                    '18': '<b>Step3</b>  Select "Customized Deposit".',
                    '19': '<b>Step4</b>  Search for "{{companyName}}" and pick it.',
                    '20': '<b>Step5</b>  Enter your personal unique {{brandName}}  UserID and the value or amount that you would like to deposit and click on "Continue".',
                    '21': '<b>Step6</b>  You will need  to confirm your details properly. Make the bank charges are correct and then click on "Confirm & Continue".',
                    '22':
                        '<b>Step7</b>  You will then need to choose between four payment options available to you. Pick the option that applies. Input your personal email and click on "Continue". If your deposit becomes successful your account will be updated immediately.',
                    '23': ' ',
                    '24': '<b>How to Deposit using the GT Bank Mobile app.</b>',
                    '25': ' ',
                    '26': '₦100 fee is associated with this particular type of payment method.',
                    '27':
                        '<b>Step1</b>  Click on the GTBank mobile banking app on your phone to open, Enter your personal login details (internet banking ID and password) then click on "Sign In".',
                    '28': '<b>Step2</b>  Select "GT Collections".',
                    '29': '<b>Step3</b>  Select "Customized Deposit".',
                    '30': '<b>Step4</b>  Select "{{companyName}}".',
                    '31': '<b>Step5</b>  Select "{{brandName}} Payment".',
                    '32':
                        '<b>Step6</b>  Enter your personal {{brandName}}  UserID where you will locate "Client ID". Your personal {{brandName}}  UserID can be seen on the top right corner of the website when you logged onto your account. Enter the amount you would like to deposit where you see "Amount". Click on "Continue".',
                    '33': '<b>Step7</b>  Detailed information regarding the UserID will be populated immediately. Kindly confirm and click on"Continue".',
                    '34': '<b>Step8</b>  Select your GTBank account if you have more than one that you wish to make the deposit from.',
                    '35': '<b>Step9</b>  Enter your mobile banking PIN and click on "Confirm Payment".',
                    '36': '<b>Step10</b>  If the payment is successful; your personal betting wallet will be updated instantly.'
                }
            },
            gTBank: {
                accountInstructions: {
                    gTPay: {
                        title: 'GT Pay',
                        details:
                            'GTPay is a Guaranty Trust Bank’s payment gateway which facilitates merchant collection from their website. It offers the options for local and international credit/debit cards.'
                    }
                }
            },
            zenithBank: {
                title: 'Zenith Bank',
                shortDescription: 'No fee is associated for deposits with this payment type.<br/>If your transaction is approved your account will be credited instantly.',
                depositInstructions: {
                    '0': '<b>Step 1</b>&ensp; Enter any Zenith Bank branch to deposit money from your personal Zenith account into your {{brandName}} account.',
                    '1': '<b>Step 2</b>&ensp; Deposit to {{companyName}} ({{brandName}}) with Zenith Bank cheque/funds transfer form (no cash deposit available).',
                    '2':
                        '<b>Step 3</b>&ensp; Fill in the deposit slip properly by providing the required following details:<ul><li><b>Account Name:</b> {{companyName}} ({{brandName}})</li><li><b>Account Number:</b> Input any of our account numbers below:</li><li>–> XXXXXXXXXX</li><li>–> XXXXXXXXXX</li><li><b>User ID:</b>&ensp; Insert your {{brandName}}  User ID at the top corner of the deposit slip as displayed below.</li><li><b>Depositor’s name:</b>&ensp; Your Full name</li><li><b>Depositor’s phone number:</b>&ensp; Your mobile phone number</li><li><b>Amount:</b>&ensp; Amount you plan to deposit.</li><li><b>Cheque No.:</b>&ensp; Insert your Zenith cheque number if paying with your personal cheque.</li></ul>'
                }
            },
            uBABank: {
                title: 'UBA Bank',
                shortDescription: 'No fee is associated for deposits with this payment type.<br/>If your transaction is approved your account will be credited instantly.',
                depositInstructions: {
                    '0': '<b>Step 1</b>&ensp; Enter any UBA Bank branch close to you to deposit funds into your personal {{brandName}} account.',
                    '1':
                        '<b>Step 2</b>&ensp; Fill the withdrawal slip properly, write your personal <b>{{brandName}} Agent/UserID</b> and <b>{{companyName}}</b> at the back of the slip.<ul><li><b>Account Name:</b> UBA account full name.</li><li><b>Account Number:</b> UBA account full number.</li></ul>',
                    '2': '<b>Step 3</b>&ensp; Request that the teller to deposit your money into {{companyName}} ({{brandName}}) using <b>Bank Collect</b>',
                    '3':
                        '<b>Step 4</b>&ensp; Some security questions will be asked by the Teller to confirm your personal details and ensure they are about to credit money to the right {{brandName}} account.',
                    '4': '<b>Step 5</b>&ensp; When the teller confirms your payment, your personal {{brandName}} account will be credited instantly free of charge.',
                    '5': '<b>Step 6</b>&ensp; Kindly ensure that you try and keep the receipt issued to you by the bank in case of any query relating to it.'
                }
            },
            skyeDeposit: {
                title: 'Skye Mobile Deposit',
                shortDescription: 'You will be charged a N52.50 for all deposits with this payment type.',
                depositInstructions: {
                    '0': "<b>Step 1</b>&ensp; Click on Skye Mobile app on your phone, input your login details (phone number and password) and then click on 'Login'.",
                    '1': "<b>Step 2</b>&ensp; Select 'Bill Payments'.",
                    '2': "<b>Step 3</b>&ensp; Select 'Others'",
                    '3': '<b>Step 4</b>&ensp; Select the {{brandName}} logo.',
                    '4':
                        "<b>Step 5</b>&ensp; Insert your personal {{brandName}}  UserID under the 'Service ID'. Your personal {{brandName}}  UserID can be found at the right top corner of the page, after you login to your personal {{brandName}} account.",
                    '5': "<b>Step 6</b>&ensp; Information associated with your personal {{brandName}} UserID will be populated automatically. Then confirm it and click 'Ok'.",
                    '6':
                        "<b>Step 7</b>&ensp; Enter the correct figure of amount that you would love to deposit under 'Amount'. Select the specific account if you have more than one account,then put in your Skype Mobile Banking PIN in the space provided. And click on 'Send'.",
                    '7': "<b>Step 8</b>&ensp; Confirm your entries and then click on 'Send Via GPRS'.",
                    '8': '<b>Step 9</b>&ensp; When payment is successful, you will receive a notification showing your transaction reference details.'
                }
            },
            interswitch: {
                title: 'Interswitch',
                successfullMessage: 'Success <br> Your withdrawal request is being processed.',
                successAtmMessage: '<br> A message will be sent with further details.',
                accountInstructions: {
                    quickteller: {
                        subTitle: 'Quickteller Withdrawal'
                    },
                    quicktellerWeb: {
                        subTitle: 'QuickTeller Web',
                        partOne: 'Log on to Quickteller.com and search for {{brandName}} or use this link',
                        partTwo: "<a href='https://www.quickteller.com'>www.quickteller.com</a>",
                        partThree:
                            '&emsp;<b>1.</b>&nbsp; Enter your User ID (This is your 6 Digit User ID. You can find this at the top right of our website when you log in: Example 99999)',
                        partFour: '&emsp;<b>2.</b>&nbsp; Enter your Email Address and Mobile Number',
                        partFive: '&emsp;<b>3.</b>&nbsp; The System will return your information',
                        partSix: '&emsp;<b>4.</b>&nbsp; Make sure all the details are correct ',
                        partSeven: '&emsp;<b>5.</b>&nbsp; Update the required card details and click on PAY',
                        partEight: '&emsp;<b>6.</b>&nbsp; Payment receipt will be displayed',
                        partNine: '&emsp;<b>7.</b>&nbsp; An email notification will be sent to your email address',
                        partTen: '&emsp;<b>8.</b>&nbsp; Your account will be credited immediately '
                    },
                    ATMCashWithdrawal: {
                        subTitle: 'ATM Cash Withdrawal'
                    },
                    bankDeposit: {
                        subTitle: 'Bank Deposit',
                        partOne: '1. The customer walks into any bank branch.',
                        partTwo: '2. The customer completes a deposit slip with the payment details.',
                        partThree: '3. The customer provides his/her unique customer id ({{brandName}} account id) on the deposit slip.',
                        partFour: '4. The bank teller logs on to Paydirect to post the payment.',
                        partFive: '5. The bank teller enters the customer id to validate the customer.',
                        partSix: "6. Upon validation, the customer's details are returned, and the teller posts the payment.",
                        partSeven: "7. {{brandName}}'s system is notified of the payment that has been made at the bank and updates the customer's account accordingly.",
                        partEight: '8. The teller prints out the Paydirect receipt and returns this to the customer.'
                    },
                    ATMTransfer: {
                        subTitle: 'ATM Deposit',
                        partOne: '1. The customer walks to a Quickteller enabled ATM (this will have Quickteller as one of the options.)',
                        partTwo: '2. The customer slots in his/her card and selects the Quickteller option.',
                        partThree: '3. The customer enters his/her phone number and the ATM {{brandName}} PAYMENT CODE (04314801).',
                        partFour: '4. The customer follows the ATM prompt to complete the payment.',
                        partFive: "5. On a successful payment, {{brandName}}'s system will be notified of the payment."
                    },
                    webPay: {
                        subTitle: 'Webpay Direct',
                        partOne: '1. The customer initiates payment on the {{brandName}} website.',
                        partTwo: '2. The customer follows the prompts on the {{brandName}} website to navigate to the Interswitch Webpay page.',
                        partThree: '3. On the Webpay page, the customer enters his/her card details and completes the payment.',
                        partFour: "4. The customer is redirected back to {{brandName}}'s response page.",
                        partFive: '5. The response page indicates whether or not the transaction was successful.',
                        partSix: "6. On a successful payment, {{brandName}}'s system credits the customer's account accordingly."
                    }
                },
                newSuccessfullMessage: "It's on the way! <br>Payment should hit your bank account within 24 hours. Sit tight and #KeepKinging."
            },
            mpesaExpress: {
                processing: 'Processing...',
                spinnerText: 'You should be receiving instructions on your mobile device. Please do not close this page.',
                depositRequested: 'Your M-Pesa deposit has been requested',
                instructionsPartOne: 'Please enter your M-Pesa PIN when prompted to complete the transaction.',
                instructionsPartTwo: 'Your {{brandName}} account will be credited as soon as we get confirmation from M- Pesa.',
                depositSuccessful: 'Deposit successful!',
                havingDifficulties: 'Having difficulties completing the transaction?',
                contactSupport: 'Contact Support',
                returnToHomePage: 'Return to Home Page',
                returnToDeposits: 'Return to Deposits',
                pollingErrorCodes: {
                    1: 'Sorry, you have insufficient funds in your M-Pesa account to complete this deposit.',
                    17: 'You appear to have a transaction in progress already. Please wait for that transaction to complete and then try again.',
                    26: 'Sorry, the M-Pesa systems are currently busy. Please try again later or try using PayBill 290690 for an Offline M-Pesa deposit.',
                    1031: 'You appear to have cancelled the transaction. If this wasn\'t intentional, please try again.',
                    1037: 'M-Pesa was unable to reach your phone. Please try again. If you\'ve repeatedly received this message you may need to update your sim card or update the M-Pesa applet on your phone with *234*1*6#'
                }
            },
            shortDescriptions: {
                paysafeDeposit: 'Deposit limits is low so may be useful for the user.',
                interswitchBankDeposit: 'Interswitch - Bank deposit',
                interswitchATMTransferDeposit: 'Interswitch - ATM Transfer Deposit',
                interswitchQuickTellerBillPaymentDeposit: 'Interswitch - Quick Teller Bill Payment Deposit',
                interswitchWebpayDirectDeposit: 'Interswitch - Webpay Direct',
                interswitchCardLessATMCashWithdrawal: 'Interswitch - Card Less ATM Cash Withdrawal',
                interswitchQuickTellerWithdrawal: 'Interswitch - Quick Teller Withdrawal',
                gTPay: 'No fee is associated for deposits with this payment type.<br/>If your transaction is approved your account will be credited instantly.',
                gTCollections: 'No fee is associated for deposits with this payment type.<br/>If your transaction is approved your account will be credited instantly.',
                zenithBankXPathDeposit: 'No fee is associated for deposits with this payment type.<br/>If your transaction is approved your account will be credited instantly.',
                uBADeposit: 'No fee is associated for deposits with this payment type.<br/>If your transaction is approved your account will be credited instantly.',
                skyeDeposit: 'You will be charged a &#8358;52.50 for all deposits with this payment type.',
                interswitchQuickTellerWeb: 'Interswitch - QuickTeller Web '
            },
            deposit: {
                title: 'Deposit',
                menuTitle: 'Deposit',
                cardNumber: 'Card Number',
                cvv: 'CVV',
                expiryDate: 'Card Expiry Date',
                pin: 'PIN number',
                totalDeposit: 'Total Deposit',
                depositBtn: 'Deposit Now',
                returnDeposit: 'Return To Deposit',
                minDeposit: 'Minimum Deposit',
                depositTimeUp: 'Transaction might take up to 24 hours',
                canceledInformationNote: 'It was not possible to complete the transfer',
                acceptInformationNote: 'The transaction was completed successfully!',
                accountInstructions: {
                    partOne:
                        'These are the default minimum deposit limits. Please be aware that the maximum deposit limit may be below your personal deposit transaction limits until verificatio is successfully completed.',
                    partTwo:
                        'Internet gambling may be illegal in the jurisdiction in which you are located; if so you are not authorized to use your payment card to complete this transaction.'
                },
                minAmount: 'The amount is less than the Minimum Amount of ',
                maxAmount: 'The amount is more than the Maximum Amount of ',
                amountExceeded: 'was exceeded',
                lowBalance: 'Your balance is low, you can deposit more funds using our deposit options.',
                doNotShowAgain: 'do not show this message on next login',
                depositBonus: "Deposit Charge Cash Back",
                genericError: "Error, deposit not confirmed",
                depositDisablePaymentMethod: "We are experiencing delays with processing payments through {method}. Please check back in sometime or use other modes of payment to deposit now.",
                autoDepositDisc: "You have {amount} in your Betking wallet which can be withdrawn. If you continue, you need to bet the deposited amount before you can withdraw again."
            },
            withdrawal: {
                chooseAProfile: 'Choose a Profile',
                withdrawalProfile: 'Withdrawal Profile',
                acc: 'Acc',
                whyICantWithdraw: "Why can't I withdraw my whole balance?",
                title: 'Withdrawal',
                totalWithdraw: 'Total Withdrawal',
                withdrawBtn: 'Withdraw now',
                returnWithdraw: 'Return To Withdrawal',
                withdrawFastProcess:
                    'For easier and faster approval, please ensure your bank account information matches with the name and surname in your {{brandName}} account.',
                minWithdraw: 'Minimum Withdrawal',
                min: 'Minimum Amount',
                cost: 'Fees',
                withdrawTimeUp: 'Expected withdrawal time Up to 12 hours',
                acceptInformationNote: 'La transazione è avvenuta con successo',
                accountInstructions: {
                    partOne: 'Please select one of the payment methods below to request your withdrawal.',
                    partTwo: 'Please be aware that we process your request only if you ask it back to the original used account.',
                    partThree: 'Please note that withdrawal requests have to be requested via Skrill when funding your account with a Credit/Debit Card Powered By Skrill',
                    partFour:
                        'Please note that you cannot withdraw funds using your credit or debit card prior to submitting the required documentation. For further information contact Customer Service.'
                },
                lessThanMinimum: 'The amount is less than the Minimum Amount of ',
                exceeded: ' was exceeded',
                exceededWithdrawableAmountError: 'Amount exceeds your withdrawable balance of ',
                cardEnding: 'Card Ending with No',
                secureConnection: 'Secure Connection',
                transaction: 'Transaction',
                wasSuccessfullyReverted: 'was successfully reverted',
                changeDetailsDisc: 'If you wish to change any information regarding your saved bank details, please contact customer support.',
                emailHTML: 'Unable to get user eMail: ',
                saveProfilePrimHTML: 'The bank details submitted in this transaction ',
                saveProfileSecHTML: ' will be saved as a "Bank Profile". Visit the Edit Profile page to manage your bank account details.',
                changeProfileHTML: '<b>Bank not accepted by payment</b></br ></br > Please conceder select another Payment Method</br > Or changing the Payment Profile',
                autoWithdrawalDisc: '<b>Withdrawable balance exceeded - </b>Your withdrawable balance is {withdrawable balance}. Deposit amounts must be used for betting activity. You may withdraw bet winnings at any time.<br><br> Need further support on this? Please contact <a href="/help/general-help/contact-us/">customer services</a>',
                trafficAcceptanceDisc: "Dear Customer, payouts at this time may be delayed due to an issue with our payment processors. Don’t worry, we’re working to have it resolved within a few hours. Need further info? Please contact <a href=\"/help/general-help/contact-us/\">customer services</a>",
                backToHomePage: 'Back to Home Page',
                successWithdrawalMessageFirstPart: 'Your',
                successWithdrawalMessageSecondPart: 'is being transfered to your',
                ctaMoreOptions: 'Withdrawal Options',
                withdrawalSuccessTitle: 'Withdrawal Successful',
                withdrawalFailedTitle: 'An error has occured',
                helpDisclaimer: 'Having trouble withdrawing? <br/>Please contact <a href="/help/general-help/contact-us/">Customer Support</a>',
                withdrawalAmountBellowMinLimit: 'Withdrawal amount should be above ',
                withdrawalAmountExceedsBalance: 'Withdrawal amount exceeds your withdrawable balance of ',
                withdrawalAmountExceedsLimit: 'Withdrawal amount exceeds the maximum limit of ',
                withdrawalDisablePaymentMethod: "We are experiencing delays with processing payments through {method}. Please check back in sometime or use other modes of payment to withdraw now.",
            },
            transferMethodTitles: {
                apcoCC: 'Credit / Debit Cards',
                apcoNT: 'Neteller',
                apcoMBKR: 'All available methods By Skrill',
                apcoAstropayASTROPAYCARD: 'Astropay - Cards',
                apcoAstropayAPCP: 'Astropay - Cash Payments',
                apcoAstropayAPBO: 'Astropay - Boleto Bancario',
                apcoAstropayAPBT: 'Astropay - Bank Transfers',
                netellerPostePayDeposit: 'Neteller',
                netellerCartaSiDeposit: 'Neteller',
                netellerStandardDeposit: 'Neteller',
                netellerPostePayWithdrawal: 'Neteller',
                netellerCartaSiWithdrawal: 'Neteller',
                netellerStandardWithdrawal: 'Neteller',
                skrillALL: 'SKRILL',
                skrillACC: 'Credit / Debit Cards By Skrill',
                skrillELV: 'ELV By Skrill',
                skrillEPY: 'ePay By Skrill',
                skrillGIR: 'Giropay By Skrill',
                skrillEBT: 'Nordea By Skrill',
                skrillSO2: 'Nordea By Skrill',
                skrillP24: 'P24 By Skrill',
                skrillPLI: 'Poli By Skrill',
                skrillSFT: 'Sofort By Skrill',
                skrillACI: 'Boleto and Cash by Astropay',
                skrillAUP: 'Astropay Unionpay By Skrill',
                skrillCSI: 'CartaSi By Skrill',
                skrillDID: 'Direct Debit By Skrill',
                skrillDNK: 'Dankort By Skrill',
                skrillGCB: 'Carte Bleue By Skrill',
                skrillGLU: 'Trustly By Skrill',
                skrillIDL: 'IDEAL By Skrill',
                skrillNPY: 'NetPay By Skrill',
                skrillOBT: 'Rapid Transfer By Skrill',
                skrillPSC: 'PaysafeCard By Skrill',
                skrillPSP: 'PostePay By Skrill',
                skrillPWY: 'Przelewy24 By Skrill',
                ecoPayzRegularDeposit: 'Deposit by EcoPayz',
                ecoPayzRegularWithdrawal: 'Withdrawal by EcoPayz',
                skrillADB: 'Astropay Direct By Skrill',
                skrillAOB: 'Astropay Bank Transfer By Skrill',
                paypointCCWithdraw: 'Credit / Debit Card',
                paypointCCDeposit: 'Credit / Debit Card',
                dummyDeposit: 'Dummy Payment Vendor',
                bankTransfer: 'Bank Transfer',
                paySafeCard: 'PaySafeCard - For Cash Deposits',
                cCARD: 'All available methods By Skrill',
                wirecardCCARDDeposit: 'Credit / Debit Card',
                wirecardCCARDWithdrawal: 'Credit / Debit Card',
                interswitchBankDeposit: 'Interswitch - Bank deposit',
                interswitchATMTransferDeposit: 'Interswitch - ATM Transfer Deposit',
                interswitchQuickTellerBillPaymentDeposit: 'Interswitch - Quick Teller Bill Payment Deposit',
                interswitchWebpayDirectDeposit: 'Interswitch - Webpay Direct',
                interswitchCardLessATMCashWithdrawal: 'Interswitch - Card Less ATM Cash Withdrawal',
                interswitchQuickTellerWithdrawal: 'Interswitch - Quick Teller Withdrawal',
                webpayInterswitch: 'Webpay Deposit By Interswitch',
                ePGDeposit: 'Credit & Debit Card Deposits',
                ePGWithdrawal: 'Credit & Debit Card Withdrawal',
                gTPay: 'GT Pay',
                gTCollections: 'GT Collections',
                zenithBankXPathDeposit: 'Zenith Bank',
                uBADeposit: 'UBA Bank',
                skyeDeposit: 'Skye Mobile Deposit',
                interswitchQuickTellerWeb: 'QuickTeller Web'
            },
            title: 'Payment Methods',
            fees: 'Fees',
            minimumAmount: 'Minimum Amount',
            newCardBtn: 'Add New Card',
            existingCard: 'Use existing card',
            none: 'None',
            bankFees: 'Bank fees may be deducted',
            feesMayApply: 'Fees may apply',
            amountLable: 'Amount',
            emailLabel: 'Email Address',
            bank: 'Bank:',
            accNum: 'Account number:',
            name: 'Bank Account Holder:',
            sortCode: 'Sort Code:',
            swift: 'Swift Code:',
            routingNo: 'Routing no.\t:',
            iban: 'IBAN Code:',
            incorrectCode: 'Incorrect Code',
            depositLimitExceeded: 'Deposit limit reached',
            depositLimitRemaining: 'Deposit limit remaining ',
            transactionIsBeingProcessed: 'Transaction is being processed',
            depositContent: 'There are minimum and maximum deposit limits. Some transactions have fees that are charged by the provider.',
            noPaymentAvailable: 'No payment options are available',
            reverseWithdraw: {
                pendingRequestStatus: 'You currently have the following withdrawal request pending',
                amount: 'Amount',
                madeOn: 'Made On',
                buttonLabel: 'Would you like to cancel this request?',
                buttonText: 'Yes, Cancel Withdrawal',
            },
            depositFieldShort: "Your field is too short",
            depositFieldLong: "Your field is too long",
        },
        editProfile: {
            saveWithdrawalBankProfile: {
                selectABank: "Select a bank...",
                selectAProfile: 'Select a Profile...',
                selectTheBankName: 'Select the Bank Name',
                new: 'NEW',
                default: 'Default',
                inputTopDisclaimerST: 'For faster and safer withdrawals you can now save up to ',
                inputTopDisclaimerND: ' bank profiles',
                errorOnGettingData: 'Currently unable to get your withdrawal profiles please contact customer care',
                errorOnNewAndRejected: 'These bank details were previously added to this account and have been rejected. Please contact customer support for more details.',
                errorSameAccProfileManag: 'You’ve already added this account.',
                errorSameAccWithdrawals: 'You’ve already added this account, please select it from the list above.',
                errorOnAlreadyDisabled: 'These bank details were previously added to this account and have since been disabled. If you would like to re-enable these details, please contact customer support here.',
                addNewProfile: '+ Add Another Bank',
                saveProfile: 'Save Profile',
                defaultBankAccount: 'Default Bank Account',
                alternativeBankAccount: 'Alternative Bank Account',
                bankNotAcceptedError: '<b>Bank not accepted by payment</b> </br></br> Please conceder select another Payment Method </br> Or changing the Payment Profile',
                profileStillUnderEvaluation: 'Withdrawal bank profile still under evaluation',
                titleSecondary: 'Add New Bank Profile',
                awaitingAproval: 'Your selected Bank Profile is waiting to be approved. Don’t worry, you can use it to request a withdrawal, it might just take us a bit longer to process.',
                multiTitle: 'View All',
                pending: '(Pending)',
                missingDetails: 'Bank account details are missing please update them accordingly to be able to perform withdrawals.',
                missingAccountTooltip: 'Missing Bank Account Profile',
                pendingAccountTooltip: 'Pending Approval for Bank Account Profile',
                pendingApprovalStopWithdrawal: 'All Bank Profiles are still pending approval. <br>Withdrawals cannot be performed at this time.',
                swapProfilesMessage: 'Click "Ok" to change the default profile and submit your withdrawal.',
                swapProfiles: 'Swap Profiles',
                setAsDefault: 'Set as Default Profile',
                nameAndSurname: 'Name and Surname',
                bankName: 'Bank',
                accountNumber: 'Account Number',
                profile: 'Profile',
                errorMessage: 'Please input valid details',
                invalidAccountNumber: 'Invalid Account Number',
                bankAccountInformation: '* Bank account information provided must belong to you and match the name on your {{brandName}} account.',
                accountApproved: 'Account Approved',
                waitingForApproval: 'Waiting for Approval',
                rejected: 'Profile rejected',
                reason: 'Reason',
                defaultProfileChanged: 'Default Profile Changed',
                missingBankAccoutDetails: 'Bank account details are missing. Please update them accordingly to be able to perform withdrawals.',
                pendingBankAccountDetails: 'Your bank profile is still pending approval. Contact customer care for further details',
                bankProfileInfo: 'For easier and faster approval, please ensure your bank account information matches with the name and surname in your {{brandName}} account.',
                profileSuccessfullySaved: 'Profile Successfully Saved',
                withdrawalLimitError: 'The withdrawal amount should be between ',
                and: ' and ',
                invalidAccNumber: 'Account number is invalid',
                withdrawalProfile: 'Withdrawal Profile',
                bankName: 'Bank name',
                bankAccountNumber: 'Bank account number',
            },
            accountData: {
                header: 'Account Data',
                username: 'Username',
                userMin: 'Username must be between 6 to 50 characters long',
                userMax: 'Username must be between 6 to 50 characters long',
                chooseSecQues: 'Choose a Security Question',
                selectSecQues: 'Select Security Question',
                chooseCurrency: 'Choose a Currency',
                selectCurrency: 'Select a Currency',
                chooseDeposit: 'Choose a Deposit Limit Period',
                selectDeposit: 'Select Deposit Limit Period',
                formVal: 'The form must be valid to continue to the next step',
                depositLimitPattern: 'Invalid Deposit Limit',
                noLimit: 'No Limit',
                securityQuestion: 'Security Question',
                answer: 'Answer',
                currency: 'Currency',
                depositLimit: 'Your Deposit Limit',
                promoCode: 'Promotional Code',
                refCode: 'Referral Code',
                siteDiscovery: 'Where did you hear about us?',
                depositLimitAnnotation:
                    'Deposit Limits only apply to Credit / Debit Card transactions. Please contact {{accountLimitEmail}} should you wish to set limits on your account',
                depositLimitGoal: {
                    '0': 'Daily Limit',
                    '1': 'Weekly Limit',
                    '2': 'Monthly Limit'
                },
                depositLimitError: ' must be smaller than ',
                depositEffectiveOn: ' - Effective on: ',
                depositLimitMinimumValue: ' must be a value of 1 or more',
                sessionTimeout: 'Session Timeout',
                realityCheck: 'Reality Check',
                enableRealityCheck: 'Enable Reality Check',
                sessionTimeoutDescription: 'Account is logged out after a period of inactivity.',
                realityCheckDescription: 'A pop up is shown after the timer selected elapses which shows the length of gameplay and allows you to suspend play.'
            },
            contactInformation: {
                header: 'Contact Information',
                email: 'Email',
                confirmEmail: 'Confirm Email',
                telephone: 'Telephone',
                mobile: 'Mobile',
                mobilePlaceholder: "e.g 70 9877 6543",
                emailLanguage: 'Email Language',
                promotionalEmails: 'Subscribe to marketing material',
                winNotificationSetting: "Enable Win Coupon Notification by SMS"
            },
            personalData: {
                header: 'Personal Data',
                firstName: 'First Name',
                lastName: 'Last Name',
                asItAppears: "(As it appears on your ID)",
                gender: 'Gender',
                country: 'Country',
                state: 'State',
                selectAState: 'Select a state',
                province: 'Province',
                city: 'City',
                cityNotFound: "There aren't any cities that match your search criteria",
                cityInvalid: 'Invalid City',
                town: 'Town',
                address: 'Address',
                postalCode: 'Postal Code/Zip',
                dateOfBirth: 'Date of Birth',
                year: 'YYYY',
                month: 'MM',
                citizenship: 'Citizenship',
                birthState: 'Birth State',
                birthProvince: 'Birth Province',
                birthCity: 'Birth City',
                taxCode: 'Tax Code',
                addressAnnotation: 'Please note that the address fields will be used to check credit card transactions',
                selCountry: 'Select Country',
                date: 'DD',
                chooseCitizen: 'Choose Citizenship',
                selCitizen: 'Select Citizenship',
                chooseCitizenState: 'Choose a Citizenship State',
                selCitizenState: 'Select Citizenship State',
                chooseCitizenProv: 'Choose a Citizenship Province',
                selCitizenProv: 'Select Citizenship Province',
                chooseCitizenCity: 'Choose a Citizenship City',
                selectCitizenCity: 'Select Citizenship City',
                emailMin: 'Email must be between 5 to 50 characters long',
                emailMax: 'Email must be between 5 to 50 characters long',
                emailValid: 'Email must contain an @ ',
                emailsDontMatch: 'Emails Invalid or Do Not Match',
                choosePhoneExt: 'Choose a Phone Extension',
                selectPhoneExt: 'Select Phone Extension',
                chooseMobileExt: 'Choose a Mobile Extension',
                selectMobileExt: 'Select Mobile Extension',
                chooseEmailLang: 'Choose an Email Language',
                selectEmailLang: 'Select Email Language',
                backStep1: 'Back to Step 1',
                previousStep: 'Back To Previous Step',
                formValidate: 'The form must be validate to continue to step 2',
                proceedStep3: 'Proceed To Step 3'
            }
        },
        fundTransfer: {
            interAccountTab: 'Fund Transfer',
            interAccountNewTab: 'Fund Transfer - New',
            noUser: 'No user was selected to transfer funds to',
            notEnoughFunds: "The User's account does not have enough funds to perform this transaction",
            pageTitle: 'Fund Transfer',
            type: 'Type',
            amount: 'Amount',
            selectUser: 'Select or search a user...',
            transferSuccess: 'Funds have been transferred',
            withdrawalSuccess: 'Funds have been withdrawn',
            userBalances: 'User Balances',
            total: 'Total',
            active: 'Active',
            inactive: 'Inactive'
        },
        manageUsers: {
            pageTitle: 'Manage Users',
            searchType: 'Search Type',
            directDescendants: 'Direct children',
            recursive: 'All Network',
            agentsOnly: 'Agents only',
            noResults: 'No results for current search parameters.',
            noResultsTitle: 'No Results to display',
            id: 'ID',
            surname: 'Surname',
            name: 'Name',
            userType: 'User Type',
            balance: 'Balance',
            lastBet: 'Last Bet',
            transfer: 'Transfer',
            username: 'Username',
            status: 'Status',
            networkCredit: 'Network Credit',
            availability: 'Availability',
            chooseType: 'Choose a type',
            listUsers: 'List Users',
            newUserMessage: 'New user registered'
        },
        cashierTracking: {
            title: 'Cashier Tracking',
            details: 'Track all cashier transactions - please select your date filtering',
            daysLabel: 'Select your filter options',
            dateFrom: 'Date From',
            dateTo: 'Date To',
            today: 'Today',
            yesterday: 'Yesterday',
            manual: 'Manual',
            interAccountDisc: {
                secOne: 'There was an issue retreiving this data.',
                secTwo: 'Please go to the',
                secLink: 'sh/transfer',
                secHyperLink: 'interaccount',
                secThree: 'page',
                secLast: 'if you would like to perform fund transfers or reset password actions.',
            },
        },
        register: {
            title: 'Register',
            fillDetails: 'Welcome to {{brandName}}! To register your account, please fill in the details below',
            step1: 'Step 1',
            step2: 'Step 2',
            step3: 'Confirm',
            automaticTransferToUser: 'Make an automatic transfer to the user',
            securityQuestions: {
                QST1: "Mother's maiden name",
                QST2: "Father's first name",
                QST3: 'Place of birth',
                QST4: 'Name of your pet',
                QST5: 'Type of your first car'
            },
            regComplete: 'Registration Complete',
            regCompleteTxt:
                'You have successfully completed registration. We have sent you a confirmation email containing an activation link. Please read the email and follow the instructions contained therein. Welcome to {{brandName}}.com and we hope that you enjoy your online experience with us.',
            regCompleteTxtNoActivation: 'You have successfully completed registration. Welcome to {{brandName}}.com and we hope that you enjoy your online experience with us.',
            regMail: 'If you have not received an email, please',
            regBtn: 'click here',
            regResend: 'to resend.',
            regProceed: 'Proceed to Login',
            activationUnable: 'Unable to activate user: ',
            resendUnable: 'Unable to resend activation link: ',
            regUnable: 'Unable to register user: ',
            nonUniqueMobile: 'Phone number already registered',
            fieldRequired: 'This field is required',
            onlyNumbers: 'This field can only contain numbers',
            invalidPattern: 'Mobile number is invalid',
            textOnly: 'Only text is allowed',
            mobileMinimum: 'Mobile must be minimum of 10 numbers',
            ageRequirement: 'Minimum required age is 18',
            invalidDate: "Please check inputted date",
            searchCity: 'Search City',
            passwordSameAsUsername: "Username and password can't be identical",
            nameDisclaimer: "Your first and last name should be the same as the details that appear on your bank account.",
            infoNotes: {
                title: "info",
                username: "Username must be between 6 to 50 characters long",
                password: "Password must be between 6 to 15 characters long, and must not contain spaces",
                confirmPassword: "Passwords should be the same",
                firstName: "Your first name has to be the same as the details that appear on your bank account",
                lastName: "Your last name has to be the same as the details that appear on your bank account",
                email: "Please enter a valid email",
                mobileNumber: "Please enter a valid mobile number",
                address: "Please enter a valid address"
            },
            contactSupportPart1: "Having difficulties registering or have any questions?",
            contactSupportPart2: "Contact support",
            confirmRegistration: {
                ageConfirmation: 'I confirm that I am at least 18 years old and I accept the Age Verification and Privacy Policy, and that I understand and accept the general Terms and Conditions',
                ageConfirmationPart1: "I confirm that I am at least 18 years old and I accept the Age Verification and",
                ageConfirmationPart2: "Privacy Policy",
                ageConfirmationPart3: "and that I understand and accept the general ",
                ageConfirmationPart4: "Terms and Conditions",
                emailConfirmation: 'I agree to receive information from your company',
                backStep2: 'Back to Step 2',
                confirmCheck: 'The confirm must be checked to enable the Registration',
                clickSubmit: 'Click here to submit',
                plsWait: 'Please wait...',
                confirmAccountTitle: 'Account Confirmation',
                confirmEmailSent: 'Please confirm your account through the email which was sent to you.',
                infoSuccess:
                    'You have successfully inputted the required information. Please verify your details below, if correct please click the submit button. Once the information is submitted, you will receive a confirmation email with your account activation link.',
                agentConfirmation: 'By ticking this box you confirm that the contract with the agent has been signed and you commit to send a copy to {{brandName}}'
            },
            personalData: {
                turkishIdLabel: 'ID Card Number',
                turkishIdAnnotation: 'Please note that this field is mandatory for Turkish citizens',
                userTURIdNoValidation: 'Id Card Number must be 11 numbers long'
            },
            city: 'City',
            agentRegistrationTitle: 'New Agent Registration',
            promoCode: {
                title: 'Do you have a promotion code?',
                yes: 'Yes',
                no: 'No'
            },
            details: {
                noteDetailsTitle: 'Please fill in all details carefully and correctly',
                nameandsurnameAgentRegisterDetails:
                    'Your Name / Surname must be the same as the name you have for your bank account. These details will be verified before making payment.',
                lgaAgentRegisterDetails: 'This must be the confirmed local government area of the shop.',
                addressAgentRegisterDetails:
                    'This is the exact address of the shop which will be inspected and verified, If address is incorrect the application will be dismissed',
                emailAgentRegisterDetails: 'Make sure you enter the correct email address.',
                mobileAgentRegisterDetails: 'Your Mobile Number will be used for verification and password reset.'
            },
            success: {
                title: "Registration Successful!",
                description1: "You have successfully created a {{brandName}} account and are now logged in. We have created a page to help you settle in. Click the button below to get started on the Playground for Kings.",
                description2: "Enjoy your time on the",
                description3: "#playgroundforkings",
                getStarted: "Get Started"
            },
            registrationFailedMessage: {
                partOne: 'The phone number you entered is invalid or already exists.',
                partTwo: 'Forgot Password? Click',
                cta: 'here',
                partThree: 'to reset.'
            }
        },
        registerWithDepositJourney: {
            breadCrubsTitle: "Sign Up",
            helpDisclaimer: 'Having trouble depositing? <br/>Please contact <a href="/help/general-help/contact-us/">Customer Support</a>',
            inputContent: {
                title: "Sign Up",
                message: "<p>Getting started is easy,<br />Simply enter your mobile number below & create a password to begin</p>",
                ageVerification: "<span>I confirm that I am at least 18 years old and I accept the Age Verification and Privacy Policy, and that I understand and accept the general <a href='/help/general-help/terms-and-conditions/general-terms-conditions/' target='_blank'>Terms and Conditions</a></span>",
                receiveInformation: "I agree to receive information for BetKing",
                registerButtonText: "Create Account",
            },
            errors: {
                depositAmountShouldBe: 'The deposit amount should be between '
            },
            depositList: {
                title: 'Welcome to the Kingdom',
                message: 'You’re almost ready!  Simply fund your account to start enjoying the best betting experience in {{brandName}}',
                listTitle: 'Deposit Methods',
                ctaText: 'Maybe Later',
                kycCtaText: 'BACK TO MY ACCOUNT',
                kycTitle:"YOUR ACCOUNT IS UNDER VERIFICATION",
                kycSubtitle:"For your safety, we’ll need to verify your identity before you can deposit funds into your BetKing account. We’ll inform you once your account has been verified.",
                img: '/images/register/success-icon.svg',
                imgError: '/images/register/error-icon.svg',
                imgPending: '/images/register/pending-icon.svg'
            },
            depositInput: {
                amountPlaceholder: 'Amount',
                yourBalance: 'Your balance',
                messageGeneric: 'Please choose an amount to deposit using ',
                'PaystackCardDeposit': 'Credit/Card Deposit ',
                'PaystackMomoAirtelDeposit': 'Airtel Tigo Deposit ',
                'PaystackMomoMTNDeposit': 'M.T.N Deposit ',
                'PaystackMomoVodafoneDeposit': 'Vodafone Deposit ',
                ctaTopup: 'DEPOSIT NOW',
                ctaMoreOptions: 'MORE PAYMENT OPTIONS',
                saveCardDetails: 'Save my card details for faster deposits',
            },
            otpContent: {
                title: 'One Time Pin',
                verifyYourTransaction: 'Verify Your Transaction',
                pinMessage: 'An authorisation code has been sent to you by SMS. Please enter it below to continue.',
                message: 'MoMo has sent you an authorisation code by SMS  Please enter it below to continue.',
                ctaTextVerify: 'VERIFY ',
                ctaTextCancel: 'CANCEL',
                errorOTP: 'The One Time Password is incorrect, please try agian',
            },
            depositUserMsgPage: {
                popupVerificationTitle: 'Verify Your Transaction',
                completeInfo: 'Please complete the authorisation process by inputting your MoMo PIN on your mobile device',
                success: {
                    title: 'Deposit Successful',
                    message: 'Your <b>{{balance}}</b> is in your account and ready to use.',
                    ctaTextStartPlaying: 'START PLAYING ',
                    ctaTextGettingStarted: 'Getting Started',
                    getStartedURL: '/help/general-help/getting-started/',
                },
                pending: {
                    title: 'Transaction request in progress',
                    message: 'Your request to add <b>{{balance}}</b> to your account has been sent to your payment provider.',
                }
            },
            changPaymentError: {
                title: 'Changing Payment Methods',
                errMsgP1: 'Sorry, you can only choose another payment method if your account balance is ',
                errMsgP2: ' or less.',
                errMsgP3: 'Your account balance is currently ',
                errMsgP4: 'If you wish to use another payment method please withdraw your current balance first.',
            },
            removeSavedCards: {
                title: 'Remove Saved Card',
                shwMsg1: 'Do you wish to remove your',
                shwMsg2: 'previously saved payment card ?',
            },
            mobileInput: {
                mobileNumber: "Mobile Number",
                validation: {
                    mobileNumber: {
                        invalid: "Mobile number is invalid",
                    }
                }
            },
            common: {
                validation: {
                    required: "This field is required",
                    textOnly: 'Only alphabetical characters are allowed',
                }
            },
            kyc:{
                ctaText:"GO TO BETKING SITE",
                title:"Account under verification",
                subtitle:"Your account is under verification, we'll notify you via sms once the process is complete. You won't be able to place deposits during this time."
            },
            userDetails: {
                password: 'Password',
                validation: {
                    password: {
                        required: "The password is required",
                        pattern: "Password must be between 6 to 15 characters long, and must not contain spaces"
                    },
                },
            },
        },
        splitRegistration: {
            registrationError: 'An error occurred during registration',
            common: {
                validation: {
                    required: "This field is required",
                    textOnly: 'Only alphabetical characters are allowed',
                }
            },
            mobileInput: {
                extension: "Extension",
                mobileNumber: "Mobile Number",
                validation: {
                    mobileNumber: {
                        invalid: "Mobile number is invalid",
                    }
                }
            },
            userDetails: {
                stepOne: 'Step 1',
                stepTwo: 'Step 2',
                edit: 'Edit',
                password: 'Password',
                firstName: 'First Name',
                lastName: 'Last Name',
                email: 'Email',
                dateOfBirth: 'Date of Birth',
                dateOfBirthPlaceholder: 'Date of Birth (dd/mm/yyyy)',
                stateOfResidence: 'State of Residence',
                validation: {
                    password: {
                        pattern: "Password must be between 6 to 15 characters long, and must not contain spaces"
                    },
                    email: {
                        pattern: 'Invalid email address'
                    },
                    dateOfBirth: {
                        invalidDate: 'Date is not valid',
                        ageRequirement: 'Minimum required age is 18'
                    },
                },
            },
            registrationSuccess: {
                registerAnotherUser: 'Register Another User',
            },
        },
        otp: {
            title: 'OTP Sent',
            message: 'We’ve sent a One Time PIN to this phone number:',
            messageViaUsername: "We’ve sent a One Time PIN to this user's phone number:",
            enterPin: 'Please enter the PIN below to verify your mobile number',
            fieldRequired: 'Verification code is required',
            invalidCode: 'Invalid verification code',
            completeVerification: 'Complete Verification',
            resendPin: 'Resend Pin',
            havingTrouble: 'Having trouble verifying your phone number?',
            pleaseContact: 'Please contact',
            customerSupport: 'Customer Support',
            pinResent: 'A new One Time PIN has been sent to your mobile number',
            limitExceeded: "You've exceeded the limit of One Time PIN for the day. Please try again later.",
            errors: {
                20804: 'The entered PIN is no longer valid. Please generate a new one and try again.',
                20806: 'The entered PIN is not valid.'
            }
        },
        resetPassword: {
            common: {
                validation: {
                    required: "This field is required",
                }
            },
            usernameInput: {
                usernameOrMobile: 'Username or Verified Mobile Number',
            },
            createNewPassword: {
                newPassword: 'New Password',
                newPasswordPlaceholder: 'Create New Password',
                confirmPassword: 'Confirm Password',
                confirmPasswordPlaceholder: 'Confirm Password',
                validation: {
                    password: "Password must be between 6 to 15 characters long, and must not contain spaces",
                    confirmPassword: 'Passwords do not match',
                },
            }
        },
        phoneVerification: {
            title: "Phone Number Verification",
            smsSent: "You should have received a code via SMS to the number registered with this username.",
            smsSentTo: "You should have received a code via SMS to",
            accountNotVerified: "Your account has not yet been verified!",
            resendCodeDescription: "Please take a moment to verify your phone number. If you didn't receive the code, you can resend with the button below.",
            inputNumber: "Input the number you received in the space below.",
            resendCode: "Resend Code",
            notReceived: "Did not receive your pass code? Text “ALLOW” to 2442 to disable DND on your line. You may also text “12” to 2442 to activate partial DND on your line.",
            invalidCode: "The inserted verification code is incorrect.",
            tryAgain: "Please try again",
            limitExceeded: "Exceeded the limit of One Time Passwords for the day. Please try again later.",
            popup: {
                important: "Important",
                accountLocked: "Account Locked!",
                descriptionPart1: "Please note that the phone number associated with this account has not yet been verified.",
                descriptionPart2: "Select an option below to proceed.",
                descriptionPart3: "is already registered on another account. If you choose to proceed, all other accounts associated with this phone number will become inactive.",
                descriptionPart4: "Your account is locked as the registered phone number is already verified against another online account. To unlock your account, you may update your phone number or contact customer support.",
                verifyExistingPhoneNumber: "Verify Existing Phone Number",
                completeRegistration: "Complete Registration",
                updatePhoneNumber: "Update Phone Number",
                phoneNumberUpdated: "Phone Number Updated",
                samePhoneNumber: "This number is the same that you already have. Please choose a new phone number",
                changePhoneNumber: "Change Phone Number",
                verifyYourPhonePart1: "Please verify your account within",
                verifyYourPhonePart2: "days",
                verifyYourPhonePart3: "and",
                verifyYourPhonePart4: "hours",
                verifyYourPhonePart5: "so it does not become inactive.",
                contact: "Contact",
                customerSupport: "customer support."
            }
        },
        shopWebsite: {
            accountStatement: {
                title: 'Admin Area',
                welcome: 'Welcome',
                printOdds: 'Print Odds',
                placeBet: 'Place Bet',
                newCoupon: 'Cash Desk',
                reports: 'Reports',
                goldenRaceCashier: 'Virtual Games',
                globalBetCashier: 'Virtual',
                quickLook: {
                    title: 'Quick Look',
                    companyOwesYou: 'Company owes you',
                    liabilityTreshold: 'Liability threshold',
                    youOweCompany: 'You owe the company',
                    creditBalance: 'Credit Balance',
                    balanceDate: 'as at',
                    agentType: {
                        superAgent: 'Super Agent',
                        agent: 'Agent',
                        cashier: 'Cashier'
                    }
                },
                couponCheck: {
                    title: 'Coupon Check',
                    description: 'Insert the coupon you wish to check',
                    buttonText: 'Check'
                },
                oddsSearch: {
                    title: 'Odds Search',
                    description: 'Start typing the odds market you wish to search for',
                    placeHolder: 'Search by Category, Tournament or Team',
                    buttonText: 'Search'
                },
                overview: {
                    title: 'Overview',
                    transID: 'Transaction ID',
                    availability: 'Availability',
                    types: {
                        ACC: 'Account',
                        USR: 'User',
                        NET: 'Network'
                    }
                },
                cashier: {
                    title: 'Cashier',
                    area: 'Area'
                },
                messages: {
                    title: 'Latest {0} Messages',
                    status: 'Status',
                    inOut: 'In/Out',
                    subject: 'Subject',
                    time: 'Time',
                    date: 'Date',
                    searchMessages: 'Search Messages',
                    newMessage: 'Send new message',
                    template: 'Template',
                    selectTemplate: 'Choose a Template',
                    priorityType: {
                        '0': 'Low',
                        '10': 'Normal',
                        '20': 'High',
                        '30': 'Obligatory'
                    },
                    sentSuccess: 'Message Sent Successfully',
                    deleteConfirmation: 'Are you sure you want to delete this message?'
                },
                lastTransactions: {
                    title: 'Last {0} Transactions',
                    transDate: 'Transaction Date',
                    type: 'Transaction Description'
                },
                downloadsAndInfo: {
                    title: 'Downloads & Info'
                },
                openVirtuals: '{{brandName}} Virtual'
            },
            errorMsg: 'No progress available for the date range selected. Please select date from Nov 4 - ',
            dateError: 'No progress available for the date range selected. Please select date from Nov 4 - ',
            generalError: 'No progress available for the selected date',
            bonusDashboard: {
                virtualBets: 'Virtual Bets',
                sportsBets: 'Sports Bets',
                monthlySportBonus: {
                    totalPayedCommission: {
                        totalEstimatedCommissionTitle: '* Total Estimated Commission',
                        totalPayedCommissionTitle: 'Total Paid Commission',
                        disc: '* <b>N.B.</b>  Total Estimated Commission is the <b>estimated commission</b> amount of your <b>Sports Turnover</b> Commission <b>for this week</b>. For sports periods of prior months, this amount will be 0, as all your Turnover Commission would have been paid and is listed in the Total Paid Commission box.',
                    },
                    selectADatePeriod: 'Select a date period',
                    noCurrentBonusAvailable: 'No current bonus available',
                    title: 'Monthly Sports Bonus',
                    noBonus: 'No Bonus',
                    sportsPeriod: 'Sports Period',
                    backtoSummeryReport: 'Back to Summary Report',
                    channelName: 'Channel Name',
                    settledDate: 'Settled Date',
                    stake: 'Stake',
                    settledBets: 'Settled Bets',
                    noOfSelections: 'No.of Selections',
                    ticketId: 'Ticket Id',
                    winnings: 'Winnings',
                    weightedStake: 'Weighted Stake',
                    grandTotal: 'Grand Total',
                    weightedStakeCalculation: 'Weighted Stake Calculation',
                    grossProfitPercentageBreakdown: 'Gross Profit Percentage Breakdown',
                    total: 'Total',
                    gGRPercentage: 'GGR Percentage',
                    group: 'Group',
                    avgSelection: 'Avg Selection',
                    gGR: 'GGR%',
                    ggrMarginMore80: 'GGR Margin >= 80%',
                    ggrMarginLess80: 'GGR Margin < 80%',
                    new: 'new',
                    disclaimer: '* E.G based on 1st row of table',
                    grossProfitCalculation: 'Gross Profit Calculation',
                    avgNoOfSelectionsCalculation: 'Avg. No. of Selections Calculation',
                    avgNoOfSelections: 'Avg. No. of Selections',
                    bonusCalculation: 'Bonus Calculation',
                    bonusRate: 'Bonus Rate',
                    totalCommission: 'Total Commission',
                    totalStake: 'Total Stake',
                    totalWinnings: 'Total Winnings',
                    totalWeightedStake: 'Total Weighted Stake',
                    ofGrossProfit: '% of Gross Profit',
                    grossProfit: 'Gross Profit',
                    bonus: 'Bonus',
                    tooltipTable: `<table>
                                <tr><th>Avg. Number of selections(From)</th><th>Avg. Number of selections(To)</th><th>Gross Profit (%)</th></tr>
                                <tr><td>0</td><td>1.99</td><td>15</td></tr>
                                <tr><td>2</td><td>2.99</td><td>20</td></tr>
                                <tr><td>3</td><td>4.99</td><td>30</td></tr>
                                <tr><td>5</td><td>6.99</td><td>40</td></tr>
                                <tr><td>7</td><td>8.99</td><td>45</td></tr>
                                <tr><td>9</td><td>11.99</td><td>50</td></tr>
                                <tr><td>12</td><td>Max</td><td>55</td></tr>
                            </table>`
                },
                futureDatesError: 'Dates in the future cannot be selected',
                to: 'TO',
                outOf: 'OUT OF',
                title: 'Dashboard',
                bets: 'Bets',
                weekStartingFrom: 'Week starting from',
                currentWeek: 'Current Week',
                lastWeek: 'Last week',
                manual: 'Manual',
                bonus: 'Bonus',
                bonusEarned: 'Bonus earned',
                turnoverForTheWeek: 'Turnover for the week',
                turnoverForTheMonth: 'Turnover for the month',
                doubleTurnoverWeekly: 'Current Weekly turnover',
                overviewDisclaimer: 'The sales recorded are based on settled date and not transaction date.',
                monthlyBonusDisclaimer: 'We have made some exciting new changes to bonus commissions which improves your earning potential.  Along with these changes, data prior to 28 Nov 2022 will not be available on the report below.  To get this data, please contact your Agent Support Team on <a href="mailto: as@betking.com">as@betking.com</a> who will gladly send you historic data for up to 3 months prior.',
                agentWelcomeBonusDisclaimer: 'The New Agent Fuel Bonus is only applicable for the first 14 weeks from the date of registration of your shop.',
                powerBonusDisclaimer: 'Kings Power Bonus applies if you trade at least 3 times in a week with a minimum of 50 bets daily and a minimum of N100,000 turnover on all virtual products in a week.',
                kingLiveDisclaimer: 'We have created a new BONUS plan to better assist you during this COVID 19 lockdown. This plan takes effect from April 27, 2020. The current plan has been disabled. Choose Power Bonus for more information.',
                kingLigaDisclaimer: 'We have created a new BONUS plan to better assist you during this COVID 19 lockdown. This plan takes effect from April 27, 2020. The current plan has been disabled. Choose Power Bonus for more information.',
                kingDoubleBonusDisclaimer: 'We have created a new BONUS plan to better assist you during this COVID 19 lockdown. This plan takes effect from April 27, 2020. The current plan has been disabled. Choose Power Bonus for more information.',
                blackFridayBonusDisclaimer: '',
                currentStatus: {
                    title: "Current status",
                    level: "Level ",
                    stake: "Stake",
                    stakeIn: "Stake in ₦",
                    dailyBets: "Daily Targets Reached",
                    tradedDays: "Traded Days",
                },
                targetStates: {
                    done: 'Achieved',
                    level1Achieved: 'LEVEL 1 ACHIEVED',
                    level2Achieved: 'LEVEL 2 ACHIEVED',
                    level3Achieved: 'LEVEL 3 ACHIEVED',
                    achieved: 'Target Achieved',
                    inProgress: 'In Progress',
                    notAchieved: 'Not Achieved',
                    paused: 'Suspended',
                    expired: 'Expired',
                },
                tabs: {
                    overview: "Overview",
                    kingsLive: "Kings' Live",
                    kingsLiga: "Kings' Liga",
                    doubleBonus: "Turbo Bonus",
                    blackFridayBonus: "",
                    powerBonus: "Power Bonus",
                    agentWelcomeBonus: "New Agent Fuel Bonus"
                },
                pages: {
                    weeklyOverview: "Weekly Overview",
                    overViewInfo: ``,
                    blackFridayInfo: '',
                    powerBonusInfo: `<div class='title'><p>Kings Power Bonus Tiers</p></div>
                                    <p>Requirements</p>
                                    <table class='info-table'>
                                        <tr><th>Level</th><th class='center'>Level 1</th><th class='center'>Level 2</th><th class='center'>Level 3</th><th class='center'>Level 4</th></tr>
                                        <tr><th>Bonus</th><th class='center'>2,000</th><th class='center'>8,000</th><th class='center'>10,000</th><th class='center'>15,000</th></tr>
                                        <tr><td>Weekly Stake Target</td><td class='center'>100,000</td><td class='center'>300,000</td><td class='center'>500,000</td><td class='center'>1,000,000</td></tr>
                                        <tr><td>Daily Bets Targets</td><td class='center'>50</td><td class='center'>50</td><td class='center'>50</td><td class='center'>50</td></tr>
                                        <tr><td>Target Days traded in a week</td><td class='center'>3</td><td class='center'>3</td><td class='center'>3</td><td class='center'>3</td></tr>
                                    </table>
                                    <ul class='unordered-list'>
                                        <li> At the end of a sports week (Monday to Sunday), you may qualify for bonus in any of the 4 bands.  </li>
                                        <li> To obtain any of the bonuses, you must achieve all 3 criteria set.  E.g to get <b>N2000</b>, you must have traded no less than <b>3 days</b> out of the 7 during a week, sold a minimum of <b>50 bets</b> on at least 3 days and total sales for the week must be at least <b>N100,000</b> </li>
                                        <li> The bonus is applicable to all virtual products. This means that we will sum all your virtual sales and use that value to determine your bonus. E.g (Kings Live League = 100,000) + (Color Color = 50,000) + (Kings Liga = 150,000) = N300,000 turnover. Bonus Earned = N8000. Provided you meet the other criteria. </li>
                                        <li> Contributing products are summarized as follows;
                                            <ol class='ordered-list'>
                                                <li>Kings Live league</li>
                                                <li>Kings Liga</li>
                                                <li>Kings Italiano</li>
                                                <li>Mixed leagues</li>
												<li>GB Soccer league</li>
												<li>GB Virtual games</li>
                                            </ol>
                                        </li>
                                    </ul>`,
                    powerBonusInfo5Tiers: `<div class='title'><p>Kings Power Bonus Tiers</p></div>
                                    <p>Requirements</p>
                                    <table class='info-table'>
                                        <tr><th>Level</th><th class='center'>Level 1</th><th class='center'>Level 2</th><th class='center'>Level 3</th><th class='center'>Level 4</th><th class='center'>Level 5</th></tr>
                                        <tr><th>Bonus</th><th class='center'>2,000</th><th class='center'>8,000</th><th class='center'>10,000</th><th class='center'>15,000</th><th class='center'>1&#37; of T&#92;O</th></tr>
                                        <tr><td>Weekly Stake Target</td><td class='center'>100,000</td><td class='center'>300,000</td><td class='center'>500,000</td><td class='center'>1,000,000</td><td class='center'>2,000,000</td></tr>
                                        <tr><td>Daily Bets Targets</td><td class='center'>50</td><td class='center'>50</td><td class='center'>50</td><td class='center'>50</td><td class='center'>50</td></tr>
                                        <tr><td>Target Days traded in a week</td><td class='center'>3</td><td class='center'>3</td><td class='center'>3</td><td class='center'>3</td><td class='center'>3</td></tr>
                                    </table>
                                    <ul class='unordered-list'>
                                        <li> At the end of a sports week (Monday to Sunday), you may qualify for bonus in any of the 4 bands.  </li>
                                        <li> To obtain any of the bonuses, you must achieve all 3 criteria set.  E.g to get <b>N2000</b>, you must have traded no less than <b>3 days</b> out of the 7 during a week, sold a minimum of <b>50 bets</b> on at least 3 days and total sales for the week must be at least <b>N100,000</b> </li>
                                        <li> The bonus is applicable to all virtual products. This means that we will sum all your virtual sales and use that value to determine your bonus. E.g (Kings Live League = 100,000) + (Color Color = 50,000) + (Kings Liga = 150,000) = N300,000 turnover. Bonus Earned = N8000. Provided you meet the other criteria. </li>
                                        <li> Contributing products are summarized as follows;
                                            <ol class='ordered-list'>
                                                <li>Kings Live league</li>
                                                <li>Kings Liga</li>
                                                <li>Kings Italiano</li>
                                                <li>Mixed leagues</li>
												<li>GB Soccer league</li>
												<li>GB Virtual games</li>
                                            </ol>
                                        </li>
                                    </ul>`,
                    kingsLiveInfo: `<div class='title'><p>Kings' Live League Bonus</p></div>
                                    <p>Requirements</p>
                                    <table class='info-table'>
                                        <tr><th>Level</th><th class='center'>Level 1</th><th class='center'>Level 2</th><th class='center'>Level 3</th><th class='center'>Level 4</th></tr>
                                        <tr><th>Bonus</th><th class='center'>1,000</th><th class='center'>10,000</th><th class='center'>20,000</th><th class='center'>30,000</th></tr>
                                        <tr><td>Weekly Stake Target</td><td class='center'>250,000</td><td class='center'>400,000</td><td class='center'>2,000,000</td><td class='center'>3,000,000</td></tr>
                                        <tr><td>Daily Bets Targets</td><td class='center'>150</td><td class='center'>300</td><td class='center'>1500</td><td class='center'>2500</td></tr>
                                        <tr><td>Target Days traded in a week</td><td class='center'>6</td><td class='center'>6</td><td class='center'>6</td><td class='center'>6</td></tr>
                                    </table>
                                    <ul class='unordered-list'>
                                        <li> At the end of the a sports week (Monday to Sunday), you may qualify for bonus in any of the four levels. </li>
                                        <li> To obtain any of the bonuses, you must achieve all 3 criteria set. E.g to get N1000, you must have traded no less than 6 days out of the 7 during a week, sold a minimum of 150 bets every day and the total sales for the week must be at least N250,000. </li>
                                        <li> If only two of the criteria above is met, no bonus is applicable.</li>
                                        <li> The bonus you get will be dependent on the level’s requirement. For instance;
                                            <ol class='ordered-list'>
                                                <li>Traded days = 6 days</li>
                                                <li>Daily bets = 200 every day</li>
                                                <li>Sales for the week = N500,000</li>
                                                <li>Bonus earned will be = N1000 – (this is because you did not achieve all the targets set for level 2. Level 2 has a Daily bets target of 300 every day)</li>
                                            </ol>
                                        </li>
                                        <li> If you trade for 6 days and fall short of the daily bets target once out of the 6 days, you may miss your bonus for the week. </li>
                                        <li> No Bonus will apply for Kings’ Live sales less than N250,000 </li>
                                        <li> Total Stakes between N250,000 – N399,999.99 will get a flat bonus of N1000 If the other two criteria are met. If not, no bonus would apply </li>
                                        <li> Total Stakes between N400,000 – N1,999,999.99 will get a flat bonus of N10,000 If the other two criteria are met. If not, the bonus applied would be based on the transaction level and trading days. </li>
                                        <li> Total Stakes between N2,000,000 – N2,999,999 will get flat bonus of N20,000 If the other two criteria are met. If not, the bonus applied would be based on the transaction level and trading days. </li>
                                        <li> Total Stakes of N3,000,000 and above will get a flat bonus of N30,000 If the other two criteria are met. If not, the bonus applied would be based on the transaction level and trading days. </li>
                                        <li> Bonus will not apply to any agent with less than 6 trading days. </li>
                                        <li> Kings League Sales (from GB) will contribute to the Kings Live League Bonus. </li>
                                        </br><span>Good luck!</span>
                                    </ul>`,
                    kingsLigaInfo: `<div class='title'><p>Kings' Liga League Bonus</p></div>
                                    <p>Requirements</p>
                                    <table class='info-table'>
                                        <tr><th>Level</th><th class='center'>Level 1</th><th class='center'>Level 2</th><th class='center'>Level 3</th><th class='center'>Level 4</th></tr>
                                        <tr> <th>Bonus</th> <th class='center'>1,000</th> <th class='center'>3,000</th> <th class='center'>5,000</th> <th class='center'>10,000</th> </tr>
                                        <tr> <td>Weekly Stake Target</td><td class='center'>150,000</td><td class='center'>300,000</td><td class='center'>500,000</td><td class='center'>1,000,000</td></tr>
                                        <tr> <td>Daily Bets Targets</td><td class='center'>100</td><td class='center'>200</td><td class='center'>350</td><td class='center'>750</td></tr>
                                        <tr> <td>Target Days traded in a week</td><td class='center'>6</td><td class='center'>6</td><td class='center'>6</td><td class='center'>6</td></tr>
                                    </table>
                                    <ul class='unordered-list'>
                                        <li>At the end of the a sports week (Monday to Sunday), you may qualify for bonus in any of the four levels.</li>
                                        <li>To obtain any of the bonuses, you must achieve all 3 criteria set. E.g to get N1000, you must have traded no less than 6 days out of the 7 during a week, sold a minimum of 100 bets every day and the total sales for the week must be at least N150,000. </li>
                                        <li>If only two of the criteria above is met, no bonus is applicable  </li>
                                        <li> The bonus you get will be dependent on the level’s requirement. For instance;
                                            <ol class='ordered-list'>
                                                <li>Traded days = 6 days</li>
                                                <li>Daily bets = 120 every day</li>
                                                <li>Sales for the week = N300,000</li>
                                                <li>Bonus earned will be = N1000 – (this is because you did not achieve all the targets set for level 2. Level 2 has a Daily bets target of 200 every day)</li>
                                            </ol>
                                        </li>
                                        <li> If you trade for 6 days and fall short of the daily bets target once out of the 6 days, you may miss your bonus for the week. </li>
                                        <li> No Bonus will apply for Kings’ Liga sales less than N150,000 </li>
                                        <li> Total Stakes between N150,000 – N299,999.99 will get a flat bonus of N1000 If the other two criteria are met. If not, no bonus would apply </li>
                                        <li> Total Stakes between N300,000 – N499,999.99 will get a flat bonus of N3,000 If the other two criteria are met. If not, the bonus applied would be based on the transaction level and trading days. </li>
                                        <li> Total Stakes between N500,000 – N999,999 will get flat bonus of N5,000 If the other two criteria are met. If not, the bonus applied would be based on the transaction level and trading days. </li>
                                        <li> Total Stakes of N1,000,000 and above will get a flat bonus of N10,000 If the other two criteria are met. If not, the bonus applied would be based on the transaction level and trading days. </li>
                                        <li> Bonus will not apply to any agent with less than 6 trading days. </li>
                                        <li> Mixed bets will contribute to Kings Liga Sales. </li>
                                        </br><span>Good luck!</span>
                                    </ul>`,
                    doubleBonusInfo: `<div class='title'><p>Kings Turbo Bonus</p></div>
                                    <p>Requirements.</p>
                                    <table class='info-table'>
                                        <tr> <th><b>Product</b></th><th class='center'><b>La Liga</b></th><th class='center'><b>Live league</b></th><th class='center'><b>Total</b></th><th class='center'><b>Bonus</b></th></tr>
                                        <tr> <td>Stake Weekly</td><td class='center'>100,000</td><td class='center'>300,000</td><td class='center'>500,000</td><td class='center'>5,000</td></tr>
                                        <tr> <td>Bets Daily</td><td class='center'>100</td><td class='center'>200</td><td class='center'>400</td><td class='center'></td></tr>
                                        <tr> <td>Days Weekly</td><td class='center'>6</td><td class='center'>6</td><td class='center'>6</td><td class='center'></td></tr>
                                    </table>
                                    <ul class='unordered-list'>
                                        <li>For the super bonus to apply, you <b>Must</b> have achieved the following;
                                            <ol class='ordered-list'>
                                                <li><b>Liga weekly</b> target of <b>N100,000</b></li>
                                                <li><b>Live League weekly</b> target of <b>N300,000</b></li>
                                                <li>Total weekly sales of at least <b>N500 000</b></li>
                                                <li>You must have traded for a minimum of <b>6 days</b> out of 7 days in the week</li>
                                                <li>You must sell a minimum of 400 bets every day of the week</li>
                                                <ol class='ordered-list'>
                                                    <li><b>Liga</b> daily ticket count target of 100</li>
                                                    <li><b>Live League</b> daily ticket count target of 200</li>
                                                </ol>
                                            </ol>
                                        </li>
                                        <li>If the you achieve the revenue target but not the active days target, the bonus will not apply</li>
                                        <li>All target categories must be achieved for the Turbo bonus to apply</li>
                                        <li>If you exceed target on one product but not the other with total sales less than N500,000, bonus will not apply</li>
                                        <li>If agent exceeds target on one product but not the other with total sales greater than N500,000, bonus will not apply</li>
                                        </br><span>Good luck!</span>
                                    </ul>`,
                    blackFridayInfo: `<div class='title'><p>Black Friday Bonus</p></div>
                                    <p>Requirements.</p>
                                    <table class='info-table'>
                                        <tr><th>Level</th><th class='center'>Level 1</th><th class='center'>Level 2</th><th class='center'>Level 3</th></tr>
                                        <tr> <th>Bonus</th> <th class='center'>2,000</th> <th class='center'>5,000</th> <th class='center'>10,000</th>  </tr>
                                        <tr> <td>Weekly Stake Target</td><td class='center'>150,000</td><td class='center'>500,000</td><td class='center'>1,000,000</td></tr>
                                        <tr> <td>Weekly Bets Targets</td><td class='center'>400</td><td class='center'>500</td><td class='center'>1000</td></tr>
                                        <tr> <td>Target Days traded in a week</td><td class='center'>6</td><td class='center'>6</td><td class='center'>6</td></tr>
                                    </table>
                                    <ul class='unordered-list'>
                                        <li>To obtain any of the bonuses, a shop agent must achieve all 3 criteria set.
                                            E.g to get N2000, an agent must have traded no less than 6 days out of the 7 during a week,
                                            he must have sold a min of 400bets for the weekand the total sales for the week must be N150,000 and above.</li>
                                        <li>If only two of the criteria is met, the agent may not get a bonus or will get the bonus that is applicable to the band in which he falls.
                                            For instance,
                                            <ol class='ordered-list'>
                                                <li>Traded days = 6 days</li>
                                                <li>Bet count for the weeks = 200</li>
                                                <li>Sales = N500,000</li>
                                                <li>Bonus earned will be = N2000 –(this is because hedid not achieve the bets target assigned to the N5,000 bonus but met the target set for the N2000 bonus)</li>
                                            </ol>
                                        </li>
                                        <li>No Bonus will apply for sports salesless than N150,000</li>
                                        <li>Total Stakes between N150,000 –N499,999.99 will get a flat bonus of N2000 If the other two criteria are met. If not, no bonus would apply</li>
                                        <li>Total Stakes between N500,000 –N999,999.99 will get a flat bonus of N5,000 If the other two criteria are met. If not, the bonus applied would be based on the following;
                                            <ol class='ordered-list'>
                                                <li>If trading days is less than 6, bonus = 0</li>
                                                <li>If trading days is up to 6 days but transaction is between 400 –499, Bonus earned = N2000</li>
                                                <li>If trading days is up to 6 days but transaction is between <400, Bonus earned = N0</li>
                                            </ol>
                                        </li>
                                        <li>Total Stakes greater than N1,000,000  will get a flat bonus of N10,000 If the other two criteria are met. If not, the bonus applied would be based on the following;
                                            <ol class='ordered-list'>
                                                <li>If trading days is less than 6, bonus = 0</li>
                                                <li>If trading days is up to 6 days but transaction is between 400 –499, Bonus earned = N2000</li>
                                                <li>If trading days is up to 6 days but transaction is between 500 –999, Bonus earned = N5000</li>
                                                <li>If trading days is up to 6 days but transaction is between <400, Bonus earned = N0</li>
                                            </ol>
                                        </li>
                                        </br><span>Good luck!</span>
                                    </ul>`,
                    monthlySportsInfo: `<div class='title'><p>Monthly Sportsbook Bonus</p></div>
                                        <p>Requirements: </p>
                                        <ul class='unordered-list'>
                                            <li>At the end of the sports month, you may qualify for a bonus based as a % of GGR minus Monthly Commissions.
                                                Depending on the average weighted selections of coupons you may qualify in the below mentioned groups with their respected % of GGR payout.
                                            <br>
                                            <strong>Monthly Sportsbook Bonus</strong> = x% of Gross Profit – Total Commission, where x is determined by the Average Number of Selections for the month under review.
                                            <br>
                                            <table class='info-table'>
                                                <tr>
                                                    <th rowspan='2' class='center bg-clr-gry'>Groups</th>
                                                    <th rowspan='2' class='center bg-clr-gry'>Average Selection</th>
                                                    <th colspan='2' class='center bg-clr-gry'>Bonus Rate</th>
                                                </tr>
                                                <tr>
                                                    <th class='center bg-clr-gry'>GGR Margin < 80%</th>
                                                    <th class='center bg-clr-gry'>GGR Margin >= 80%</th>
                                                </tr>
                                                <tr><td class='center'>Group A</td><td class='center'>1 – 3.00</td><td class='center'>5%</td><td class='center'>5%</td></tr>
                                                <tr><td class='center'>Group B</td><td class='center'>3.01 – 6.00</td><td class='center'>30%</td><td class='center'>5%</td></tr>
                                                <tr><td class='center'>Group C</td><td class='center'>6.01 – 8.00</td><td class='center'>35%</td><td class='center'>15%</td></tr>
                                                <tr><td class='center'>Group D</td><td class='center'>8.01+</td><td class='center'>40%</td><td class='center'>20%</td></tr>
                                            </table>
                                            <br>
                                            </li>
                                            <li>The new monthly sportsbook bonus calculation will be applicable to bets settled from the 30th of August 2021.</li>
                                            <li>The monthly sportsbook bonus first payment will be made on the 27th of September 2021.</li>
                                            <li>The monthly sportsbook bonus will no longer be calculated using a flat percentage.</li>
                                            <li>The monthly sportsbook bonus is only applicable to the sportsbook product.</li>
                                            <li>The monthly sportsbook bonus is applicable to sportsbook bets placed from cashier and sub-accounts only.</li>
                                            <li>The monthly sportsbook bonus will continue to run based on the existing monthly bonus cycle. Also known as “sports period”, this runs from the first Monday following the prior monthly bonus cycle up to the last Sunday of the month (e.g. 30 Aug 2021 to 26 Sep 2021)</li>
                                            <li>Only settled bets sportsbook bets within the month under review will be factored into the calculation.</li>
                                            <li>The minimum stake value per month for qualification remains N150,000. What this means is that the bonus will not be calculated if the sportsbook sales value is less than N150,000 for the sports period under review.</li>
                                            <li>You will be able to track and check the bonus calculation on the agent bonus dashboard.</li>
                                      </ul>`,
                    agentWelcomeInfo: `<div class='title'><p>THE NEW AGENT FUEL BONUS</p></div>
                                    <p><strong>Requirements:</strong></p>
                                    <ul class='unordered-list'>
                                        <li class='indent-list'> At the end of the week (Sunday), you may qualify for a bonus if you have completed the following conditions:
                                            <br><ol class='ordered-list'>
                                                <li class='indent-list'>Minimum Trading Days per Week: 5 days per week at least </li>
                                                <li class='indent-list'>Minimum Trades per Day: 10 trades on either Sports or Virtual </li>
                                                <li class='indent-list'>Platform: sportsbook & virtual Are available in the shop</li>
                                                <li class='indent-list'>Min. Stake: 50,000 Naira per week</li>
		                                        <p>If the above conditions are met, you will be rewarded 500 Naira for every trading day. </p>
		                                        <p>The weekly payout will be as per the below: </p>
                                                <table class='info-table'>
                                                    <tr>
                                                        <th class='center'>Trading Days</th>
                                                        <th class='center'>Bonus </th>
                                                    </tr>
                                                    <tr>
                                                        <td class='center'>5 Days </td>
                                                        <td class='center'>2,500 Naira </td>
                                                    </tr>
                                                    <tr>
                                                        <td class='center'>6 Days </td>
                                                        <td class='center'>3,000 Naira </td>
                                                    </tr>
                                                    <tr>
                                                        <td class='center'>7 Days </td>
                                                        <td class='center'>3,500 Naira </td>
                                                    </tr>
                                                </table>
                                            </ol>
                                        </li>
                                        <li class='indent-list'>The New Agent Fuel Bonus will only take into account settled bets of that week towards minimum number of trades and minimum stake requirements. </li>
                                        <li class='indent-list'>You will be able to track and check the bonus calculation and your eligibility on the agent dashboard </li>
                                        <li class='indent-list'>The New Agent Fuel Bonus is only applicable for the first 14 weeks from the date of registration of your shop. </li>
                                        <li class='indent-list'>After 14 weeks from the date of registration the “New Agent Fuel Bonus” will expire </li>
                                    </ul>`,
                },
                doubleBonus: {
                    kingsLive: 'Kings Live',
                    kingsLiga: 'Kings Liga',
                    total: 'Total',
                    doubleBonusStatus: 'Turbo Bonus Status',
                    weeklyTurnoverDisclaimer: 'Complete all the sections to get bonus',
                    one: '1',
                    two: '2',
                    three: '3',
                },
                tooltip: {
                    level: {
                        0: "<h3 class='current-status'>Level 1 Requirements:</h3></br>",
                        1: "<h3 class='current-status'>Level 2 Requirements:</h3></br>",
                        2: "<h3 class='current-status'>Level 3 Requirements:</h3></br>",
                        3: "<h3 class='current-status'>Level 4 Requirements:</h3></br>",
                        4: "<h3 class='current-status'>Level 5 Requirements:</h3></br>",
                    },
                    tradedDaysTitle: {
                        0: "<h3 class='current-status'>5 Traded Days:</h3></br>",
                        1: "<h3 class='current-status'>6 Traded Days:</h3></br>",
                        2: "<h3 class='current-status'>7 Traded Days:</h3></br>",
                    },
                    weeklyStake: "<span class='current-status-label'>Weekly stake target: <b>",
                    dailyBets: "<span class='current-status-label'>Daily Bets Target: <b>",
                    weeklyBets: "<span class='current-status-label'>Weekly Bets Target: <b>",
                    tradedDays: "<span class='current-status-label'>Traded Days: <b>",
                    bonusEligibleLiga: {
                        0: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;1,000</b></span></br>",
                        1: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;3,000</b></span></br>",
                        2: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;5,000</b></span></br>",
                        3: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;10,000</b></span></br>",
                    },
                    bonusEligibleLive: {
                        0: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;1,000</b></span></br>",
                        1: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;10,000</b></span></br>",
                        2: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;20,000</b></span></br>",
                        3: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;30,000</b></span></br>",
                    },
                    bonusEligiblePower: {
                        0: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;2,000</b></span></br>",
                        1: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;8,000</b></span></br>",
                        2: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;10,000</b></span></br>",
                        3: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;15,000</b></span></br>",
                        4: "<span class='current-status-label'>Bonus Eligible: <b>1&#37;</b></span></br>",
                    },
                    bonusEligibleBlackFriday: {
                        0: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;2,000</b></span></br>",
                        1: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;5,000</b></span></br>",
                        2: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;10,000</b></span></br>",
                    },
                    bonusEligibleAgentWelcome: {
                        0: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;2,500</b></span></br>",
                        1: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;3,000</b></span></br>",
                        2: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;3,500</b></span></br>",
                    },
                    htmlEnd: "</b></span></br>"
                }
            },
            cashiers: {
                reports: {
                    totalSummaryReport: {
                        total: 'Grand Total',
                        searchColumns: {
                            id: 'ID',
                            username: 'User Name',
                            name: 'Name',
                            type: 'Type',
                            currentBalance: 'Current Balance',
                            totalSports: 'Total Sports',
                            totalSportsWagers: 'Sales',
                            totalBetsPaidOut: 'Winnings',
                            totalVirtual: 'Total Global Bet Virtuals',
                            totalVirtualWagers: 'Sales',
                            totalVirtualPaidOut: 'Winnings ',
                            totalBV: 'Total {{brandName}} Virtuals',
                            totalBVWagers: 'Sales',
                            totalBVPaidOut: 'Winnings',
                            totalGR: 'Total Golden Race(GR)',
                            totalGRWagers: 'Sales',
                            totalGRPaidOut: 'Winnings',
                            totalLotBets: 'Total Lottery Sales',
                            totalLotWin: 'Total Lottery Winnings',
                            totalLotExtWin: 'Total Lottery External Winnings',

                            turnoverTax: 'Turnover Tax',
                            withholdingTax: 'Withholding Tax',
                            toCollect: 'To Collect',
                            loadUnloadBalances: 'Balances'
                        },
                        dataTableButtons: {
                            load: 'Load',
                            unload: 'Unload',
                            resetPassword: 'Reset PW',
                            selectAll: 'Select All',
                            unselectAll: 'Unselect All',
                            loadAllBalances: 'Load All Balances',
                            unloadAllBalances: 'Unload All Balances'
                        }
                    },
                    otherReports: {
                        searchColumns: {
                            id: 'ID',
                            couponCode: 'Coupon Code',
                            transactionDate: 'Transaction Date',
                            rollingBalance: 'Balance',
                            description: 'Description',
                            amount: 'Amount',
                            furtherDetails: 'Further Details',
                            transactionStatusCode: 'Status',
                            transactionStatusDescription: 'Transaction Status Description'
                        },
                        returnToCashiers: 'Return to cashier overview'
                    }
                }
            },
            reports: {
                mobileVirtuals: {
                    disclaimer: '',
                },
                allProductAnalysis: {
                    title: 'All Product Analysis',
                    description: 'Use the date filters below to generate the report.',
                    filterOptions: 'Select your filter options',
                    isSettled: 'Is Settled',
                    searchColumns: {
                        channel: 'Channel name',
                        productName: 'Product name',
                        numberOfBets: '# of Bets',
                        runningBets: 'Running Bets',
                        settledBets: 'Settled Bets',
                        stake: 'Stake',
                        winnings: 'Winnings',
                        jackpot: 'Jackpot'
                    }
                },
                clickToView: 'To show the hidden data please click on the icon ({0}). Only one field can be viewed at a time.',
                commissionAnalysis: {
                    titles: {
                        agentCommission: 'Agent Commission',
                        sportsAnalysis: 'Sports Commission Estimate',
                        betKingVirtualAnalysis: 'BK Virtual Commission Estimate',
                        betKingMobileVirtualAnalysis: 'BK Mobile Virtual Commission Estimate',
                        virtualDogRaceAnalysis: 'Virtual Racing Commission Estimates',
                        virtualSpin2WinAnalysis: 'Spin 2 Win Commission Estimates',
                        virtualLuckyBallAnalysis: 'Lucky Ball Commission Estimate',
                        globalBetVirtualAnalysis: 'GB Virtual League Commission Estimate',
                        globalBetColorColorAnalysis: 'Color Color Commission Estimate',
                        secondLevelDetails: ' / 2nd Level Details Report',
                        lotSpecialFiveAnalysis: 'Lottery Special 5 Commission Estimate',
                        lotDailyAnalysis: 'Lottery Daily Game Commission Estimate',
                    },
                    selectionGroup: 'Selection Group',
                    selection: 'Selection',
                    productType: 'Product Type',
                    settledDate: 'Settled Date',
                    ticketId: 'Ticket Id',
                    numberOfSelections: 'Number of selections',
                    commissionBand: 'Commission Band',
                    couponCount: "Coupon Count",
                    commissionEstimate: 'Commission Estimate',
                },
                agentCommission: {
                    bonusCalculationTitle: 'Sportsbook Monthly Bonus Calculation',
                    bonusCalcTbl: {
                        grossProfitTitle: 'Gross Profit Calculation',
                        bonusCalcTitle: 'Bonus Calculation',
                        stake: 'Stake',
                        winnings: 'Winnings',
                        grossProfit: 'Gross Profit',
                        perCentOfGrossProfit: '25% of Gross Profit',
                        totalCommisions: 'Total Commission',
                        bonus: 'Bonus',
                        bottomDisclamerEntitled: 'Entitled to Value gotten as Exact Bonus to be credited, bonus paid = ',
                        bottomDisclamerLowStake: 'Stake does not exceed 150,000 (₦), bonus paid = 0 (Not Entitled to Bonus)',
                        bottomDisclamerNegative: 'Where bonus result is negative, bonus paid = 0 (Not Entitled to Bonus)'
                    },
                    thisIsTheBonusFormula: 'Bonus Formula',
                    bonusInfoDisclaimer: '<strong>Important Notice:</strong> This report has been updated to match West African Time. <br>',
                    infoDisclaimer: '<strong>Important Notice:</strong> This report has been updated to match West African Time. ' +
                        'To maintain sanity on the records, you will be unable to merge reports from any period before May 27, 2019 with any period after. <br>',
                    bonusFormulaDisclaimer: '<br><b>a. The bonus value is given only if:</b>' +
                        '<br>&emsp;<strong>i.</strong> The total stake for the selected period exceeds 150,000&#8358;.' +
                        '<br>&emsp;<strong>ii.</strong> The gross profit is not in negative (i.e. it exceeds 0&#8358;).' +
                        '<br>&emsp;<strong>iii.</strong> The total amount of Turnover commission that will be/has been paid to you for the selected period is less than the commission % amount based on GGR (i.e. X% of GGR minus total Turnover commission exceeds 0&#8358;)' +
                        '<br>b. If the above 3 conditions are not all met, then the report will specify "No Bonus" and you would not be eligible for the monthly sports bonus.',
                    commissionAnalysisDisclaimer: 'This report shows data for settled bets only.',
                    bonusFormula: '((Stakes - Winnings) x 25%)',
                    searchColumns: {
                        openStakes: "Open Stakes",
                        channel: "Channel name",
                        jackpot: "Jackpot",
                        numberOfBets: "# of Bets",
                        productName: "Product name",
                        openBets: "Running Bets",
                        settledBets: "Settled Bets",
                        stake: "Stake",
                        bonus: "Bonus",
                        userName: "User name",
                        winnings: "Winnings",
                    }
                },
                agentSales: {
                    title: 'Sports by channel',
                    description: 'Use the date filters below to generate the report.',
                    filterOptions: 'Select your filter options',
                    isSettled: 'Is Settled',
                    searchColumns: {
                        channel: 'Channel name',
                        productName: 'Product name',
                        userName: 'User name',
                        numberOfBets: '# of Bets',
                        runningBets: 'Running Bets',
                        settledBets: 'Settled Bets',
                        stake: 'Stake',
                        winnings: 'Winnings',
                        jackpot: 'Jackpot'
                    }
                },
                sportsbookBets: {
                    title: 'Sportsbook Bets by User',
                    description: 'Use the date filters below to generate the report.',
                    filterOptions: 'Select your filter options',
                    isSettled: 'Is Settled',
                    searchColumns: {
                        depthLevel: 'Depth Level',
                        numberOfBets: 'Number of Bets',
                        parentId: 'Parent Id',
                        parentUsername: 'Parent Username',
                        stake: 'Stake',
                        userId: 'User Id',
                        username: 'Username',
                        potentialWin: 'Potential Win',
                        win: 'Win',
                        grossProfit: 'Gross Profit'
                    }
                },
                allProducts: {
                    title: 'All Products',
                    searchColumns: {
                        productName: 'Product Name',
                        numberOfBets: 'Number of Bets',
                        stake: 'Stake',
                        winnings: 'Winnings',
                        grossProfit: 'Gross Profit',
                        commission: 'Commission',
                        netProfit: 'Network Profit'
                    }
                },
                sportsbookProduct: {
                    title: 'Sportsbook Product',
                    searchColumns: {
                        level: 'Level',
                        userId: 'User Id',
                        username: 'Username',
                        parentId: 'Parent Id',
                        parentUsername: 'Parent Username',
                        numberOfBets: 'Number of Bets',
                        stake: 'Stake',
                        winningsPaidOut: 'Winnings Paid Out',
                        jackpotsWinnings: 'Jackpots Winnings',
                        jackpotContributions: 'Jackpot Contributions',
                        grossProfit: 'Gross Profit',
                        commission: 'Commission',
                        netProfit: 'Network Profit'
                    }
                },
                globalbetProduct: {
                    title: 'Global Bet Product',
                    searchColumns: {
                        level: 'Level',
                        userId: 'User Id',
                        username: 'Username',
                        parentId: 'Parent Id',
                        parentUsername: 'Parent Username',
                        numberOfBets: 'Number of Bets',
                        stake: 'Stake',
                        winningsPaidOut: 'Winnings Paid Out',
                        jackpotsWinnings: 'Jackpots Winnings',
                        jackpotContributions: 'Jackpot Contributions',
                        grossProfit: 'Gross Profit',
                        commission: 'Commission',
                        netProfit: 'Network Profit'
                    }
                },
                goldenRaceProduct: {
                    title: 'Old Virtual',
                    searchColumns: {
                        level: 'Level',
                        userId: 'User Id',
                        username: 'Username',
                        parentId: 'Parent Id',
                        parentUsername: 'Parent Username',
                        numberOfBets: 'Number of Bets',
                        stake: 'Stake',
                        winningsPaidOut: 'Winnings Paid Out',
                        jackpotsWinnings: 'Jackpots Winnings',
                        jackpotContributions: 'Jackpot Contributions',
                        grossProfit: 'Gross Profit',
                        commission: 'Commission',
                        netProfit: 'Network Profit'
                    }
                },
                liabilityOverview: {
                    title: 'Liability Overview',
                    searchColumns: {
                        level: 'Level',
                        userId: 'User Id',
                        name: 'Name',
                        surname: 'Surname',
                        status: 'Status',
                        username: 'Username',
                        liabilityClosureTime: 'LiabilityClosureTime',
                        parentId: 'Parent Id',
                        parentUsername: 'Parent Username',
                        score: 'Liability'
                    }
                },
                liabilityAudit: {
                    title: 'Liability Audit',
                    searchColumns: {
                        userId: 'User Id',
                        transactionId: 'Transaction Id',
                        categoryCode: 'Category Code',
                        affectedBalanceAmount: 'Affected Balance Amount',
                        transactionDate: 'Transaction Date',
                        liabilityAfterTx: 'Liability After Tx'
                    }
                },
                creditBalance: {
                    title: 'Credit Balance',
                    searchColumns: {
                        id: 'Id',
                        createdOn: 'Created On',
                        description: 'Description',
                        credit: 'Credit',
                        debit: 'Debit',
                        balance: 'Balance'
                    }
                },
                assistanceProgram: {
                    title: 'Assistance Program',
                    headerOverView: 'Overview',
                    balanceCard: {
                        cardHeaderBalance: 'Balance',
                        totalAssistanceAmount: 'Total Assistance Amount',
                        totalAmountRepaid: 'Total Amount Repaid',
                        totalOutstandingAmount: 'Total Outstanding Amount'
                    },
                    paymentOptions:{
                        headerPaymentOtions: 'Payment Options',
                        paymentOverDueAmount: 'Payment Overdue amount',
                        makeOtherPayment: 'Make Other Payment',
                        paynow: 'Pay Now',
                        warningInfoline1: 'If the weekly repayment was not carried out in full, extra payments will first contribute towards paying any overdue amounts.',
                        warningInfoline2:'If there is no overdue amount, extra payments are considered as an addition to the weekly repayment amount. This means that if you have already paid your weekly repayment amount for this week, and you carry out an extra payment also this week, you will still be deducted the full weekly repayment amount next week.'
                    },
                    dueDateCard: {
                        cardHeaderNextDue: 'Next Due',
                        makesureFundsAvailable:'Please ensure your agent account has the funds available on this date.',
                        fullPayment: 'Full payment has been received',
                        enrollAgain:"If you'd like to enroll in another assistance program please contact email@betking.com"
                    },
                    dataTableLabels: {
                        tableHeaderDate: 'Date',
                        tableheaderDesc: 'Description',
                        tableheaderAmount: 'Amount',
                        amountCredited: 'Amount Credited',
                        amountDebited:'Amount Debited'
                    },
                    payLoanAmountGeneralErrors: {
                        Loan_Unauthorized: 'Loan_Unauthorized',
                        UnAuthorizedLoanError:'Loan is unauthorized',
                        FN_USER_ACCOUNT_NOT_ENOUGH_BALANCE: 'You do not have enough funds to perform this transaction',
                        AW_AUDIT_TX_ERR: 'Something went wrong. Please try again.',
                        INTERNAL_SERVER_ERROR: 'Something went wrong. Please try again.'
                    }
                },
                lGA: 'LGA',
                state: 'State',
                serialNumber: 'No.',
                titles: {
                    commissions: "Commissions",
                    sales: "Sales",
                    creditLiability: "Credit & Liability",
                    lotteryByChannel: 'Lottery By Channel',
                    virtualsByChannel: 'Virtuals by Channel'
                },
                filters: {
                    lastWeek: "Last Week",
                    retail: "Retail",
                    online: "Online",
                    all: "All",
                },
                allSales: {
                    InfoDisclaimer: '<strong>Important Notice:</strong> This report has been updated to match West African Time and records are from 12:00am - 11:59pm daily.',
                },
            },
            cashDesk: {
                title: 'Cash Desk',
                saveLastStake: 'Save Last Stake (F7)',
                saveLastSelection: 'Save Last Selection (F8)',
                summateStakes: 'Summate Stakes (F10)',
                bankerNotAllowed: 'Banker not allowed',
                searchEvents: {
                    title: 'Search Events',
                    id: 'ID',
                    eventStartTime: 'Start Time',
                    eventName: 'Event',
                    tournament: 'Tournament',
                    noResults: 'There are no results for your search criteria, please try again.',
                    minimumSearchLength: 'Search term must contain at least 3 characters.'
                },
                matchOfferings: {
                    title: 'Match Offerings',
                    filterOddsType: 'Filter Odds Type',
                    noResults: 'There are no offerings matching the selected event and filter',
                    tooltip: 'View all offers'
                },
                shortcutsInfo: {
                    title: 'Shortcuts Info',
                    functionDescription: 'Function',
                    shortcut: 'Shortcut',
                    requiredFocus: 'Required Focus',
                    noResults: 'No shortcuts information available'
                },
                evaluationLabel: 'Tickets in Evaluation:',
                tooltipMessages: {
                    invalidEventId: 'Event ID is invalid',
                    invalidShortcut: 'Shortcut code is invalid'
                },
                stakeSummation: {
                    title: 'Stake Summation',
                    disabledMessage: 'Press F10 to enable summation',
                    noCouponsMessage: 'No coupons created',
                    couponCode: 'Coupon Code',
                    status: 'Status',
                    stake: 'Stake',
                    numberOfCoupons: 'No. of Placed Coupons:'
                }
            },
            digitalAcceptance: {
                title: 'Welcome to {{brandUrl}}',
                instructions: 'In order to continue enjoying using {{brandUrl}}, we kindly ask that you read through the information below and that you register your acknowledgement of these documents.',
                agentAgreement: 'Agent Agreement',
                agentTerms: 'Agent T&Cs',
                websiteTerms: 'Website T&Cs',
                checkboxConfirmation: 'I confirm that I have read the above information and agree to its contents.',
                popupWarningMessage: 'In order to proceed, you must read through the documents above and confirm that you have understood and agreed to each one.',
                acceptedPopupMessage: 'Thank you for reading and accepting the information provided. Please note that you can always access Agent Agreement and associated T&Cs in the Agent Content section for reference purposes.',
                cancelPopupMessage: 'Please note that by not accepting the Agent Agreements and associated T&Cs, you will have restricted access to the {{brandName}} services. Click on ‘Back’ to view and accept the agreements.',
                warningMessageRemainingDays: 'You are required to accept all of {{brandName}}\'s Agent agreements within the next {remainingDays} days for you to continue enjoying full services on {{brandUrl}}.',
                warningMessageLimitExceeded: 'You are required to accept all of {{brandName}}\'s Agent agreements as soon as possible to continue enjoying full services on {{brandUrl}}.',
                launchApprovalProcess: 'Launch T&Cs Approval Process',
                pageTitle: 'Terms & Conditions',
                noAcceptedAgreement: 'You have not yet accepted an agreement of this kind or the agreement is no longer available.',
            }
        },
        statementSearch: {
            selectionMessage: 'Please choose the required options and click the Search button to load your transactions',
            accountType: 'Account Type',
            transactionType: 'Transaction Type',
            subTransactionType: 'Sub Type',
            noSearchResults: 'No results for current search parameters',
            noResultsTitle: 'No Results to display',
            resultColumns: {
                id: 'ID',
                description: 'Description',
                coupon: 'Coupon',
                positive: 'Positive',
                negative: 'Negative',
                balance: 'Balance',
                debit: 'Debit',
                credit: 'Credit',
                status: 'Status'
            }
        },
        openBets: {
            yourOpenBets: 'Your Open Bets',
            yourRecentBets: 'Your Recent Bets',
            openBetsTitle: 'Open Bets Overview',
            recentBetsSubtitle: 'For a complete list of your past bets please use the ',
            openBetsSubtitle: 'No running bets available. For more information please use the ',
            moreThan20OpenBets: 'Only the most recent open 20 bets are shown. For more information please use the ',
            betSearchButton: 'Bet Search',
            details: 'Details',
            events: 'Events',
            code: 'Code',
            placed: 'Placed',
            stake: 'Stake',
            type: 'Type',
            odds: 'Odds',
            openCoupon: 'Open Coupon',
            cashoutValue: 'Cashout Value',
            rebet: 'Rebet',
            selection: 'Selection',
            status: 'Status',
            legendRunning: 'Running',
            legendWon: 'Won',
            legendLost: 'Lost',
            legendBrown: "Cashout",
            legendVoid: 'Void',
            legendCancelled: 'Cancelled',
            legendCashout: 'Cashout',
            legendPromotion: 'Promotion',
            legendPartialyWon: 'Partially won',
            legendEvaluation: 'Evaluation'
        },
        userAreaMenu: {
            title: 'User Area Menu ',
            accountInformation: 'Account Information',
            newCoupon: 'Cash Desk',
            balance: 'Balance',
            editProfile: 'Edit Profile',
            betSearch: 'Bet Search',
            openBets: 'Open Bets',
            userList: 'User List',
            manageUsers: 'Manage Users',
            transfer: 'Transfer',
            betSearchTitle: 'Bet List Sports',
            betSearchVirtualsTitle: 'Bet List Virtuals',
            betSearchVirtualsBottomDisclaimer: 'For {{brandName}} Virtuals Only',
            searchSessionsTitle: 'Search Sessions',
            accountOverviewTitle: 'Account Overview',
            accountBalanceTitle: 'Balances',
            mainBalanceTitle: 'Main Balances',
            interaccount: 'Interaccount',
            newUser: 'New User',
            accountDetail: 'Account Details',
            changePersonalData: 'Change Personal Data',
            viewSession: 'View Session',
            myNetwork: 'My Network',
            cashiers: 'Cashiers',
            listUsers: 'List Users',
            listAgents: 'List Agents',
            userDetails: 'User Details',
            commissions: 'Commissions',
            agentRequests: 'Agent Requests',
            newAgentRegistration: 'New Agent Registration',
            newCashierRegistration: 'New Cashier Registration',
            marketingMaterial: 'Marketing Material',
            agentContent: 'Agent Content',
            messages: 'Messages',
            myProfile: 'My Profile',
            betList: 'Bet List Sports',
            betListVirtuals: 'Bet List Virtuals',
            betListLottery: 'Bet List Lottery',
            accountStatement: {
                title: 'Account Statement',
                desc: 'Please select the period you would like to review.'
            },
            latestMessages: {
                title: 'Latest Messages',
                moreMsgs: 'More messages'
            },
            transactionsList: {
                title: 'Transactions List',
                desc: 'Please select the period you would like to review.'
            },
            searchCriteria: {
                title: 'Search Criteria',
                accountType: 'Select account type',
                transactionType: 'Select transaction type',
                subType: 'Select sub transaction type',
                accountTypeSelect: 'All',
                transactionTypeSelect: 'All'
            },
            searchResults: {
                title: 'Search Results',
                msgFialed: 'Failed/Rejected',
                msgRunning: 'Running',
                msgPending: 'Pending',
                msgComplete: 'Virtual/Complete'
            },
            messageCenter: {
                pageTitle: 'Message Centre',
                title: 'Title',
                statusOptions: {
                    read: 'Read',
                    unread: 'Unread',
                    highPriority: 'High priority',
                    received: 'Received',
                    sent: 'Sent'
                },
                noMessagesFound: "You currently don't have any messages to view",
                noResults: 'No results for current search parameters.',
                noResultsTitle: 'No Results to display',
                id: 'ID',
                priority: 'Priority',
                messageDetails: 'Message Details',
                message: 'Message',
                dateSent: 'Sent on',
                dateRead: 'Read on',
                timePeriods: {
                    period: 'Period',
                    manual: 'Manual',
                    today: 'Today',
                    currentWeek: 'Current week',
                    currentMonth: 'Current month',
                    yesterday: 'Yesterday',
                    lastWeek: 'Last week',
                    lastMonth: 'Last month'
                }
            },
            transactionList: {
                title: 'Transactions List',
                agentTypes: {
                    masterAgent: 'Master Agent',
                    superAgent: 'Super Agent',
                    agent: 'Agent',
                    cashier: 'Cashier',
                    subAccountPlayer: 'Sub Acc Player'
                },
                transactionType: {
                    '-99': 'All',
                    '1': 'Payment Methods',
                    '2': 'Commissions',
                    '4': 'Player-2-Player',
                    '5': 'Played/Won-Bets',
                    '6': 'Bonus',
                    '8': 'Other Payments',
                    '10': 'Deposits',
                    '11': 'Withdrawals'
                }
            }
        },
        agent: {
            agents: 'Agents',
            leftMenuTitle: 'Agents Area',
            regBtn: 'Register New User',
            agentCode: 'Agent Code:'
        },
        userProfile: {
            title: 'Edit Profile',
            accountInstructions:
                'Please be assured that {{brandName}} will act in accordance with the Data Protection Act and that all your personal information will be treated with the greatest care. ',
            updateButton: 'Update Profile',
            profileUpdated: 'Profile Updated',
            profileNotUpdated: 'Profile could not be updated',
            pageTitle: 'Change Personal Data',
            winningNotificationUpdated: 'Winning Notification Updated',
            winningNotificationNotUpdated: 'Winning Notification could not be updated'
        },
        accessDenied: {
            header: 'Access Denied',
            message: 'You do not have permission to access this page'
        },
        myAccount: 'My Account',
        printOdds: {
            printingType: 'Printing Type',
            dates: 'Dates',
            selectAll: 'Select All',
            unSelectAll: 'Unselect All',
            type: 'Type',
            generalFootball: 'General Football',
            italianChampionship: 'Italian Championship',
            format: 'Print Format',
            PDFFormat: 'PDF',
            HTMLFormat: 'HTML',
            print: 'Proceed to Print',
            saveTemplate: 'Save Template',
            preSavedTemplates: 'Load pre-saved templates',
            defaultSettings: 'Default Settings',
            templateConfirmationMessage: 'Choose a name to save this template',
            templateName: 'Template name',
            exceededTemplates: 'Template limit exceeded. Remove existing templates to save new ones.',
            sports: 'Other Sports',
            next: 'Next',
            back: 'Back',
            cancel: 'Cancel',
            grouping: 'Group By',
            event: 'Event',
            date: 'Date',
            sortEvents: 'Sort Events',
            changeSortEvents: 'Change',
            oddsSelection: 'Odds Selection',
            groups: 'Groups',
            custom: 'Custom',
            pageLayout: 'Page Layout',
            portrait: 'Portrait',
            landscape: 'Landscape',
            fontSize: 'Font Size',
            small: 'Small',
            normal: 'Normal',
            large: 'Large',
            printLogo: 'Print Logo',
            printWithoutLogo: 'No Logo',
            printLogoEveryPage: 'Every Page',
            printLogoFirstPage: 'First Page Only',
            printOdds: 'Print Odds',
            fastPrintOdds: 'Fast Print',
            standardPrintOdds: 'Standard Print',
            invalidPrintOdds: 'Error: Invalid print odds',
            selectionPart: 'Part {0} of {1}',
            noTournamentSelected: 'Select at least one tournament to proceed to odds selection',
            noOddsSelected: 'Select at least one odd to print'
        }
    },
    shop: {
        title: 'Shop',
        home: 'Home'
    },
    login: {
        title: 'Login',
        loggingIn: 'Logging in...',
        logout: 'Logout',
        welcome: 'Welcome',
        invalidCredentials: 'Invalid username or password',
        accountLocked: 'Account is locked out, please try again later',
        loginError: 'Error occurred during login',
        pleaseLogin: 'Please Login',
        pleaseLoginOrRegister: 'Please login or register to play!',
        clickHere: 'Click here',
        or: 'or',
        loginRequired: 'Login Required',
        loginRequiredMsg: 'You must be logged in to access this page',
        usernamePlaceholder: 'Username',
        usernameOrMobilePlaceholder: 'Username/Mobile',
        mobilePlaceholder: 'Mobile',
        mobileNotVerified: 'This mobile number has not been verified, please use your username instead',
        limitReached: 'Reset attempt limit reached. Please try again later'
    },
    poker: {
        pokerPassword: 'Poker Password',
        loginToPlay: 'Please login to play!',
        accountBlocked: 'Account Blocked. Please contact our Customer Service!',
        setupCredentials: 'Setup your credentials here!',
        nicknameWarning: '(the nickname cannot be changed again later)',
        nickname: 'Nickname',
        credentialsToPlay: 'Use the following credentials to play!',
        downloadFor: 'Download For ',
        toDownload: 'Click here to Download',
        moreInfo: 'More Info'
    },
    sports: {
        titles: {
            sportsbook: 'Sportsbook',
            offering: 'Offering'
        },
        new: 'New!',
        numOfChamp: 'No. Champ',
        sortBy: 'Sort by',
        feedHeader: {
            Sport: 'Sports',
            Event: 'Events',
            Match: 'Matches',
            Odd: 'Odds'
        },
        sportsBanner: {
            viewAll: 'View all'
        },
        sidebarButtons: {
            liveBetting: 'Live Betting',
            oddsLessThanTwo: 'Less than 2'
        },
        lessThan2: {
            title: 'Odds less than 2',
            selectOdds: 'Select your odds less than',
            selectTimeRange: 'Select the time range to show',
            selectSports: 'Choose the sports you would like to view',
            timeRange: {
                '1': '1 hr',
                '2': '3 hrs',
                '3': 'Today',
                '4': '3 Days'
            }
        },
        groupStage: {
            title: 'Predictor',
            groupStage: 'Group Stage',
            description: 'Select the teams you think will place 1st and 2nd in their Groups',
            group: 'Group',
            chooseWinners1: 'Choose your Group',
            chooseWinners2: 'Winners',
            yourPicks1: 'Your Group',
            yourPicks2: 'Picks',
            howToPlay: 'How to Play'
        },
        knockoutStage: {
            knockoutStage: 'Knock Out Stage',
            description: 'Select the teams you think will win each round',
            last16: 'Round of 16',
            quarterFinals: 'Quarter-Finals',
            semiFinals: 'Semi-Finals',
            final: 'Final',
            winnerGroup: 'Winner Group',
            runnerupGroup: 'Runner-up Group',
            thirdGroup: '3rd Group',
            winnerMatch: 'Winner Match',
            winnerQuarterFinal: 'Winner QF',
            winnerSemiFinal: 'Winner SF',
            openCoupon: 'Click here to open the coupon'
        },
        widgets: {
            bestSellers: {
                title: 'Best Sellers',
                stake: 'Stake',
                winnings: 'Winnings',
                playNow: 'Play Now'
            },
            hottestOU: {
                title: 'Hottest Over Under 2.5',
                over25: 'Over 2.5',
                under25: 'Under 2.5'
            },
            lastMinute: {
                title: 'Last Minute',
                hours: 'hr.',
                minutes: 'min.'
            },
            latestResults: {
                title: 'Latest Results'
            },
            latestWinners: {
                title: 'Latest Winners',
                on: 'on',
                played: 'played',
                won: 'won:'
            },
            liveBetting: {
                title: 'live Betting',
                allEventsAdded: 'All {0} events have been added',
                clickOrDrag: 'Click on an above Event or Drag Events here',
                noLiveEvents: 'Currently there are no events available in the live betting section',
                goToSportsPage: 'Go to sports',
                sports: 'Sports',
                closeAll: 'Close All',
                openAll: 'Open All',
                filter: 'Filter',
                active: 'Active',
                events: 'Events',
                clear: 'Clear'
            },
            marketMovers: {
                title: 'Market Movers',
                subtitle: 'Most searched odds by our users!',
                startingOdds: 'Starting Odds:',
                currentOdds: 'Current Odds:',
                time: 'Time'
            },
            matchDay: {
                title: 'Match of the Day',
                subtitle: 'Our users are placing the following bets'
            },
            mostPopular: {
                title: 'Most Popular Bets',
                leagueFilterTitle: 'Filter by competition',
                noRecord: 'There are no odds to show'
            },
            upcomingEvents: {
                title: 'Upcoming Events',
                noRecord: 'There are no odds to show'
            }
        },
        match: {
            error: 'Could not retrieve match data. This match might have expired. Please go back to the homepage to view the latest matches.'
        },
        events: {
            eventOdds: {
                showEventsFor: 'Show events for',
                chooseSportFor: 'Choose the sport for which you would like to view {0}’s fixtures',
                fixtures: 'Fixtures',
                event: 'Event',
                player: 'Player',
                name: 'Name',
                spread: 'Spread',
                outright: 'Outright',
                prematch: 'Prematch',
                selections: 'Selections',
                more: 'More',
                specials: 'Specials',
                info: 'Info',
                oddsBoost: 'Odds Boost',
                oddsFilter: 'Odds Filter',
                bettingHelp: 'Betting Help',
                closeOdds: 'Close',
                eventOddsTooltipMsg: 'Our customers bet like this',
                legendSingle: 'Singles',
                legendTreble: 'Trebles (Min. 3)',
                legendMultiple: 'Multiple (Min. 5)',
                legendUnique: 'Unique',
                combinabilityName: {
                    '0': 'Unique',
                    '1': 'Singles',
                    '3': 'Multiple',
                    '5': 'Quintuple'
                },

                //Event Odds Statistics
                headToHead: 'Head to Head',
                lastMatches: 'Last 5 Matches',
                nextMatches: 'Next 5 Matches',
                moreStatistics: 'More Statistics',
                draws: 'Draw(s)',
                date: 'Date',
                match: 'Match',
                tourRound: 'Tournament / Round',
                fullTime: 'FT',
                round: 'Round',
                week: 'Week',
                goals: 'Goals',
                betradarPopup: 'Betradar pop-up',
                overUnder: {
                    title: 'Over / Under',
                    allMatches: 'All Matches',
                    homeMatches: 'Home Matches',
                    awayMatches: 'Away Matches',
                    fullTime: 'Full Time',
                    firstHalf: '1st Half',
                    secondHalf: '2nd Half',
                    team: 'Team',
                    played: 'Played',
                    over: 'Over',
                    under: 'Under',
                    averageGoalsScored: 'Average goal scored',
                    cleanSheets: 'Clean sheets',
                    atLeastOneGoal: 'At least one goal',
                    games: 'Games'
                },
                playerStats: {
                    title: 'Player Stats',
                    position: 'Pos',
                    matches: 'Matches',
                    goals: 'Goals',
                    assists: 'Assists',
                    cards: 'Cards',
                    yellowCards: 'Yellow Cards',
                    yellowRedCards: 'Yellow/Red Cards',
                    redCards: 'Red Cards'
                },
                leagueRanking: {
                    title: 'League Ranking',
                    headers: {
                        display: {
                            position: 'Pos',
                            team: 'Team',
                            played: 'P',
                            won: 'W',
                            drawn: 'D',
                            lost: 'L',
                            goalsFor: 'GF',
                            goalsAgainst: 'GA',
                            goalsDifference: 'GD',
                            points: 'Pts'
                        },
                        tooltip: {
                            position: 'Position',
                            team: 'Team',
                            played: 'Played',
                            won: 'Won',
                            drawn: 'Drawn',
                            lost: 'Lost',
                            goalsFor: 'Goals For',
                            goalsAgainst: 'Goals Against',
                            goalsDifference: 'Goals Difference',
                            points: 'Points'
                        }
                    }
                },
                notAvailable: 'are not available for this match'
            },
            upcomingEvents: {
                '1': '24 hrs',
                '2': '48 hrs',
                '3': '7 days',
                '4': 'All',
                '5': '1 hr',
                '6': '3 hrs',
                '7': '3 days',
                '8': 'In 2 days',
                '9': 'In 3 days',
                '10': 'In 4 days',
                '11': 'In 5 days',
                title: 'Upcoming next:'
            },
            sortEvents: {
                '0': 'Popularity',
                '1': 'Time / Date',
                '2': 'A / Z'
            },
            noSelectedEvents: 'No selected events. Please select at least one event.',
            maxSelectedEventsBefore: 'Cannot select more than ',
            maxSelectedEventsAfter: ' events.',
            maxSelectedEvents: 'Cannot select more than {0} events.',
            noEventsForTimeRange: 'No events available for the selected time range',
            maxAddedFavourites: 'Cannot add more than {0} favourites events.',
            noFavouritesSelected: 'Currently no Favourites have been added.',
            addToFavourites: 'Add to Favourites',
            addedFavourites: '{0} added to Favourites.',
            addedFavouritesWithLimit: '{0} added to Favourites. Limit of {1} has now been reached.',
            alreadyInFavourites: 'Tournaments selected are already in Favourites.',
            filterTournaments: 'Filter Tournaments'
        },
        results: {
            title: 'Results',
            selectDate: 'Date',
            selectSport: 'Sport',
            selectCountry: 'Country',
            selectTournament: 'Tournament',
            notAvailable: 'Not Available',
            noMatchesFound: 'No Matches Found!',
            halfTime: 'HT',
            fullTime: 'FT',
            extraTime: 'ET',
            penalties: 'Pen.',
            status: 'Status'
        },
        casino: {
            playNow: 'Play Now',
            demo: 'Demo',
            casinoTitles: {
                'casino-all': 'All',
                'casino-top': 'Top',
                'casino-new': 'New',
                'casino-slots': 'Slots',
                'casino-card': 'Card',
                'casino-roulette': 'Roulette',
                'casino-video-poker': 'Video Poker',
                'casino-games': 'Games',
                'casino-race-slots': 'Race Slots',
                'casino-live-games': 'Live Games',
                'new-casino-all': 'All',
                'new-casino-top': 'Top',
                'new-casino-new': 'New',
                'new-casino-slots': 'Slots',
                'new-casino-card': 'Card',
                'new-casino-roulette': 'Roulette',
                'new-casino-video-poker': 'Video Poker',
                'new-casino-games': 'Games',
                'new-casino-race-slots': 'Race Slots',
                'new-casino-live-games': 'Live Games',
                'casino-html': 'Html 5',
                'games-all': 'All',
                'games-virtual-sports': 'Virtual Sports',
                'games-casino': 'Casino',
                'games-slots': 'Slots',
                'games-instant-wins': 'Instant Wins',
                'games-bingo-keno': 'Bingo Keno',
                'casino-card-games': 'Card Games',
                'casino-special-games': 'Special Games',
                'casino-more-games': 'More Games',
                'casino-favourites': 'Favourites',
                MediaLiveGames: 'King',
                Evolution: 'Jack',
                HiveGames: 'N-Live',
                EspressoGames: 'Queen',
                Netent: 'Ace',
                Betsoft: '3D_Slots',
                HivePoker: 'One_Poker',
                PortomasoLiveCasino: 'Portomaso_Live_Casino',
                BlueOceanGaming: 'Vegas',
                GlobalBet: 'Global_Bet'
            }
        },
        coupon: {
            couponOdds: {
                clear: 'Clear',
                couponTitle: 'Betslip',
                currentCoupon: 'Current Betslip',
                myBets: 'My Bets',
                quickBetTitle: 'Quickbet',
                smartBetTitle: 'Smartbet',
                live: "Live",
                downloadSmartCodes: 'Download Smart Codes',
                invalidSmartCode: 'Invalid or unavailable market code',
                couponEmpty1: 'No selection has been made.',
                couponEmpty2: 'Click on the odds or enter a code to be loaded.',
                couponWaiting: 'Confirming coupon. Please wait.',
                couponGroupDetails: 'Comb. Bet Details',
                couponGroups: 'Grp',
                couponGroupCom: 'Com',
                toStakeTaxInfo: 'View Net Stake and Winning Info',
                toStakeInput: 'Back to Stake Input',
                stake: 'Stake',
                stakeAfterTax: 'Net Stake',
                winnings: 'Winnings',
                winningsAfterTax: 'Net Win.',
                couponCombBet: 'Comb. Bet',
                couponMultipleBet: 'Multiple',
                couponSplitBet: 'Split Column Bet',
                amount: 'Amount',
                events: 'Events',
                acceptOddsModifications: 'Allow Odds Changes',
                allowOddChanges: 'Allow Odd Changes',
                acceptStakeReduction: 'Accept Stake Reduction',
                allowStakeReduction: 'Allow Stake Reduction',
                allowTransfer: 'Allow Transfer',
                tax: 'WTH Tax',
                minTax: 'Min WTH Tax',
                maxTax: 'Max WTH Tax',
                totalStake: 'Total Stake',
                stakeTax: 'Excise Duty',
                stakeAfterTax: 'Net Stake',
                totalShare: 'Total Share',
                totalOdds: 'Total Odds',
                totalCombinations: 'Total Combinations',
                minOdd: 'Min Odd',
                maxOdd: 'Max Odd',
                minWin: 'Min Win',
                maxWin: 'Max Win',
                minWinGross: 'Min Win (Gr)',
                maxWinGross: 'Max Win (Gr)',
                minB: 'Min Bonus',
                maxB: 'Max Bonus',
                bonus: 'Accumulator Bonus Applied!',
                potentialWinning: 'Potential Winnings',
                potentialWinningGross: 'Potential Winnings (Gross)',
                potentialWinningNet: 'Potential Winnings (Net)',
                potentialWinningNoBonus: 'Potential Winnings (No Bonus)',
                potentialWinningTotal: 'Total Potential Winnings',
                maxStake: 'Max Stake',
                maxWinning: 'Max Win',
                maxWinDetails: '*MAX WIN is an estimation based on the first prize of the previous edition of the same tournament.',
                couponConfirmationMessage: 'You are about to place a bet, please confirm that you would like to proceed.',
                potWin: 'Pot. Win',
                withholdingTax: 'Tax',
                today: 'Today',
                tomorrow: 'Tomorrow',
                expiredEvents: 'Expired Events',
                remove: "Remove",
                oneExpiredMessage: "1 selection has expired and we have recalculated your returns accordingly.",
                numOfExpiredMessage: "{0} selections have expired and we have recalculated your returns accordingly."
            },
            openBets: {
                open: "Open",
                settled: "Settled",
                booked: "Booked",
                won: "Won",
                lost: "Lost",
                filterBets: "Filter Bets",
                detailedView: 'Detailed View',
                searchBets: 'Bet Search',
                runningBetsTitle: 'Running placed bets',
                placed: 'Placed',
                code: 'Code',
                odds: 'Odds',
                totalComb: 'Total Comb.',
                stake: 'Stake',
                events: 'Events',
                more: 'more',
                bookedBets: 'Booked Bets',
                viewDetails: 'View Details',
                hasMoreBets: 'Only the {0} most recent bets are shown. To view more data, go to bet search.',
                noBetsFound: 'There are currently no bets to show.',
                noBookedBetsFound: 'There are currently no booked bets to show.'
            },
            combinationSet: {
                combinationType: 'Combination Type',
                groupings: 'Groupings',
                noCombinations: 'Number of Combinations',
                minBonus: 'Min. Bonus Applied',
                maxBonus: 'Max. Bonus Applied',
                minPotentialWins: 'Min. Potential Winnings',
                maxPotentialWins: 'Max. Potential Winnings',
                notLoggedIn: 'If you wish to confirm your bet, please log into the site',
                couponReserva: 'Coupon is being evaluated by operator',
                couponApprovedByOperator: 'Bet Slip approved by operator: ',
                couponRejectedByOperator: 'Bet Slip rejected by operator: ',
                couponApprovedByClient: 'Bet Slip approved by client: ',
                couponRejectedByClient: 'Bet Slip rejected by client: ',
                couponStakeChanged: 'A new offer has been proposed with a new stake. Do you accept?',
                couponOddsChanged: 'A new offer has been proposed and some odds have changed. Do you accept?',
                couponStakeOddsChanged: 'A new offer has been proposed and the stake and some odds have changed. Do you accept?',
                couponReactionTooLate: 'The coupon has been rejected automatically.',
                couponReactionRejected: 'The coupon has been rejected.',
                maxPotWinChanged: 'Potential winnings have changed',
                doYouAccept: '',
                oldStake: 'Old stake: ',
                confirmedStake: 'Confirmed stake: ',
                bookBet: 'Book',
                nComb: 'N° Comb',
                print: 'Print',
                rebet: 'Rebet',
                onlyRegularTime: 'O.T. included',
                onlyRegularTimeShort: 'OT',
                savedCoupon: 'Select a saved coupon:',
                inReserva: 'Bet is currently being evaluated by operator',
                couponSuccess: 'Bet was successful',
                bookedBet: 'Booked Bet',
                couponBookedSuccess: 'Congratulations! Your bet has been booked.',
                couponBookedNotRegistered: 'For your bet to be valid, take your booking code to any {{brandName}} shop to place your bet. Note that odds might change.',
                couponBetOnline: 'Want to Bet Online?',
                couponBookedLoginOrRegister: 'Log in to your account or register to be able to place your bet directly.',
                couponBookAnotherBet: 'Book another ticket',
                couponBookedDate: 'Date Booked',
                couponBookedLive: 'Live',
                couponBookedPrematch: 'Prematch',
                loadBookedCoupon: 'Load',
                bookedCoupon: 'Coupon booked successfully!',
                bookedCouponError: 'Bet could not be booked!',
                matchRequested: 'Matches requested',
                matchesAvailable: 'Matches available',
                matchesUnavailable: 'The following matches are unavailable',
                bookedProceed: 'Would you like to proceed?'
            },
            couponTools: 'Coupon Tools',
            verifyCoupon: {
                title: 'Verify Coupon',
                description: 'Insert coupon code to check the status of your bet',
                couponCodePlaceHolder: 'Coupon Code',
                invalidCouponCode: 'Invalid coupon code',
                couponNotFound: 'Coupon not found.',
                couponRefunded: 'Coupon has been refunded.',
                couponInReview: 'Coupon in review.',
                betSlipCouponPlaceHolder: 'Booking Code',
                errorCheckRecentCoupon: 'An issue has been encountered. Please check the bet list.',
            },
            printCoupon: {
                userID: 'Cashier',
                bet: 'Bet',
                bonus: 'Bonus',
                minBonus: 'Bonus Min. Comb.',
                maxBonus: 'Bonus Max. Comb',
                minWinnings: 'MIN WINNINGS',
                brandName: '{{brandName}}',
                companyName: '{{companyName}} trading as',
                companyAddress: '{{companyAddress}}',
                companyTel: 'Tel: {{companyTelephoneNo}}',
                receiptCode: 'Code',
                receiptDate: 'Date',
                reprintDate: 'Reprint Date',
                betType: 'Type',
                identify: 'Identity',
                contoGioco: 'Gaming Account',
                odds: 'Odds',
                trasmissione: 'Bet placed on',
                couponBookedDate: 'Coupon booked on',
                singole: 'Single',
                doppie: 'Double',
                triple: 'Triple',
                quadruple: 'Four-Fold (Quadruple)',
                cinquine: 'Five-Fold',
                sestine: 'Six-Fold bet',
                settine: 'Seven-fold bet',
                uple: 'Uple',
                totalWinnings: 'POTENTIAL WINNINGS',
                maxWinnings: 'MAX WINNINGS',
                tutela1:
                    'the benefit for the client is talking to the receipt of this request and send data transmission via internet, managed exclusive from the central server {{companyname}} of malta',
                tutela2:
                    "Betting is strictly prohibited for persons under 18 years. The game can be addictive . Play responsibly and without crossing your financial limits . Always calculate the odds ' of winning your bets : to learn to know the privacy laws available within the web site rules or at the c and d",
                termsConditions: "By placing this bet, you hereby accept our Ts & Cs as stated on our website, www.{{brandUrl}}. No Commission is charged on winnings.",
                bookingTermsConditions: "By booking this bet, you hereby accept our Ts & Cs as stated on our website, www.{{brandUrl}}. No Commission is charged on winnings.",
                couponTypes: {
                    single: 'Single',
                    multiple: 'Multiple',
                    system: 'System'
                },
                vatNumber: 'VAT Number: {{vatNumber}}',
                tinNumber: 'TIN Number: {{tinNumber}}'
            },
            oddChanges: {
                oddsChanged: 'Some of the selected odds have changed.',
                accept: 'Accept'
            },
            expandCoupon: {
                genericError: 'Error: The coupon details could not be loaded',
                statusDescriptions: {
                    '1': 'Placed',
                    '2': 'Lost',
                    '3': 'Won'
                },
                headers: {
                    event: 'Event',
                    market: 'Market',
                    selection: 'Selection',
                    oddValue: 'Odd Value',
                    totalOddValue: 'Total Odd Value',
                    stake: 'Stake',
                    bonus: 'Bonus',
                    potentialWin: 'Potential Win',
                    league: 'League',
                    smartCode: 'Smart Code',
                    eventName: 'Event Name'
                },
                groupNames: {
                    '1': 'Single',
                    '2': 'Double',
                    '3': 'Triple',
                    '4': 'Quadruple',
                    '5': 'Quintuple',
                    '6': 'Hexatruple',
                    '7': 'Septuple',
                    '8': 'Octuple',
                    '9': 'Nonuple',
                    '10': 'Decuple',
                    '11': '11',
                    '12': '12',
                    '13': '13',
                    '14': '14',
                    '15': '15',
                    '16': '16',
                    '17': '17',
                    '18': '18',
                    '19': '19',
                    '20': '20',
                    '21': '21',
                    '22': '22',
                    '23': '23',
                    '24': '24',
                    '25': '25',
                    '26': '26',
                    '27': '27',
                    '28': '28',
                    '29': '29',
                    '30': '30'
                }
            },
            statusCode: {
                '0': 'An error has occurred, please try again',
                '1': 'Bet was successful',
                '2': 'At this time you cannot place bets. Please contact customer support for more information',
                '3': 'One of the chosen events has expired',
                '4': 'One of the odds has changed.',
                '5': 'Wrong Password',
                '6': 'Username Equals Agent name',
                '7': 'Timeout For Coupon Cancelation',
                '8': 'Wrong User Network',
                '9': 'Wrong User Information',
                '10': 'Username Already Exists',
                '11': 'Account Insert Data Error',
                '12': 'Error Inserting Contact User',
                '13': 'Error Inserting Parameters User',
                '14': 'Error Updating User',
                '15': 'Wrong Currency',
                '16': 'Insufficient Funds',
                '17': 'Bet Not Paid By System',
                '18': 'Agent Bettor Mismatch',
                '19': 'Bet Already Paid',
                '20': 'Max Number Of Coupons Cancelled',
                '21': 'Bet Lost or Open',
                '22': 'Banker Not Allowed On Integrals',
                '23': 'Email Already Exist',
                '24': 'MinLimit By Player Reached',
                '25': 'MaxLimit By Player Reached',
                '26': 'Single Bet Max Limit By User',
                '27': 'Multiple Bet Max Limit By User',
                '28': 'Combination Bet Max Limit By User',
                '29': 'Concurrency Issue',
                '30': 'Team Already Exists',
                '31': 'Error Inserting User Risk Settings',
                '32': 'Results Aready Exists',
                '33': 'Error Inserting User Limits',
                '34': 'Missing Mappings',
                '35': 'Stake Too High To Cancel',
                '36': 'Operation Already Done',
                '37': 'Cannot Cancel Live Bet',
                '38': 'Coupon Already Paid',
                '39': 'Max Coupon Loss Limit Exceeded',
                '40': 'Incorrect number of events',
                '41': 'Role Already Exists',
                '43': 'Operator Already Exists',
                '44': 'Country Mismatch',
                '45': 'Over Max Win Threshold',
                '46': 'Has To Change Password',
                '49': 'Maximum combinability exceeded',
                '50': 'Cannot Cancel Has Sub Events',
                '51': 'Cannot Cancel Has Markets',
                '52': 'Maximum stake allowed exceeded',
                '53': 'Maximum winning allowed exceeded',
                '54': 'Stake is lower than amount allowed',
                '55': 'Stake for each group is lower than amount allowed',
                '69': 'The maximum number of events allowed has been exceeded',
                '70': 'Incompatible events in the coupon',
                '200': 'Record Not Found',
                '201': 'Operation Not Allowed'
            },
            operatorReason: {
                '0': 'None',
                '1': 'ARB/Exchange',
                '2': 'Late bet/Event closed',
                '3': 'Unavailable market price',
                '4': 'Section already chosen',
                '5': 'Sharp/Top price',
                '6': 'Odds changing',
                '7': 'Loss limit excedeed',
                '8': 'Market suspended'
            },
            errorOddResult: {
                '0': 'Success',
                '1': 'Operation Not Allowed',
                '2': 'Selection has already been added',
                '3': 'OutrightError',
                '4': 'Cannot add a selection with a unique event',
                '5': 'Cannot add a unique event',
                '6': 'Max number of selections reached',
                '7': 'Cannot add more than 30 events',
                '8': 'Banker not allow in cross combination',
                '9': 'Cannot insert cross combination on live',
                '10': 'Banker not allowed on live',
                '11': 'Related events are incompatible',
                '12': 'Minimum combinability not reached',
                '13': 'Odd Does Not Exist',
                '14': 'Could not remove odd',
                '15': 'Could not remove grouping',
                '16': 'Wrong game play. Requires more events.',
                '17': 'One of the odds has changed',
                '18': 'One of the chosen events has expired',
                '19': 'Stake under minimum amount allowed',
                '20': 'Stake over maxmimum amount allowed',
                '21': 'Over maximum winning amount',
                '22': 'Group stake under minimum amount allowed',
                '23': 'Group stake over maximum amount allowed',
                '405': 'Booking code is no longer available. All events are expired.'
            },
            invalidBookingCode: "Invalid Booking Code",
            bankerDisabled: 'Banker functionality is only available on combination bets'
        },
        live: {
            inPlay: 'Currently In play',
            statistics: {
                title: 'Statistics',
                lineup: 'Team Line-ups',
                matchStats: 'Match statistics',
                standings: 'Standings'
            },
            liveDiary: 'Live Diary',
            multiView: 'Multi View',
            liveSportName: {
                0: 'All',
                1: 'Soccer',
                2: 'Basketball',
                3: 'Baseball',
                4: 'Ice Hockey',
                5: 'Tennis',
                6: 'Handball',
                7: 'Floorball',
                9: 'Golf',
                11: 'Motor Sport',
                12: 'Rugby Union',
                13: 'Aussie Rules',
                14: 'Winter Sports',
                15: 'Bandy',
                16: 'Football',
                17: 'Cycling',
                19: 'Snooker',
                20: 'Table Tennis',
                21: 'Cricket',
                22: 'Darts',
                23: 'Volleyball',
                24: 'Field Hockey',
                25: 'Pool',
                26: 'Waterpolo',
                28: 'Curling',
                29: 'Futsal',
                30: 'Olympics',
                31: 'Badminton',
                32: 'Bowls',
                34: 'Beach Volley',
                36: 'Athletics',
                37: 'Squash',
                43: 'Winter Sports',
                44: 'Winter Sports',
                45: 'Bobsleigh',
                46: 'Winter Sports',
                47: 'Winter Sports',
                48: 'Winter Sports',
                49: 'Snowboard',
                50: 'Speed Skating',
                51: 'Luge',
                59: 'Rugby League',
                60: 'Beach Soccer',
                61: 'Pesapallo',
                80: 'Lotto',
                81: 'Athletics',
                83: 'Boxing',
                85: 'Specials',
                86: 'Wrestling',
                87: 'UFC',
                101: 'Boxing',
                103: 'Swimming',
                106: 'Sailing',
                109: 'eSport Counter Strike',
                111: 'eSport League of Legends',
                112: 'eSport Dota 2',
                113: 'eSport Street Fighter V',
                114: 'Freestyle Skiing',
                117: 'MMA',
                118: 'Figure Skating',
                119: 'Skeleton',
                120: 'Short Track Speed Skating',
                142: 'Formula E',
                155: 'Basketball 3x3',
                254: 'Rugby Union'
            },
            liveStreamError: {
                '0': 'None',
                '2': 'Please log in to view the event',
                '16': 'You have insufficient funds to view the event',
                '100': 'There are problems with the connection. Please ',
                '101': 'Streaming is not available for this event',
                '104': 'This event is not visible in your country',
                '201': 'There was an error with the stream for this event'
            },
            matchStatus: {
                '0': 'Not Set',
                '1': 'Not started',
                '2': 'Started',
                '3': 'First period',
                '4': 'Second period',
                '5': 'Third period',
                '6': 'Fourth period',
                '7': 'Fifth period',
                '8': 'First set',
                '9': 'Second set',
                '10': 'Third set',
                '11': 'Fourth set',
                '12': 'Fifth set',
                '13': 'Sixth set',
                '14': 'Seventh set',
                '15': 'First quarter',
                '16': 'Second quarter',
                '17': 'Third quarter',
                '18': 'Fourth quarter',
                '19': 'Match pause',
                '20': 'First pause',
                '21': 'Second pause',
                '22': 'Third pause',
                '23': 'Fourth pause',
                '24': 'Fifth pause',
                '25': 'Sixth pause',
                '26': 'Overtime',
                '27': 'Awaiting overtime',
                '28': 'First half overtime',
                '29': 'Overtime half time',
                '30': 'Second half overtime',
                '31': 'After overtime',
                '32': 'Awaiting penalities',
                '33': 'Penalty shootout',
                '34': 'After penalities',
                '35': 'Ended',
                '36': 'Postponed',
                '37': 'Delayed',
                '38': 'Cancelled',
                '39': 'Cancelled',
                '40': 'Interrupted',
                '41': 'Abandoned',
                '42': 'Walkover',
                '43': 'Walkover 1',
                '44': 'Walkover 2',
                '45': 'Retired',
                '46': 'Retired 1',
                '47': 'Retired 2',
                '48': 'Top of 1st inning',
                '49': 'Bottom of 1st inning',
                '50': 'Top of 2nd inning',
                '51': 'Bottom of 2nd inning',
                '52': 'Top of 3rd inning',
                '53': 'Bottom of 3rd inning',
                '54': 'Top of 4th inning',
                '55': 'Bottom of 4th inning',
                '56': 'Top of 5th inning',
                '57': 'Bottom of 5th inning',
                '58': 'Top of 6th inning',
                '59': 'Bottom of 6th inning',
                '60': 'Top of 7th inning',
                '61': 'Bottom of 7th inning',
                '62': 'Top of 8th inning',
                '63': 'Bottom of 8th inning',
                '64': 'Top of 9th inning',
                '65': 'Bottom of 9th inning',
                '66': 'Top of Extra inning',
                '67': 'Bottom of Extra inning',
                '68': 'Break Top of 1st - Bottom of 1st',
                '69': 'Break Top of 2nd - Bottom of 1st',
                '70': 'Break Top of 2nd - Bottom of 2nd',
                '71': 'Break Top of 3rd - Bottom of 2nd',
                '72': 'Break Top of 3rd - Bottom of 3rd',
                '73': 'Break Top of 4th - Bottom of 3rd',
                '74': 'Break Top of 4th - Bottom of 4th',
                '75': 'Break Top of 5th - Bottom of 4th',
                '76': 'Break Top of 5th - Bottom of 5th',
                '77': 'Break Top of 6th - Bottom of 5th',
                '78': 'Break Top of 6th - Bottom of 6th',
                '79': 'Break Top of 7th - Bottom of 6th',
                '80': 'Break Top of 7th - Bottom of 7th',
                '81': 'Break Top of 8th - Bottom of 7th',
                '82': 'Break Top of 8th - Bottom of 8th',
                '83': 'Break Top of 9th - Bottom of 8th',
                '84': 'Break Top of 9th - Bottom of 9th',
                '85': 'Break Top of EI - Bottom of 9th',
                '86': 'Break Top of EI - Bottom of EI',
                '87': 'Golden Set',
                '88': 'Sudden Death',
                '89': 'After Sudden Death',
                '90': 'In Progress',
                '91': 'Session Break',
                '92': 'Defaulted 1',
                '93': 'Defaulted 2',
                '94': '1st innings, home team',
                '95': '1st innings, away team',
                '96': '2nd innings, home team',
                '97': '2nd innings, away team',
                '98': 'Awaiting super over',
                '99': 'Super over, home team',
                '100': 'Super over, away team',
                '101': 'After super over',
                '102': 'Innings break',
                '103': 'Super over break',
                '104': 'Lunch break',
                '105': 'Tea break',
                '106': 'Stumps',
                '107': 'Injury Break',
                '108': 'Awaiting Sudden Death',
                '109': 'First Map',
                '110': 'Second Map',
                '111': 'Third Map',
                '112': 'Fourth Map',
                '113': 'Fifth Map',
                '114': 'Sixth Map',
                '115': 'Seventh Map',
                '116': 'Awaiting Golden Set',
                '117': 'After Golden Set',
                '118': 'First Game',
                '119': 'Second Game',
                '120': 'Third Game',
                '121': 'Fourth Game',
                '122': 'Fifth Game',
                '123': 'Half Time',
                '124': 'First Half',
                '125': 'Second Half'
            },
            lightningBetsMarketPrefix: '1 minute - ',
            playLiveMatchTracker: 'Play Live Match Tracker',
            resumeLiveMatchTracker: 'Resume Live Match Tracker'
        },
        search: {
            resultsFor: 'Results for',
            showAllResults: 'Show all sports',
            showAll: 'Show All'
        },
        discoverProductsTitle: 'PROMOS',
        findOutMore: 'Find Out More',
        selectSport: 'Sports A-Z',
        selectOutRight: 'Select Outright',
    },
    fixtures: {
        oddsValidityDisclaimer1: '',
        oddsValidityDisclaimer2: '',
        betBySMS: '',
        betMultipleBySMS: '',
        betByUSSD: ''
    },
    virtuals: {
        virtuals: 'Virtuals',
        virtualLeagues: 'Virtual Leagues',
        menu: {
            loadingGamesList: 'Loading games list...',
            noGamesAvailable: 'No games are available at the moment',
        },
        gameUnavailable: 'Game Not Available',
    },
    common: {
        cashout: {
            cashoutValue: 'Cash Out Value',
            cashoutNow: 'Cash Out Now',
            cashout: 'Cash Out',
            cashoutRequested: 'Cash out requested',
            cashoutDisclaimer: 'Cash-out from Admin account.',
            awaitingApproval: 'In evaluation',
            loginRequired: 'You must be logged in to cash out this coupon',
            cashoutUnavailable: 'Cash-Out Temporarily Unavailable',
            success: 'Cashout is being evaluated by operator. You will be notified shortly with the result.',
            approved: 'Coupon {couponCode} has been cashed out with a value of {cashoutValue}.',
            rejected: 'Cashout for coupon {couponCode} has been rejected by operator.',
            runningMarketMessage: 'Running market not allowed for cashout',
            errors: {
                generic: 'An error has occurred during the cashing out process. Please try again',
                105: 'Cashout unavailable when in-play',
                300: 'An error has occurred during the cashing out process. Please try again',
                301: 'Cash out for this coupon has already been requested',
                302: "The number of odds being cashed out doesn't match the ones in the coupon", //TODO: Better explanation
                303: 'The offered cash out value count is smaller than the coupons to cash out count', //TODO: Better explanation
                304: 'Offered cash out value is different than computed by the system',
                305: 'An unhandled error has occurred during cash out. Please try again.',
                306: 'Live not available for started match',
                307: 'Timeout exceeded for cashout request after cashout value calculation',
                308: 'Out of leeway',
                309: 'Hash integrity violation',
            }
        },
        vendors: {
            allProviders: 'All Providers',
            hiveGames: 'New Casino',
            betsoft: '3D Slots',
            netent: 'Ace Casino',
            espressoGames: 'Queen Casino',
            blueOceanGaming: 'Vegas Games'
        },
        registerNow: 'Join Now',
        depositNow: 'Deposit Now',
        betNow: 'Bet Now',
        rowsPerPage: 'Rows per page',
        showing: 'Showing',
        of: 'of',
        entries: 'entries',
        selectType: 'Select Type',
        toViewDetails: 'to view details',
        sessionStart: 'Session Start',
        sessionEnd: 'Session End',
        duration: 'Duration',
        male: 'Male',
        female: 'Female',
        yes: 'Yes',
        filters: 'Filters',
        no: 'No',
        saveSelection: 'Save Selection',
        couponCopyDetials: 'Do you require a copy of the coupon',
        exportToCsv: 'Export to CSV',
        total: 'Total',
        loading: 'Loading...',
        reset: 'Reset',
        submit: 'Submit',
        save: 'Save',
        on:'on',
        refresh: 'Refresh',
        close: 'Close',
        back: 'Back',
        next: 'Next',
        cancel: 'Cancel',
        proceed: 'Proceed',
        reply: 'Reply',
        all: 'All',
        allTournaments: 'All Tournaments',
        viewMarkets: 'View Markets',
        superAgents: 'Super Agents',
        agents: 'Agents',
        users: 'Users',
        confirm: 'Confirm',
        ok: 'Ok',
        print: 'Print',
        other: "Other",
        iUnderstand: 'I Understand',
        select: 'Select',
        selectAll: 'Select All',
        selectFirst30: 'Select First 30 events',
        unSelectAll: 'Unselect All',
        unSelectFirst30: 'Unselect First 30 events',
        favourites: 'Favourites',
        search: 'Search',
        toFind: 'Search',
        from: 'From',
        to: 'To',
        delete: 'Delete',
        user: 'User',
        agent: 'Agent',
        date: 'Date',
        time: 'Time',
        status: 'Status',
        accept: 'Accept',
        reject: 'Reject',
        details: 'Details',
        error: 'Error',
        success: 'Success',
        info: 'Information',
        bonusTitle: 'Bonus Title',
        searchEvents: 'Search Events here:',
        qrCodeText: 'Access the mobile version!',
        realityCheck: {
            partOne: 'Kindly note that the game session has been active for ',
            partTwo: ' minutes. Would you like to log out?'
        },
        chooseDevice: {
            preferredLayout: 'Select your preferred layout',
            whichLayout: 'Which layout do you wish to use?',
            mobile: 'Mobile',
            desktop: 'Desktop'
        },
        currencySymbols: {
            '1': '€',
            '2': 'CHF',
            '3': '$',
            '7': '£',
            '10': 'lei',
            '11': 'R$',
            '12': 'RD$',
            '13': '$',
            '14': 'PEN',
            '15': 'KEN',
            '16': '₦',
            '17': 'kr',
            '18': 'kr',
            '19': 'kr',
            '20': 'руб',
            '21': '¥',
            '22': 'BGN',
            '23': '₤',
            '24': '$',
            '25': 'GEL',
            '26': '$',
            '27': 'RSD',
            '28': 'ብር',
            '29': 'GH₵',
        },
        month: {
            '1': 'January',
            '2': 'February',
            '3': 'March',
            '4': 'April',
            '5': 'May',
            '6': 'June',
            '7': 'July',
            '8': 'August',
            '9': 'September',
            '10': 'October',
            '11': 'November',
            '12': 'December'
        },
        day: {
            '0': 'Sunday',
            '1': 'Monday',
            '2': 'Tuesday',
            '3': 'Wednesday',
            '4': 'Thursday',
            '5': 'Friday',
            '6': 'Saturday'
        },
        footer: {
            menu: {
                contact: 'Contact Us',
                terms: 'Terms & Conditions',
                about: 'About us',
                responsibleGaming: 'Responsible Gaming',
                help: 'Help Area',
                faq: 'FAQs'
            },
            footerInfo1a: '{{brandUrl}} supports',
            footerInfo1b: 'Responsible Gaming',
            footerInfo1c:
                '. The game should not be a way to solve financial or personal problems , should not constitute a source of income or alternative livelihood to the work . Playing irresponsibly can cause addiction. The games are available for persons age 18 years or over.',
            footerInfo2:
                'Copyright {{copyrightYear}} {{brandUrl}} - All rights reserved.{{companyName}} ({{companyLicenseNo}})) with registered address at {{companyAddress}} is licensed and regulated by {{licensingCompany}}.',
            footerInfo3:
                'Important Warning: The game clients in the sections Virtual Bets, Ace Casino, Queen Casino and NCasino, 3D Slots, NCasino Live, King Live and Jack Casino Live, One Poker are licensed by the Government of Curaçao under New Bay B.V., a corporation organized and established under the laws of Curaçao, with gaming license number 5536/JAZ issued by CIL Curacao Interactive Licensing N.V.',
            footerLicensed: 'Licence Numbers: {{licenseNumbers}} effective from the {{licenseEffectiveDate}}',
            footerCookiesInfo1: 'By using the {{brandUrl}} site, you consent to the use of cookies. For more information, please see our',
            footerCookiesInfo2: 'cookie policy',
            footerCookieDisabled: 'Cookies need to be enabled to use this site.',
            menuTermsAndConditions: {
                termsAndConditions: 'Terms And Conditions',
                introduction: 'Introduction',
                obligations: 'Obligations',
                registration: 'Registration',
                restrictedUse: 'Restricted Use',
                privacy: 'Privacy',
                yourAccount: 'Your Account',
                inactiveAccounts: 'Inactive Accounts',
                depositOfFunds: 'Deposit of Funds',
                withdrawals: 'Withdrawals',
                paymentTransactionsAndProcessors: 'Payment Transactions and Processors',
                errors: 'Errors',
                generalRules: 'General Rules',
                communicationsAndNotices: 'Communications and Notices',
                mattersBeyondOurControl: 'Matters Beyond Our Control',
                liability: 'Liability',
                underAgeUseOfTheServices: 'Under Age Use of the Services',
                fraud: 'Fraud',
                intellectualProperty: 'Intellectual Property',
                yourLicense: 'Your License',
                prohibitedConduct: 'Prohibited Conduct',
                linksToOtherWebsites: 'Links to Other Websites',
                complaints: 'Complaints',
                registrationAndInformation: 'Registration and Information',
                assignment: 'Assignment',
                severability: 'Severability',
                breachOfTheseTerms: 'Breach of These Terms',
                governingLaw: 'Governing Law',
                generalProvisions: 'General Provisions'
            }
        },
        companyDetails: {
            accountLimitEmail: '{{accountLimitEmail}}',
            brandName: '{{brandName}}',
            brandUrl: '{{brandUrl}}',
            companyName: '{{companyName}}',
            companyLicenseNo: '{{companyLicenseNo}}',
            companyAddress: '{{companyAddress}}',
            companyTelephoneNo: '{{companyTelephoneNo}}',
            copyrightYear: '{{copyrightYear}}',
            companyInterswitchAtmCode: '{{companyInterswitchAtmCode}}',
            licenseNumbers: '{{licenseNumbers}}',
            licenseEffectiveDate: '{{licenseEffectiveDate}}',
            licensingCompany: '{{licensingCompany}}',
            infoEmail: '{{infoEmail}}',
            securityEmail: '{{securityEmail}}',
            documentsEmail: '{{documentsEmail}}',
            hrEmail: '{{hrEmail}}',
            pressEmail: '{{pressEmail}}',
            assistanceEmail: '{{assistanceEmail}}',
            bankName: '{{bankName}}',
            bankAddress: '{{bankAddress}}',
            bankCity: '{{bankCity}}',
            bankAccountName: '{{bankAccountName}}',
            bankAccountNumber: '{{bankAccountNumber}}',
            bankSwiftBic: '{{bankSwiftBic}}',
            bankIban: '{{bankIban}}'
        },
        gamesNotAvailable:
            'Due to scheduled maintenance work, the games are currently unavailable. We will finish as soon as possible so that we can provide an even higher quality of service! Thank you for your patience!',
        currency: '',
        helpWidget: {
            help: 'Help',
            title: 'Help & Support',
            assistance: 'How can we be of assistance?',
            helpCentre: 'Online help centre & FAQs',
            liveChat: 'Live Chat',
            liveChatIntegrationText: 'Talk to us now, through our Live Chat!',
            infoEmail: '{{infoEmail}}',
            contactSupport: 'Contact support',
            launchOnlineChat: 'Launch Online Chat',
            contactUsForm: 'Contact Us Form'
        },
        settingsWidget: {
            oddsFormat: 'Odds Format',
            siteFormat: 'Site Format',
            siteTheme: 'Site Theme'
        },
        socialIcons: {
            whatsapp: {
                title: 'Whatsapp Destek',
                content: '<p><b>Adım 1 </b><br>Bu numarayı telefonunuza kayıt edin <br> <b>WhatsApp No : +356 123456789</b></p>'
            },
            telegram: {
                title: 'Telegram Destek',
                content: '<p><b>Adım 1 </b><br>Bu numarayı telefonunuza kayıt edin <br> <b>Telegram No : +356 123456789</b></p>'
            }
        },
        oddFormats: {
            decimal: 'Decimal',
            fractional: 'Fractional',
            american: 'American'
        },
        statuses: {
            all: 'All',
            deleted: 'Deleted',
            closed: 'Closed',
            registered: 'Registered',
            active: 'Active',
            inactive: 'Inactive',
            unconfirmed: 'Unconfirmed',
            suspended: 'Suspended',
            confirmed: 'Confirmed',
            passwordChanged: 'Password Changed',
            refusedTerms: 'Refused Terms',
            blocked: 'Blocked',
            awaitingDeposit: 'Awaiting Deposit'
        },
        error404: 'Error 404 - the requested page could not be found.',
        liveChatUnavailable: 'Live chat is unavailable',
        withdraw: 'Withdraw',
    },
    footer: {
        footerN: '© {{ copyrightYear }} {{ companyName }} T/A {{ brandName }} {{ companyLicenseNo }}. All Rights Reserved by {{ companyName }} T/A {{ brandName }}.'
    }
};
