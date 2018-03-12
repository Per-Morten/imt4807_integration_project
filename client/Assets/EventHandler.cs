using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class EventHandler : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void Hello();

    [DllImport("__Internal")]
    private static extern string StringReturnValueFunction();

    [DllImport("__Internal")]
    private static extern void LoadIframe();

    // Use this for initialization
    void Start()
    {
        //Hello();

        //Debug.Log(StringReturnValueFunction());

        LoadIframe();
    }

    // Update is called once per frame
    void Update()
    {

    }
}
