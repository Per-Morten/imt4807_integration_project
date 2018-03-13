using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class EventHandler : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void LoadIframe(string url);

    // Use this for initialization
    void Start()
    {
        //var str = "https://www.youtube.com/embed/AK9BPC5Qosc?autoplay=1&showinfo=0&fs=0&showsearch=0&iv_load_policy=3&mute=1";
        LoadIframe(url: "https://www.youtube.com/embed/AK9BPC5Qosc?autoplay=1&showinfo=0&fs=0&showsearch=0&iv_load_policy=3&mute=1");      
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
