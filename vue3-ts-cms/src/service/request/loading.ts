import { ElLoading  } from "element-plus";

export class AxiosLoading {
  loadingCount: number;
  loading: any
  constructor() {
    this.loadingCount = 0;
  }

  initLoading() {
    if (this.loading) {
      this.loading?.close?.()
    }
    this.loading = ElLoading.service({
      lock: true,
      text: "加载中...",
      background: "rgba(255,255,255,0.5)",
      fullscreen: true
    })
  }

  addLoading() {
    if (this.loadingCount === 0) {
      this.initLoading()
    }
    this.loadingCount++;
  }

  closeLoading() {
    this.loadingCount--;
    if (this.loadingCount <= 0) {
      this.loading.close()
    }
  }
}
