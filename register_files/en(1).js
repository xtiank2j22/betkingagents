var localeOverride = {
    account: {
        userAreaMenu: {
            betSearchVirtualsBottomDisclaimer: 'For BetKing Virtuals Only',
            agentContent: 'Agent Content',
        },
        shopWebsite: {
            bonusDashboard: {
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
                    totalCommission: 'Total Commission',
                    totalStake: 'Total Stake',
                    totalWinnings: 'Total Winnings',
                    totalWeightedStake: 'Total Weighted Stake',
                    ofGrossProfit: '% of Gross Profit',
                    grossProfit: 'Gross Profit',
                    bonus: 'Bonus',
                    tooltipTable: `<table>
                                <tr>
                                    <th>Avg. Number of selections(From)</th>
                                    <th>Avg. Number of selections(To)</th>
                                    <th>GGR Margin < 80%</th>
                                    <th>GGR Margin >= 80%</th>
                                </tr>
                                <tr><td>1.00</td><td>3.00</td><td>5%</td><td>5%</td></tr>
                                <tr><td>3.01</td><td>6.00</td><td>30%</td><td>5%</td></tr>
                                <tr><td>6.01</td><td>8.00</td><td>35%</td><td>15%</td></tr>
                                <tr><td>8.01</td><td>Max</td><td>40%</td><td>20%</td></tr>
                            </table>`
                },
                blackFridayBonusDisclaimer: '<b>Limited Offer!</b> Black Friday Bonus applies if you trade a min of 6 days from Nov 25 - Dec 1, minimum of 400 bets a week and a minimum sales value of N150,000 for the week.',
                tabs: {
                    blackFridayBonus: "Black Friday Bonus"
                },
                pages: {   
                    blackFridayInfo: `<div class='title'><p>Black Friday Bonus</p></div>
                                    <p><b>Limited Offer!</b> Black Friday Bonus applies if you trade a min of 6 days from Nov 25 - Dec 1.</p>
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
                                            <br />
                                            <strong>Important Notice:</strong> This report has been updated to match West African Time. <br />
                                            <br><b>a. The bonus value is given only if:</b>
                                            <br>&emsp;<strong>i.</strong> The total stake for the selected period exceeds 150,000&#8358;.
                                            <br>&emsp;<strong>ii.</strong> The gross profit is not in negative (i.e. it exceeds 0&#8358;).
                                            <br>&emsp;<strong>iii.</strong> The total amount of Turnover commission that will be/has been paid to you for the selected period is less than the commission % amount based on GGR (i.e. X% of GGR minus total Turnover commission exceeds 0&#8358;)
                                            <br><strong>b.</strong> If the above 3 conditions are not all met, then the report will specify "No Bonus" and you would not be eligible for the monthly sports bonus.
                                            <br /><br />
                                            * <b>N.B.</b>  Total Estimated Commission is the <b>estimated commission</b> amount of your <b>Sports Turnover</b> Commission <b>for this week</b>. For sports periods of prior months, this amount will be 0, as all your Turnover Commission would have been paid and is listed in the Total Paid Commission box.
                                            `
                },
                tooltip: {
                    weeklyBets: "<span class='current-status-label'>Weekly Bets Target: <b>",
                    bonusEligibleBlackFriday: {
                        0: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;2,000</b></span></br>",
                        1: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;5,000</b></span></br>",
                        2: "<span class='current-status-label'>Bonus Eligible: <b>&#8358;10,000</b></span></br>",
                    }
                }
            },
            reports: {
                mobileVirtuals: {
                    disclaimer: 'This report cannot be issued before 13 April 2020. Choose a date range from 13 April 2020.',
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
                agentCommission: {
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
                    infoDisclaimer: '<strong>Important Notice:</strong> This report has been updated to match West African Time. '+ 
                    'To maintain sanity on the records, you will be unable to merge reports from any period before May 27, 2019 with any period after. <br>',
                    bonusFormulaDisclaimer: '<br><b>a. The bonus value is given only if:</b>' +
                        '<br>&emsp;<strong>i.</strong> The total stake for the selected period exceeds 150,000&#8358;.' +
                        '<br>&emsp;<strong>ii.</strong> The gross profit is not in negative (i.e. it exceeds 0&#8358;).' +
                        '<br>&emsp;<strong>iii.</strong> The total amount of Turnover commission that will be/has been paid to you for the selected period is less than the commission % amount based on GGR (i.e. X% of GGR minus total Turnover commission exceeds 0&#8358;)' +
                        '<br><strong>b.</strong> If the above 3 conditions are not all met, then the report will specify "No Bonus" and you would not be eligible for the monthly sports bonus.',
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
                commissionAnalysis: {
                    titles: {
                        agentCommission: 'Agent Commission',
                        sportsAnalysis: 'Sports Commission Estimate',
                        betKingVirtualAnalysis: 'BK Virtual Commission Estimate',
                        globalBetVirtualAnalysis: 'GB Virtual League Commission Estimate',
                        globalBetColorColorAnalysis: 'Color Color Commission Estimate',
                        secondLevelDetails: ' / 2nd Level Details Report',
                        lotSpecialFiveAnalysis: 'Lottery Special 5 Commission Estimate',
                        lotDailyAnalysis: 'Lottery Daily Game Commission Estimate',
                    },
                    selection: 'Selection',
                    commissionBand: "Commission Band",
                    couponCount: "Coupon Count",
                    commissionEstimate: "Commission Estimate",
                    numberOfSelections: "Number of selections",
                    productType: "Product Type",
                    settledDate: "Settled Date",
                    ticketId: "Ticket Id",
                }
            },
            digitalAcceptance: {
                warningMessageRemainingDays: 'Dear Kingmaker, GREAT NEWS... your new {{brandName}} Agent agreement is ready. To continue enjoying our full services, please read and accept the Agent Agreement and associated T&Cs. Please send all questions, queries on the agreement to CS@BetKing.com. Your Signed Agreement deadline is {remainingDays} Days',
                warningMessageLimitExceeded: 'Dear Kingmaker, GREAT NEWS... your new {{brandName}} Agent agreement is ready. To continue enjoying our full services, please read and accept the Agent Agreement and associated T&Cs as soon as possible. Please send all questions, queries on the agreement to CS@BetKing.com',
            }
        },
        password: {
            emailSent: "Password reset instructions have been sent to your registered email",
            passwordAnnotation: "Your password should be between 6 and 15 characters long, and must not contain spaces.",
            nameAnnotation: "Your first and last name should be the same as the details that appear on your bank account.",
            passMin: "Password must be between 6 to 15 characters long",
            passMax: "Password must be between 6 to 15 characters long",
        },
        editProfile: {
            saveWithdrawalBankProfile: {
                errorOnNewAndRejected: 'These bank details were previously added to this account and have been rejected. Please contact customer support for more details <a href="/help/general-help/contact-us/">here</a>.',
                errorOnAlreadyDisabled: 'These bank details were previously added to this account and have since been disabled. If you would like to re-enable these details, please contact customer support <a href="/help/general-help/contact-us/">here</a>.',
                profileSuccessfullySaved: 'Profile Successfully Saved'
            },
            personalData: {
                city: 'LGA',
                state: "State of Residence",
            },
        },
        paymentMethods: {
            interswitch: {
                successfullMessage: "Its on its way! <br>Payment should hit your bank account within 24 hours. <br><b>NOTE</b>: If you have a <b>winning</b> of <b>₦300,000</b> and above, please send a <b>valid ID card</b> to <b>cs@betking.com</b> to enable us process your withdrawal request. <br>#KeepKinging",
                newSuccessfullMessage: "It's on the way! <br>Payment should hit your bank account within 24 hours. Sit tight and #KeepKinging.",
            },
            withdrawal: {
                changeDetailsDisc: 'If you wish to change any information regarding your saved bank details, please contact <a href="/help/general-help/contact-us/">customer support</a>',
                emailHTML: 'Unable to get user eMail: ',
                changeProfileHTML: '<b>Bank not accepted by payment</b></br ></br > Please conceder select another Payment Method</br > Or changing the Payment Profile',
            },
            noPaymentAvailable: 'No payment options are available',
            reverseWithdraw: {
                pendingRequestStatus: 'You currently have the following withdrawal request pending',
                amount: 'Amount',
                madeOn: 'made on',
                buttonLabel: 'Would you like to cancel this request?',
                buttonText: 'Yes, Cancel Withdrawal',
            },
            depositContent: "There are minimum and maximum deposit limits. Some transactions have fees that are charged by the provider.",
            depositFieldShort: "Your field is too short",
            depositFieldLong: "Your field is too long",
            paymentGeneralErrorCodes: {
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
        },
        bankProfile: {
            pendingBankAccountDetails: 'Your bank profile is still pending approval. Contact customer care for further details',
            personalDisclaimer: '* Bank account information provided must belong to you and match the name on your BetKing account.',
        },
        betSearch: {
            outcomeOptions: {
                placed: "Running",
            },
        },
        register: {
            promoCode: {
                title: 'Do you have a promotion code?',
                yes: 'Yes',
                no: 'No'
            },
            success: {
                getStarted: 'Tutorials',
                description1: "You have successfully created your {{brandName}} account and are now logged in. Make your First Deposit by clicking the 'Deposit' button below.",
            }
        },
        cashier: {
            statements: {
                reportDisclaimer: '<strong>Important Notice:</strong> This report has been updated to match West African Time and records are from 12:00am - 11:59pm daily. </br></br>',
                reportTitle: '* Please note, when filtering specific transaction types, ' +
                'the balance shown is equivalent to the balance as at the time of the transaction displayed.'
            },
        },
    },
    login: {
        accountLocked: "You have exceeded the maximum number of log in trials.<br/>Try again in 10 minutes.<br/><br/><span style='font-size:14px;'> Forgotten your password? <a href='/reset-password/'>Click here</a></span>",
    },
    sports: {
        events: {
            eventOdds: {
                outright: "Antepost", 
            },
        },
        coupon: {
            errorOddResult: {
                3: "AntepostError",
            },
        },
        selectOutRight: "Select Antepost",
    },
    common: {
        statuses: {
            all: 'All',
            deleted:'Deleted',
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
        helpWidget: {
            contactSupport: 'Contact support',
            launchOnlineChat:'Launch Online Chat',
            contactUsForm: 'Contact Us Form',
        },
        settingsWidget: {
            oddsFormat: 'Odds Format',
            siteFormat: 'Site Format',
            siteTheme: 'Site Theme',
        },
        footer: {
            footerInfo2: "© {{ copyrightYear }} {{ companyName }} T/A {{ brandName }} [footerLicenseNumber]. All Rights Reserved by {{ companyName }} T/A {{ brandName }}."
        }
    }
};