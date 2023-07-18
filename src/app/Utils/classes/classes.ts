export class DashboardResponce {
    errors: any
    result!: DashboardeResult
}

export class DashboardeResult {
    data!: DashboardData
    dataType!: string
    page!: string
    sort!: string
}

export class DashboardData {
    appCount!: number
    clientCount!: number
    userCount!: number
}